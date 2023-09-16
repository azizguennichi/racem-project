import React, { useState, useEffect } from "react";
import Testes from "../datat.json";
import {
  MainContainer,
  InnerContainer1,
  InnerContainer2,
  Container1,
  Card1Container1,
  Card1Container2,
  MenuCard1,
  Menu1Card2,
  Card1,
  InnerDivCard1,
  InnerDiv1Card1,
  InnerDiv2Card1,
  InnerButton,
  InnerDiv3Card1,
  Step,
  Text,
  Label,
  Button,
  ButtonRun,
  TextScrole,
  TextStp,
  Card2Container1,
  MenuCard2,
  progressAnimation,
  ProgressBarContainer1,
  ProgressBar1,
  ProgressBarContainer,
  Card2,
  Electric,
  Container2,
  DivVolt,
  InnerDivElect,
  ElectricInner1,
  ElectricInner2,
  MainDiv,
  SubDiv,
  DivVerifier,
  TextInsideBorder,
  CardButton,
  TextVerif,
  IconCheck,
  IconX,
  StyledSelect,
  LabelSerial,
  LabelModel,
  LabelMac,
  TextGreen,
  LabelStep,
  LabelActivity,
  ModalContainer,
  Run,
  CardItem,
  CardItem2,
  CardItem3,
  CardItem4,
  CardItem5,
  TextField,
  DivTextProg,
  LabelEta,
  LabelEta2,
  DivPopup,
  Table,
  Field,
  Tr,
  Td,
  Inner,
  Outer,
  InnerDivCard2,
  H3,
  LabelTotal,
  LabelTotalOk,
  LabelTotalNot,
  Green,
  TextScrole1,
  CardProgress,
  IconCheckDisabled,IconXDisabled
} from "../styled-components/StylerunTest";
import { publicRequest } from "../requestMethod";
import CircularProgressBar from "./CircularProgressBar";
import ProgressBarLine from "./ProgressBar";
import ProgressAll from "./ProgressAll";
import CircularProgressBarFaild from "./CircularProgressBarFaild";
import ProgressBarLineFaild from "./ProgressBarFaild";
import { toast } from "react-toastify";


function Runtest() {
  const [data, setData] = useState([]);
  const [globalData, setGlobalData] = useState({
    // Initialize globalData with res.data[0]
    tests: [], // Initialize the tests property as an empty array
  });

  const [activeTestIndex, setActiveTestIndex] = useState(0);
  
  const [tram, setTram] = useState({});

  const [inputValue, setInputValue] = useState();
  const [progress, setProgress] = useState(0);
  const [type, setType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [serial, setSerial] = useState("");
  const [hideButtons, setHideButtons] = useState(false);

  const [progressActive, setProgressActive] = useState(false);
  const [progressActiveX, setProgressActiveX] = useState(false);
  const [iconCheckDisabled, setIconCheckDisabled] = useState(false);
  const [iconXDisabled, setIconXDisabled] = useState(false);

  const [succes,setSucces] =useState("")
  const [faild,setFaild] =useState("")
  const [showLabel, setShowLabel] = useState("");
  const [allValue, setAllValue] = useState("");

  const [testFailed, setTestFailed] = useState(false);
  const [errorToastShown, setErrorToastShown] = useState(false);


  const sendGlobalDataToBackend = async () => {
    try {
      // Remove the specified properties from each test object in globalData.tests
      const testsWithoutSpecifiedProps = globalData.tests.map((test) => {
        const { name, description, __v, etat, ...rest } = test; // Destructure specified props and collect the rest of the properties
        return { ...rest, testId: test._id }; // Return the test object without specified props and with testId property
      });
  
      // Create a new globalData object without the specified props in tests
      const updatedGlobalData = {
        ...globalData,
        tests: testsWithoutSpecifiedProps,
        serialNumber: "Not Added", // Add the serialNumber property//must remove after test important!!!!
      };
  
      // Send the updated globalData to the backend
      const res = await publicRequest.post("/add-test-result", updatedGlobalData); // Adjust the endpoint URL as needed
      
      toast.success("data send successfully");
    } catch (error) {
      console.error("Error sending global data to backend:", error);
    }
  };
  
  
  
  
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await publicRequest.get(`/get-test-by-name${type ? "?nameQuery=" + type : ""}`);
        if (res.data && res.data.length > 0 && res.data[0].tests) {
          const testsWithResult = res.data[0].tests.map((test) => ({
            ...test,
            result: "", // Default value
          }))/* .map(({name,description,__v,etat, ...testWithoutEtat }) => testWithoutEtat); // Remove the etat property */
         
          setGlobalData({
            ...res.data[0],
            tests: testsWithResult, // Update the tests property with the new data
          });
          setData(testsWithResult);
      
          setActiveTestIndex(0);
          setSucces("");
          setFaild("");
          setAllValue("");
          setShowLabel("")
        } else {
          // Handle the case where the data structure is not as expected
          setData([]);
          setActiveTestIndex(0);
          setSucces("");
          setFaild("");
          setAllValue("");
          setShowLabel("")
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [type]);
  
  
  
// Modify handleConnect
const handleConnect = async () => {
  try {
    const res = await publicRequest.post("/connect/01:23:45:67:99:E3");
    console.log(res);

    // Handle successful connection here

    // If the connection is successful, update the flag and reset the tests
    setTestFailed(false);
    setFaild("");
    setProgressActiveX(false);
    
    // Update the result property to "Pass" for all tests in data
    const updatedData = data.map((test) => ({
      ...test,
      result: "pass",
    }));
    setData(updatedData);
  } catch (error) {
    console.log(error);
    if (!errorToastShown) {
      toast.error("Connection Failed");
      setErrorToastShown(true);
    }

    // If the connection fails, set the flag and fail all tests
    setTestFailed(true);
    setFaild("Connection Failed");
    setProgressActiveX(false);
    setAllValue("Overall Failed");

    // Update the result property to "Fail" for all tests in data
    const updatedData = data.map((test) => ({
      ...test,
      result: "fail",
    }));
    setData(updatedData);
  }
};

  const [verificationText, setVerificationText] = useState(
    data.length > 0 ? data[0].description : ""
  );

  
  // Modify handleFetch
const handleFetch = async () => {
  try {
    const tram = await publicRequest.get("/tram/COM9");
    console.log(tram);
    setTestFailed(false);
    // Handle successful fetch here
  } catch (error) {
    console.log(error);
    if (!errorToastShown) {
      toast.error("Loading Failed");
      setErrorToastShown(true);
    }
    // If the connection fails, set the flag and fail all tests
    setTestFailed(true);
    setFaild("Connection Failed");
    setProgressActiveX(false);
    setAllValue("Overall Failed");

    // Update the result property to "Fail" for all tests in data
    const updatedData = data.map((test) => ({
      ...test,
      result: "fail",
    }));
    setData(updatedData);
    setTestFailed(true);
  }
};
  
  // Now define your useEffect
  useEffect(() => {
    // Your existing useEffect code
    const test = data[activeTestIndex]; // Get the current test based on activeTestIndex
    if (test) {
      setVerificationText(test.description);
  
      if (data.length > 0) {
        if (activeTestIndex === 11) {
          // Trigger handleConnect when activeTestIndex is 3
          
          setHideButtons(true);
          setVerificationText("Connexion en cours...");
          handleConnect();
          // You may want to add a delay for handleConnect actions
          setTimeout(() => {
             
            setHideButtons(false);
            setVerificationText(test.description);
          }, 6000);
        } else if (activeTestIndex === 10) {
          // Trigger handleFetch when activeTestIndex is 4
          
          setHideButtons(true);
          setVerificationText("Fetching data...");
          handleFetch();
          // You may want to add a delay for handleFetch actions
          setTimeout(() => {
          
            setHideButtons(false);
            setVerificationText(test.description);
          }, 6000);
        } else {
          // Handle other cases where you don't need to trigger any actions
          
          setHideButtons(false);
        }
      }
    }
  }, [activeTestIndex, data, handleConnect, handleFetch]); // Include handleFetch in the dependency array
  
  

  // Simulating progress completion
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 10);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Check if progress is completed (100%) and show the popup
  useEffect(() => {
    if (progress === 100) {
      setShowPopup(true);
    }
  }, [progress]);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  

  // In advanceToNextItemX, check the progressActiveX flag
  const advanceToNextItem = () => {
    if (!progressActive && !iconCheckDisabled) {
      setProgressActive(true);
      setIconCheckDisabled(true);
      setSucces("");
      setFaild(""); // Clear the faild text

      // Simulate a 10-second progress
      setTimeout(() => {
        setSucces("Step Resultat Pass");
        setShowLabel("succes"); // Show the success label
        setProgressActive(false);
        setIconCheckDisabled(false);

        if (activeTestIndex < data.length) {
          // Update the result property to "Pass" for the current test
          const updatedData = [...data];
          updatedData[activeTestIndex].result = "pass";
          setData(updatedData);
          
          setActiveTestIndex(activeTestIndex + 1);
        }

        if (activeTestIndex === data.length - 1) {
          setAllValue("Overall Pass");
          // Update globalData with the new data
          const updatedGlobalData = { ...globalData, tests: [...data] };
          setGlobalData(updatedGlobalData);
           // Send globalData to the backend after all updates
          sendGlobalDataToBackend();
         
        }
      }, 10000); // 10 seconds in milliseconds
    }
  };

  const advanceToNextItemX = () => {
    if (!progressActiveX && !iconXDisabled) {
      setProgressActiveX(true);
      setIconXDisabled(true);
      setFaild("");
      setSucces(""); // Clear the success text

      // Simulate a 10-second progress
      setTimeout(() => {
        setFaild("Step Resultat Failed");
        setShowLabel("Failed"); // Show the faild label
        setProgressActiveX(false);
        setIconXDisabled(false);

        if (activeTestIndex < data.length) {
          // Update the result property to "Fail" for the current test
          const updatedData = [...data];
          updatedData[activeTestIndex].result = "fail";
          setData(updatedData);

          setActiveTestIndex(activeTestIndex + 1);
        }

        if (activeTestIndex === data.length - 1) {
          setAllValue("Overall Failed");
          // Update globalData with the new data
          const updatedGlobalData = { ...globalData, tests: [...data] };
          setGlobalData(updatedGlobalData);
           // Send globalData to the backend after all updates
          sendGlobalDataToBackend();
        }
      }, 10000); // 10 seconds in milliseconds
    }
  };


  
  


  return (
    <MainContainer>
      <Container1>
        <InnerContainer1>
          <Card1Container1>
            <MenuCard1>
              <CardItem>
                <Text>Test sequence</Text>
                <StyledSelect
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                >
                  <option value="Test">Test Mode</option>
                  <option value="GO">GO</option>
                  <option value="Preste">Preste</option>
                  <option value="Rival">Rival</option>
                </StyledSelect>
              </CardItem>
              <CardItem>
                <Text>Model #</Text>
                <LabelModel
                  value={inputValue}
                  onChange={handleChange}
                  disabled
                />
              </CardItem>
              <CardItem>
                <Text>Serial #</Text>
                <LabelSerial
                  value={inputValue}
                  onChange={handleChange}
                  disabled
                />
              </CardItem>

              <CardItem>
                <Text>Mac #</Text>
                <LabelMac value={inputValue} onChange={handleChange} disabled />
              </CardItem>
            </MenuCard1>
            <Card1>
              <InnerDivCard1>
                <InnerDiv1Card1>
                  <ButtonRun onClick={handleFetch}>
                    RUN
                    <Run />
                  </ButtonRun>
                  <LabelEta
                    value={allValue}
                    disabled
                    style={{
                      color:
                        allValue === "Overall Pass"
                          ? "green"
                          : allValue === "Overall Failed"
                          ? "red"
                          : "black",
                      border:
                        allValue === "Overall Pass"
                          ? "4px solid #32CD32"
                          : allValue === "Overall Failed"
                          ? "4px solid #FF0000"
                          : "4px solid grey",
                    }}
                  />
                </InnerDiv1Card1>
                <InnerDiv2Card1>
                  <DivTextProg>
                    <TextScrole>Overall Progress</TextScrole>
                    <ProgressBarContainer1>
                      <ProgressAll
                        data={data}
                        activeTestIndex={activeTestIndex}
                        testFailed={testFailed}
                      />
                    </ProgressBarContainer1>
                  </DivTextProg>
                  <InnerButton>
                    <Button>save as CSV</Button>
                    <Button>Save as PDF</Button>
                    <Button>Print</Button>
                  </InnerButton>
                </InnerDiv2Card1>
              </InnerDivCard1>
              <InnerDiv3Card1>
                <Text>Qte Totale testee</Text>
                <LabelTotal
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                />

                <Text>Qte Totale OK</Text>
                <LabelTotalOk
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                />
                <Text>Qte Totale NOK</Text>
                <LabelTotalNot
                  type="text"
                  value={inputValue}
                  onChange={handleChange}
                />
              </InnerDiv3Card1>
            </Card1>
          </Card1Container1>
          <Step>
            <Table>
              <tbody>
                {data.map((testName, index) => (
                  <Tr key={testName._id} active={index === activeTestIndex}>
                    <TextField
                      style={{
                        color:
                          testName.result === "fail"
                            ? "#FF0000"
                            : testName.result === "pass"
                            ? "#32CD32"
                            : "inherit",
                      }}
                    >
                      Étape {index + 1}: {testName.name}
                    </TextField>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </Step>
        </InnerContainer1>
        <InnerContainer2>
          <Card1Container2>
            <Menu1Card2>
              <CardItem2>
                <Text>
                  {data[activeTestIndex] && (
                    <Green
                      style={{
                        color:
                          data[activeTestIndex].result === "fail"
                            ? "#FF0000"
                            : data[activeTestIndex].result === "pass"
                            ? "#32CD32"
                            : "inherit",
                      }}
                    >
                      Étape {activeTestIndex + 1}: {data[activeTestIndex].name}
                    </Green>
                  )}
                </Text>
              </CardItem2>
              <CardItem3>
                <TextScrole1>Step Progress</TextScrole1>
                <ProgressBarContainer1>
                  {progressActive ? (
                    <ProgressBarLine />
                  ) : progressActiveX ? (
                    <ProgressBarLineFaild />
                  ) : null}
                </ProgressBarContainer1>
              </CardItem3>

              <CardItem5>
                <LabelEta2
                  value={showLabel === "Failed" ? faild : succes}
                  disabled
                  style={{
                    border: showLabel
                      ? showLabel === "Failed"
                        ? "4px solid  #FF0000"
                        : "4px solid #32CD32"
                      : "4px solid grey",
                    color: showLabel
                      ? showLabel === "Failed"
                        ? "#FF0000"
                        : "#32CD32"
                      : "black",
                  }}
                />
              </CardItem5>
            </Menu1Card2>
            <InnerDivCard2>
              <Outer>
                <Inner>Volts</Inner>
                <H3>3835 MV</H3>
              </Outer>
              <Outer>
                <Inner>Volts</Inner>
                <H3>3835 MV</H3>
              </Outer>
              <Outer>
                <Inner>Volts</Inner>
                <H3>3835 MV</H3>
              </Outer>
            </InnerDivCard2>
          </Card1Container2>
        </InnerContainer2>
      </Container1>
      {showPopup && (
        <DivVerifier>
          <TextInsideBorder>Operator Instructions</TextInsideBorder>
          <TextVerif>{verificationText}</TextVerif>
          {!hideButtons && (
            <CardButton>
              <CardProgress>
                {iconXDisabled ? (
                  <IconXDisabled
                    onClick={advanceToNextItemX}
                    disabled={iconXDisabled}
                  />
                ) : (
                  <IconX
                    onClick={advanceToNextItemX}
                    disabled={iconXDisabled}
                  />
                )}
                {progressActiveX && <CircularProgressBarFaild />}
              </CardProgress>

              <CardProgress>
                {iconCheckDisabled ? (
                  <IconCheckDisabled
                    onClick={advanceToNextItem}
                    disabled={iconCheckDisabled}
                  />
                ) : (
                  <IconCheck
                    onClick={advanceToNextItem}
                    disabled={iconCheckDisabled}
                  />
                )}
                {progressActive && <CircularProgressBar />}
              </CardProgress>
            </CardButton>
          )}
        </DivVerifier>
      )}
    </MainContainer>
  );
}

export default Runtest;