import styled from 'styled-components';
export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #ffff;
 justify-content: center;
  height:100px;
  gap: 20px;
`;

export const CardNav=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding:0 15px ;

`;

export const Line = styled.hr`
  height: 3px;
  margin-top: -7px;
  width: 100%;
  background-color: #4175BC;
`;
export const Navbarlogo = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 60px;
  background-color: #ffff;
  
  
`;

export const Logo = styled.img`
  height: 50px;
  width: 100%;
  max-width: 300px;
  object-fit: cover;
  
`;
export const Caption = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #192A6C;
  margin-top: 0px;
  height: 40px;
`;

export const ASP=styled.div`
display: flex;
flex-direction: row;
align-items: center;
height: 50px;

`;
export const TextAsp=styled.span`
color: #00405F;
font-weight: 650;
font-size: 18px;
margin-top: 35px;
margin-left: -20px;
`
export const ASPtext=styled.span`
color: #00405F;
font-weight: 700;
font-size: 75px;
margin-top: -10px;


`
export const NavUser=styled.div`
display:flex ;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
margin-top: 0px;


`
export const ContainerButton=styled.div`
display:flex;
justify-content:flex-end;

`

export const  Button=styled.button`
margin-bottom: 10px;

color: #FFFFFF;

background-color: #00405F;;

display: inline-block;
 outline: 0;
 border: none;
 cursor: pointer;
 padding: 0 24px;
 border-radius: 50px;
 min-width: 140px;
 height: 30px;
 font-size: 14px;
border:3px solid #4C7DBF ;

 font-weight: 500;

`
export const ContainerUser=styled.div`
display:flex;
flex-direction: row;
align-items: center;
gap: 50px;
`; 
export const ContainerText = styled.span`
display:flex;
flex-direction: row;
align-items: center;
gap: 20px;
`
export const TextUser = styled.span`
  color: #ED1C24;
  font-size: 16px;
  font-weight: bold;
  font-family: "gra", sans-serif;
  
`
export const TextLog = styled.span`
  color: #00405F;
  font-size: 16px;
  font-weight: bold;
  font-family: "gra", sans-serif;
  
`
export const TextRol = styled.span`
  color: #00405F;
  font-size: 16px;
  font-weight: bold;
  margin-top: -3px;
`

