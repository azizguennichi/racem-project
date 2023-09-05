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
  ProgressBar,
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
} from "../styled-components/StylerunTest";
import { publicRequest } from "../requestMethod";

function Runtest() {
  const [inputValue, setInputValue] = useState();
  const [progress, setProgress] = useState(0);
  const [type, setType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [serial, setSerial] = useState("");
  const [hideButtons, setHideButtons] = useState(false);
  const [data, setData] = useState({});
  const [showMessage, setShowMessage] = useState(true);
  const [testName, setTestName] = useState("");
  const [testNames, setTestNames] = useState([]);
  const [StategtName, setStatgetName] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [StatGetData, setGetData] = useState([]);
  const [activeTestIndex, setActiveTestIndex] = useState(0);

  const handleFetchData = async () => {
    try {
      const response = await publicRequest.get("/getAllTests");
      console.log(response);
      const testnames = response.data.map((test) => test.name);
      setTestNames(testnames);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFetchData();
  }, []);
  useEffect(() => {
    // Assuming 'Tests' is an array containing test objects with a 'name' property
    const testNames = Testes.Testes.map((test) => test.name);
  }, []);

  const [verificationText, setVerificationText] = useState(
    Testes.Testes[0].description
  );
  const [index, setIndex] = useState(1);
  const exp = ["test1", "test2", "test3", "test4"];
  const handleChangeExp = async () => {
    try {
      const res = await publicRequest.get("/getAllTests");
      setGetData(res.data);
    } catch (e) {
      console.log("error");
    }

    setIndex(index + 1);
    setActiveTestIndex((prevIndex) => (prevIndex + 1) % Testes.Testes.length);
    setTestName(exp[index]);
  };
  const handleConnect = async () => {
    try {
      const res = await publicRequest.post("/connect/01:23:45:67:99:E3");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // This useEffect will be triggered when either `index` or `testName` changes.
    // We'll check if both `index` and `testName` are updated before proceeding to set the `verificationText`.
    if (index !== 0 && testName !== "") {
      const test = Testes.Testes.find((test) => test.name === testName);
      if (test) {
        setVerificationText(test.description);
        if (test.name === "test3") {
          setShowMessage(true); // Show the message for test3
          setHideButtons(true);
          setVerificationText("Connexion en cours...");
          handleConnect();
          setTimeout(() => {
            setShowMessage(!showMessage); // Hide the message after 4 seconds
            setHideButtons(false);
            setVerificationText(test.description);
          }, 6000);
        }
      }
    }
  }, [index, testName]);
  // Function to hide the message after 3 seconds
  const hideMessage = () => {
    setShowMessage(false);
  };
  // Call the hideMessage function after 3 seconds (3000 milliseconds)
  setTimeout(hideMessage, 3000);
  // get the scan
  const handleFetch = async () => {
    try {
      const data = await publicRequest.get("/tram/COM9");
      console.log(data);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
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
  /*************************************** */

  const handleChange = (e) => {
    setInputValue(e.target.value);
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
                  <option value="Test">Test</option>
                  <option value="t2"> t1</option>
                  <option value="t3"> t2</option>
                  <option value="t4">t3 </option>
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
                    value={inputValue}
                    onChange={handleChange}
                    disabled
                  />
                </InnerDiv1Card1>
                <InnerDiv2Card1>
                  <DivTextProg>
                    <TextScrole>Overall Progress</TextScrole>
                    <ProgressBarContainer1>
                      <ProgressBar1 progress={progress} />
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
                {testNames.map((testName, index) => (
                  <Tr key={index} active={index === activeTestIndex}> 
                    <TextField>
                      Étape {index + 1}: {testName}
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
                Étape {index} : <Green>{testNames[index-1]}</Green>
                </Text>
              </CardItem2>
              <CardItem3>
                <TextScrole1>Step Progress</TextScrole1>
                <ProgressBarContainer1>
                  <ProgressBar1 progress={progress} />
                </ProgressBarContainer1>
              </CardItem3>
              <CardItem4>
                <Text>Activity</Text>
                <LabelMac value={inputValue} onChange={handleChange} />
              </CardItem4>
              <CardItem5>
                <LabelEta2 value={inputValue} onChange={handleChange} />
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
          {!showMessage && !hideButtons && (
            <CardButton>
              <IconX onClick={handlePopupClose} />
              <IconCheck onClick={() => handleChangeExp()} />
            </CardButton>
          )}
        </DivVerifier>
      )}
    </MainContainer>
  );
}

export default Runtest;
