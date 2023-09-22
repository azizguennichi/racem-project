import React, { useEffect, useState } from "react";
import {
  Container,
  H2,
  Mode,
  Text,
  Card,
  Input,
  RadioInput,
  Label,
  Field,
  Legend,
  Output,
  SearchInput,
  ButtonContainer,
  Button,
  ListBox,
  ListItem,
  Checkbox,
  InputList,
  InputField,
  OutputField,
  StyledArrowLeft,
  StyledArrowRight,
  ArrowField,
  ButtonSave,
} from "../styled-components/StyelSys";

import Select from "react-select";
import { publicRequest } from "../requestMethod";
import axios from "axios";
import { toast } from "react-toastify";
import Menu from "../layout/Menu";
import NavRigas from "../layout/NavRigas";

const SysConf = () => {
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [selectedList, setSelectedList] = useState([]);
  const [searchText, setSearchText] = useState(""); // Initialize with an empty string
  const [searchTextOutput, setSearchTextOutput] = useState(""); // Initialize with an empty string
  const [outputSet, setOutputSet] = useState(new Set());
  const [data, setData] = useState([]);
  const [sousData, setSousData] = useState([]);

  const [selectedOption, setSelectedOption] = useState("full");



  useEffect(() => {
    const getData = async () => {
      try {
        const res = await publicRequest.get("/getAllTests");
        console.log(res);

        // Initialize separate arrays for main tests and sub-tests
        const mainTests = [];
        const subTests = [];

        // Iterate through the response data
        res.data.forEach((test) => {
          // Check if test._id exists in the souTests of other tests
          const isSubTest = res.data.some((otherTest) =>
            otherTest.souTests.some((souTest) => souTest._id === test._id)
          );

          if (isSubTest) {
            // If test._id exists in the souTests of other tests, consider it a sub-test
            subTests.push({
              _id: test._id,
              name: test.name,
              description: test.description,
              etat: test.etat,
              souTests: test.souTests,
            });
          } else {
            // If test._id doesn't exist in the souTests of other tests, consider it a main test
            mainTests.push({
              _id: test._id,
              name: test.name,
              description: test.description,
              etat: test.etat,
              souTests: test.souTests,
            });
          }
        });

        // Now you have two separate arrays: mainTests and subTests
        console.log("Main Tests:", mainTests);
        console.log("Sub Tests:", subTests);

        // You can set these arrays in your state or use them as needed
        setData(mainTests);
        setSousData(subTests);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  const handleItemInput = (item) => {
    if (selectedList.find((selectedItem) => selectedItem._id === item._id)) {
      setSelectedList(
        selectedList.filter((selectedItem) => selectedItem._id !== item._id)
      );
    } else {
      setSelectedList([...selectedList, item]);
    }
  };

  const handleItemOutput = (item) => {
    const updatedOutputSet = new Set(outputSet);

    if (updatedOutputSet.has(item)) {
      updatedOutputSet.delete(item);
    } else {
      updatedOutputSet.add(item);
    }

    setOutputSet(updatedOutputSet);
  };

  const handleSelectAll = () => {
    const allTests = filteredOptions.map((test) => ({
      _id: test._id,
      description: test.description,
      souTests:test.souTests
    }));
    setSelectedList(allTests);
  };

  
  const handleRemoveAll = () => {
    setSelectedList([]);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchOutput = (e) => {
    setSearchTextOutput(e.target.value);
  };

  const moveItemToLeft = () => {
    // Move selected items from outputSet to selectedList (opposite direction)
    setSelectedList([...selectedList, ...Array.from(outputSet)]);
    setOutputSet(new Set());
  };

  const moveItemToRight = () => {
    // Move selected items from selectedList to outputSet
    setOutputSet(new Set([...Array.from(outputSet), ...selectedList]));
    setSelectedList([]);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  console.log(selectedOption)
  const filteredOptions = data.filter(
    (test) =>
      test.description.toLowerCase().includes(searchText.toLowerCase()) ||
      test.souTests.some((souTest) =>
        souTest.description.toLowerCase().includes(searchText.toLowerCase())
      )
  );

  const filteredOptionsOutput = Array.from(outputSet).filter(
    (item) =>
      item.description.toLowerCase().includes(searchTextOutput.toLowerCase()) ||
      item.souTests.some((souTest) =>
        souTest.description.toLowerCase().includes(searchTextOutput.toLowerCase())
      )
  );
  

  const handleSave = async () => {
    const outputList = Array.from(outputSet);
    const output = {
      productMode: type,
      timeTest: time,
      modeTest: selectedOption,
      tests: outputList.map((test) => test._id), // Save only the IDs
    };

    try {
      // Make a POST request to your backend API endpoint
      const response = await publicRequest.post("/add-cat-test", output);

      // Handle the response if needed
      console.log("Saved Output Response:", response.data);
      toast.success("data send successfully");

      // Optionally, reset the form or perform other actions
      // Resetting the output set in this case
      setOutputSet(new Set());
    } catch (error) {
      console.log("Error saving the output:", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <NavRigas />
      <Menu />
      <Container>
        <Card>
          <Text>modèle de produit:</Text>
          <Mode
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
           
          >
            <option value="">Select Model</option>
            <option value="GO">GO</option>
            <option value="Preste">Preste</option>
            <option value="Rival">Rival</option>
          </Mode>
        </Card>

        <Card>
          <Text>Durée minimale du test unitaire:</Text>
          <Input
            name="time"
            id="time"
            placeholder="10"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />{" "}
          (en seconde)
        </Card>

        <Card>
          <Text>Mode de test :</Text>

          <RadioInput
            id="full"
            name="option"
            value="full"
            checked={selectedOption === "full"}
            onChange={handleOptionChange}
          />
          <Label htmlFor="full">Full</Label>

          <RadioInput
            id="custom"
            name="option"
            value="custom"
            checked={selectedOption === "custom"}
            onChange={handleOptionChange}
          />
          <Label htmlFor="custom">Custom</Label>
        </Card>

        <Field>
          <Legend>Séquence de test</Legend>
          <InputField>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearch}
            />
            <ButtonContainer>
              <Button onClick={handleSelectAll}>Select All</Button>
              <Button onClick={handleRemoveAll}>Remove All</Button>
            </ButtonContainer>
            <ListBox>
              {filteredOptions.map((test, index) => (
                <ListItem key={test._id}>
                  <Checkbox
                    type="checkbox"
                    checked={
                      !!selectedList.find((item) => item._id === test._id)
                    } // Ensure it's a boolean
                    onChange={() => handleItemInput(test)}
                  />
                  {test.description}
                  <ul>
                    {test.souTests.map((souTest) => (
                      <li key={souTest._id}>
                        {/* <Checkbox
                          type="checkbox"
                          checked={selectedList.find((item) => item._id === souTest._id)}
                          onChange={() => handleItemInput(souTest)}
                        /> */}
                        {souTest.description}
                      </li>
                    ))}
                  </ul>
                </ListItem>
              ))}
            </ListBox>
          </InputField>
          <ArrowField>
            <StyledArrowRight onClick={moveItemToRight} />
            <StyledArrowLeft onClick={moveItemToLeft} />
          </ArrowField>
          <OutputField>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchTextOutput}
              onChange={handleSearchOutput}
            />
            <ButtonContainer></ButtonContainer>
            <ListBox>
              {filteredOptionsOutput.map((item, index) => (
                <ListItem key={item._id} className="hidden-checkbox">
                  <Checkbox
                    type="checkbox"
                    checked={outputSet.has(item)}
                    onChange={() => handleItemOutput(item)}
                  />
                  {item.description}
                  <ul>
                    {item.souTests.map((souTest) => (
                      <li key={souTest._id}>
                        {/* <Checkbox
                          type="checkbox"
                          checked={selectedList.find((item) => item._id === souTest._id)}
                          onChange={() => handleItemInput(souTest)}
                        /> */}
                        {souTest.description}
                      </li>
                    ))}
                  </ul>
                </ListItem>
              ))}
            </ListBox>
          </OutputField>
        </Field>
        <ButtonSave>
          <Button onClick={handleSave}>Sauvegarder</Button>
        </ButtonSave>
      </Container>
    </>
  );
};

export default SysConf;
