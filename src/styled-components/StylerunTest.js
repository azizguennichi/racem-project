import styled, { keyframes } from 'styled-components';
import {BsXCircleFill,BsFillCheckCircleFill}from 'react-icons/bs'
import {FiPlay} from 'react-icons/fi'
export const MainContainer = styled.div`
display: flex;
color: #ffff;
flex-direction: column;
justify-content: space-around;


`;
export const Container1 = styled.div`
border: 2px solid #8DB2E3;
background-color: #ffff;
justify-content: space-between;
padding: 1px 20px;
margin-top: -1px;

`;
export const InnerContainer1=styled.div`
display: flex;
flex-direction: row;
justify-content:space-between ;
gap:20px;
align-items: center;
padding: 10px;

`

export const Card1Container1 = styled.div`
background-color: #0079C2;
display: flex;
flex-direction: column;
width: 100%;
`;

export const MenuCard1 = styled.div`

display: flex;
flex-direction: row;
height: 35px;
align-items: center;
justify-content: center;
margin-bottom: 8px;
padding: 0 20px;


`;


export const CardItem = styled.div`
flex-direction: row;
display: flex;
align-items: center;
width: 100%;
gap:10px;



`;
export const StyledSelect = styled.select`
  font-size: 14px;
  border: 2px solid #ccc;
  background-color:#ccc ;
  border-radius: 4px;
  width: 90px;
  min-height: 1.5em;
  outline: none;
  font-family: 'Signika Negative', sans-serif;


  /* Customize other styles as needed */
`;
export const Text =styled.p`
font-size: 14px;
font-family: 'Poppins', sans-serif; 
color: #ffff;
`
export const Green =styled.span`
font-size: 17px;
font-family: 'Poppins', sans-serif; 
color: #9CE61D;
`

export const LabelTotal =styled.input`
font-size: 16px;
padding: 2px;
width: 100px;
color: black;
text-align: center;
font-weight: bold;
`
export const LabelTotalOk =styled.input`
font-size: 14px;
padding:3px;
width: 100px;
color: green;
text-align: center;
font-weight: bold;
`
export const LabelTotalNot =styled.input`
font-size: 14px;
padding:3px;
width: 100px;
color: red;
text-align: center;
font-weight: bold;
`

export const Label=styled.input`
padding:3px;
width: 100px;
color: red;
text-align: center;
font-weight: bold;

`
export const LabelMac=styled.input`
background-color: #ffff;
width: 80%;
padding:2px;
text-align: center;
font-family: 'Signika Negative', sans-serif;
background-color: #0079C2;
color: #ffff;
border: 2.5px solid #ffff;

`
export const LabelModel=styled.input`

width: 50%;
padding:2px;
text-align: center;
font-family: 'Signika Negative', sans-serif;
background-color: #0079C2;
color: #ffff;
border: 3px solid #ffff;
  

`
export const LabelSerial=styled.input`
background-color: #0079C2;
color: #ffff;
border: 3px solid #ffff;
width: auto;
padding:2px;
text-align: center;
font-family: 'Signika Negative', sans-serif;
  
`
export const Card1 = styled.div`

display: flex;
padding: 5px 15px 5px 15px;
flex-direction: row;
justify-content: space-between;


`;
export const InnerDivCard1 = styled.div`

display: flex;
width: 100%;
flex-direction: column;
margin-top: -15px;




`;
export const InnerDiv1Card1 = styled.div`
background-color: #0079C2;
display: flex;
flex-direction: row;
justify-content: flex-start;
gap: 20%;


`;

export const InnerDiv2Card1 = styled.div`
background-color: #0079C2;
display: flex;
flex-direction: column;


`;
export const InnerButton=styled.div`
background-color: #0079C2;
display: flex;
flex-direction: row;
justify-content:flex-end;
align-items: center;
padding:0 50px;

 /* Add margins between components */
 & > * {
    margin-right: 20px; /* Adjust the margin value as per your preference */
  }

  /* Remove the margin from the last child to avoid extra space after the last component */
  & > *:last-child {
    margin-right: 0;
  }
`

export const InnerDiv3Card1 = styled.div`
  display: grid;
  border: 1px solid #ffff;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  padding:5px 7px;
  width :30% ;
  margin-right: 25px;
  margin-top: -8px;
`;

export const Step=styled.div`
width: 20%;
height: 190px;
border: 3px solid #D0D3F9;
`


export const Button=styled.button`
font-family: 'Signika Negative', sans-serif;
background-color:#0A122F ;
border-radius: 10px;
align-items: center;
align-content: center;
align-self: center;
color: #FFFFFF;
 cursor: pointer;
 padding: 0 35px;
 min-width: 100px;
 height: 27px;
 font-size: 14px;
 
 gap: 10px;
`
export const ButtonRun=styled.button`
background-color:#0A122F ;

display: flex;
justify-content: space-between;
border-radius: 15px;
align-items: center;
align-content: center;
align-self: center;
color: #FFFFFF;
 cursor: pointer;
 padding: 0 25px;
 min-width: 100px;
 height: 40px;
 font-size: 14px;
 
 gap: 10px;
`
export const TextScrole =styled.p`
font-size: 14px;
font-family: 'Signika Negative', sans-serif;
color: #ffff;
width: 20%;
margin-right:-20px;

`
export const TextScrole1 =styled.p`
font-size: 14px;
font-family: 'Signika Negative', sans-serif;
color: #ffff;
width: 20%;


`
export const TextStp =styled.p`
font-size: 12px;
color: #ffff;
font-family: 'Signika Negative', sans-serif;
  background-color: #1643F4;
  `
export const Card2Container1 = styled.div`
  flex: auto;

  /* Styles for Card2Container1 */
`;

export const MenuCard2 = styled.nav`
background-color: #0079C2;
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
flex: auto;


`;

export const Card2 = styled.div`
  /* Styles for Card2 */
`;
export const Electric=styled.div`
display:flex;
flex-direction: column;
background-color: #0079C2;
padding: 10px;
flex: auto;


`
export const ElectricInner1=styled.div`
margin-bottom:0%;
display:flex;
flex-direction: row;
background-color: #14647C;
justify-content: space-around;
flex: auto;

`
export const ElectricInner2=styled.div`
display:flex;
flex-direction: row;
background-color: #14647C;
justify-content: space-around;
padding: 10px;
flex: auto;


`
export const Container2 = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
//border: 1px solid #1643F4;
background-color: #ffff;
border-color:#1643F4 ;
padding : 8px;
flex: auto;

`;

export const progressAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${props => props.progress}%;
  }
`;
export const progressAnimation1 = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${props => props.progress}%;
  }
`;
export const ProgressBarContainer1 = styled.div`
  height: 30px;
  width: 100%; /* Set the desired width for the progress bar container */
  background-color: #f2f2f2;
  border-radius: 4px;
  margin-right: 40px;
 

`;

export const ProgressBar1 = styled.div`
  height: 100%;
  width: 100%; /* Make sure the progress bar always fills the container */
  max-width: 200%; /* Set the maximum width to 350px to round the width */
  background: linear-gradient(90deg, rgba(4,122,24,1) 0%, rgba(11,223,45,1) 3%, rgba(11,223,45,1) 97%, rgba(4,122,24,1) 100%);
;
  border-radius: 4px;
  animation: ${progressAnimation} 2s ease-in-out;
 

`;

export const ProgressBarContainer = styled.div`
 
  background-color: #f2f2f2;
  border-radius: 4px;
  

`;

export const ProgressBar = styled.div`
   height: 100%;
  width: 100%; /* Make sure the progress bar always fills the container */
  max-width: 200px; /* Set the maximum width to 350px to round the width */
  background-color: green;
  border-radius: 4px;
  animation: ${progressAnimation} 6s ease-in-out;
  flex: auto;

`;
export const InnerDivElect =styled.div`
background-color: #CED7D9;
  border-radius: 4px;
  width: 33%;
  height: 70px;
  justify-content: center;
  align-items: center;
  flex: auto;

`
export const DivVolt=styled.div`
background-color: #CED7D9;
  border-radius: 4px;
  justify-content: center;
  width: auto;
  flex: auto;

`
export const MainDiv = styled.div`
background-color: #CED7D9;
  border-radius: 4px;
  width: 33%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #2541B0;
  font-size:large;
  flex: auto;


`;

export const SubDiv = styled.div`
  border: 1px solid;
  position: absolute;
  background-color: #CED7D9;
  border-radius: 4px;
  color: #1241FE    ;
  top: -10px;
  z-index: 99;
  font-size: medium;
  flex: auto;

`;
export const DivVerifier = styled.fieldset`
border: 2px solid #8DB2E3;
margin: 3px 0px;
`;

export const TextInsideBorder = styled.legend`
  font-size: 28px;
 font-weight: bold;
  color: #14185A;
  font-family: 'Signika Negative', sans-serif;

`;
/*
export const DivVerifier = styled.div`
  position: relative;
  flex-direction: column;
  border: 1px solid #1643F4;
background-color: #ffff;
justify-content: space-around;
border-color:#1643F4 ;
padding: 8px;
justify-content: center;
align-items: center;
margin-top: 1.5%;
flex: auto;
`;

export const TextInsideBorder = styled.span`
  position: absolute;
  top: -20px;
  padding: 3px;
  font-size: xx-large;
  background-color: #fff;
  color: #14185A;
  font-family: 'Signika Negative', sans-serif;

`;
*/
export const CardButton = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 7px;
  justify-content:space-around ;
  margin-top: -23px;

  

`;

export const TextVerif = styled.p`
  font-size: 33px;
  font-family: 'Signika Negative', sans-serif;
  color: blue;
  font-weight: bold;
  text-align: center;
  margin-top: 5px;
`;

export const IconCheckDisabled = styled(BsFillCheckCircleFill)`
 color: gray;
  font-size: 60px;
  cursor: pointer;
`;
export const IconCheck = styled(BsFillCheckCircleFill)`
 color: green;
  font-size: 60px;
  cursor: pointer;
`;

export const IconX = styled(BsXCircleFill)`
  color: red;
  font-size: 60px;
  cursor: pointer;
`;
export const IconXDisabled = styled(BsXCircleFill)`
   color: gray;
  font-size: 60px;
  cursor: pointer;
`;

export const TextGreen=styled.h4`
font-family: 'Times New Roman', Times, serif;
color: green;
`
export const LabelStep = styled.input`
  width: 150px;
  border: 1px solid green; /* Corrected border syntax */
  color: green;
  background-color: #ffff;
`;

export const LabelActivity = styled.input`
color: black;
  font-family: 'Signika Negative', sans-serif;
  width: 200px;
  background-color: #ffff;
  border: 1px solid #ffff; /* Corrected border syntax */
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 17;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  flex: auto;

`;
export const Run=styled(FiPlay)`
margin-bottom:2px;
color: white; /* Set the color of the icon to white */
font-size: 20px;


`;
export const DivTextProg=styled.div`
display:flex ;
justify-content : flex-start;
align-items: center;
padding:5px 10px 5px 0;



`;
export const LabelEta = styled.input`
  padding: 7px 4px;
  border: 4px solid #32CD32; /* Corrected border syntax */
  color: #32CD32;
  font-size: 15px;
  text-align: center ;
  background-color: #ffff;
  margin-left: 30px;
  margin-top: 25px;
`;
export const DivPopup =styled.div`
background-color: #ffff;
width: 80%;
  height: auto;
  justify-self: center;
  justify-content: center;
align-items: center;
padding: 19px;
border-radius: 5px;
flex: auto;

`;
export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex: auto;

`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  
  
 
`;

export const Tr = styled.tr`
background-color: ${(props) => (props.active ? '#3399FF' : 'inherit')};
color:${(props) => (props.active ? 'white' : 'black')};
`;

export const Td = styled.td`

  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
 
  width: 50%;
`;

export const TextField= styled.text`
`;



/* element of card 2  */  

export const InnerContainer2=styled.div`
display: flex;
flex-direction: row;
justify-content:space-between ;
gap:20px;
align-items: center;
padding:10px;
margin-top: -12px;
`

export const Card1Container2 = styled.div`
background-color: #0079C2;
display: flex;
flex-direction: column;
width: 100%;
`;
export const Menu1Card2 = styled.div`

display: flex;
flex-direction: row;
height: 38px;
justify-content: space-between;

padding:12px 30px;
`;
export const CardItem2 = styled.div`
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
width: 30%;
gap:5px;
padding: 10px;
`
export const CardItem3 = styled.div`
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;

padding: 10px;
`
/* export const CardItem4 = styled.div`
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
width: 20%;
gap:5px;
padding: 10px;
` */
export const CardItem5 = styled.div`
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
gap:5px;
padding: 10px;
margin:0px 20px;
`
export const LabelEta2 = styled.input`
  padding: 7px 4px;
  
  font-size: 15px;
  text-align: center ;
  background-color: #ffff;
  
`;
export const InnerDivCard2 = styled.div`

display: flex;
width: 100%;
flex-direction: row;
margin:7px 0;
gap: 5px;




`;
export const Outer = styled.fieldset`
 border: 1px solid #6593CF;
  margin: 0 auto;
  padding: 1em;
  width:32%;
  height: 100px;
  background-color: #CDE3FF;
  text-align: center;
  border-radius: 15px;
  display: flex; /* Add flex display to center children vertically */
  flex-direction: column; /* Stack children vertically */
  justify-content: center; /* Center children vertically */
 
`;


// Styled component for the inner 
export const Inner = styled.legend`
  font-weight: bold;
  border: 1px solid #6593CF;
  margin-bottom: 0.5em;
  text-align: center;
  padding: 2px 20px;
  background-color: #CDE3FF;
  color: #37378E;
`;

export const H3 = styled.h3`
 text-align: center;
 margin-top: -6px; /* Remove default margin to avoid extra spacing */
color: #37378E;
`


export const CardProgress = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 15px;
 
`


