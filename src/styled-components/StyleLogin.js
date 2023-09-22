import styled from 'styled-components';
const Layout=styled.div`
display: flex;
  width: 300px;
  flex-direction: column;
  background-color : #ffffff;
`;
const ForgotPassword = styled.span`
  font-size: 13px;
  color: #555555;
  margin-top: 20px;
  cursor: pointer;
`;
const Card=styled.div`
background-color: #fff;
display: flex;
width: 100%;
height: 100vh;
flex-direction: row
;

`
const Image = styled.img`
  width: auto;
  height: 55px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 700px;
  padding: 20px;
  padding-top: 10%;
  flex-direction: column;
  background-color : #ffffff;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  
`;
const Label = styled.label`
  position: relative; /* Added to position the pseudo-element */
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  text-transform: capitalize;
  
  /* Pseudo-element to create an underline effect */
  &::before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #007bff; /* Underline color */
    transform-origin: center;
    transform: scaleX(0); /* Initially hidden */
    transition: transform 0.3s ease-in-out;
  }

  /* Hover effect to reveal the underline */
  &:hover::before {
    transform: scaleX(1);
  }

  /* Media queries for responsiveness */
  @media only screen and (max-width: 900px) and (min-width: 750px) {
    height: auto;
    width: 205px;
  }

  @media only screen and (max-width: 750px) and (min-width: 550px) {
    width: 180.05px;
    height: auto;
  }

  @media only screen and (max-width: 550px) {
    width: 85.05px;
    height: auto;
    align-items: center;
    text-align: center;
    text-size-adjust: calc();
  }
`;

const Input = styled.input`
   background-color: ${({ dark }) => (dark ? '#161625' : '#efeff4')};
  border: none;
  width: 300px; /* Set the width to 200px */
  
  outline: none;
  border-radius: 8px;
  color: ${({ dark }) => (dark ? '#e4e4e4' : '#161625')};
  padding-left: 20px;
  font-size: 14px;
  border: hidden;
  margin-bottom: 20px;
  margin-right: 5%;
  height: 40px;

  /* Media queries for responsiveness */
  @media only screen and (max-width: 1180px) {
    width: 250px;
    margin-right: 8px;
  }

  @media only screen and (max-width: 700px) {
    width: 200px;
    margin-right: 8px;
  }

  @media only screen and (max-width: 600px) {
    width: 150px;
    margin-right: 8px;
  }

  @media only screen and (max-width: 500px) {
    width: 120px;
    margin-right: 8px;
  }

  @media only screen and (max-width: 400px) {
    width: 65px;
    margin-right: 8px;
    margin-bottom: 22px;
    font-size: 10px;
    padding: 0;
  }

  @media only screen and (max-width: 300px) {
    width: 35px;
    margin-right: 6px;
    margin-bottom: 20px;
    font-size: 10px;
  }
`;

const Button = styled.button`
  height: 34px;
   width: 150px;
  background-image: linear-gradient(to right,#5C84A8, #315D83);
  border-radius: 10px; 
  border: transparent;
  
  color: #ffffff;

  padding-left:4px;
  align-items: center;
  text-align: center;
  cursor: pointer;
&:hover {
    background-image: linear-gradient(to left,#5C84A8, #315D83);
    animation-name: example;
    animation-duration: 0.1s;
  }
  @media  only screen and (max-width: 300px){
    height: 30px;
    width: 120px;
   }
`;
 const Imgdiv=styled.img`
  width: 550px;
  padding: 20px;

 
`
export { Wrapper, Title, Input, Button,Label,Card,Image,Layout,ForgotPassword,Imgdiv };
