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
  const [searchText, setSearchText] = useState("");
  const [searchTextOutput, setSearchTextOutput] = useState("");
  const [outputSet, setOutputSet] = useState(new Set());
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await publicRequest.get("/getAllTests");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const handleItemInput = (item) => {
    if (selectedList.find((selectedItem) => selectedItem._id === item._id)) {
      setSelectedList(selectedList.filter((selectedItem) => selectedItem._id !== item._id));
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
    // Get an array of all tests with ID and name from the data array
    const allTests = data.map((test) => ({
      _id: test._id,
      name: test.name,
    }));

    // Set the selectedList state to contain all tests
    setSelectedList(allTests);
  };

  const handleRemoveAll = () => {
    // Set the selectedList state to an empty array
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

  const filteredOptions = data.filter((test) =>
    test.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredOptionsOutput = Array.from(outputSet).filter((item) =>
    item.name.toLowerCase().includes(searchTextOutput.toLowerCase()) ||
    item._id.toLowerCase().includes(searchTextOutput.toLowerCase())
  );

  const handleSave = async () => {
    const outputList = Array.from(outputSet);
    const output = {
      productMode: type,
      time: time,
      tests: outputList.map((test) => test._id), // Save only the IDs
    };
  
    try {
      // Make a POST request to your backend API endpoint
      const response = await publicRequest.post("/add-cat-test", output);
  
  
      // Handle the response if needed
      console.log('Saved Output Response:', response.data);
      toast.success("data send successfully");
  
      // Optionally, reset the form or perform other actions
      // Resetting the output set in this case
      setOutputSet(new Set());
    } catch (error) {
      console.error('Error saving the output:', error);
    }
  };

  return (
    <>
    <NavRigas />
    <Menu />
    <Container>
      <Card>
        <Text>Product Mode :</Text>
        <Mode name="type" id="type" onChange={(e) => setType(e.target.value)}>
          <option value="Test">Select Mode</option>
          <option value="GO">GO</option>
          <option value="Preste">Preste</option>
          <option value="Rival">Rival</option>
        </Mode>
      </Card>

      <Card>
        <Text>Durée minimum du test unitaires :</Text>
        <Input name="time" id="time" onChange={(e)=>setTime(e.target.value)}/>
      </Card>
      <Card>
        <Text>Mode de test :</Text>

        <RadioInput id="full" name="option" value="Full" />
        <Label htmlFor="full">Full</Label>

        <RadioInput id="custom" name="option" value="Custom" />
        <Label htmlFor="custom">Custom</Label>
      </Card>

      <Field>
        <Legend>Sequence de test</Legend>
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
                  checked={selectedList.find((item) => item._id === test._id)}
                  onChange={() => handleItemInput(test)}
                />
                {test.name} 
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
                {item.name} 
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
