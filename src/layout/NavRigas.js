import React from "react";
import logo from "../images/logo.png";
import {
  NavUser,
  NavbarContainer,
  Navbarlogo,
  Logo,
  Button,
  ASP,
  CardNav,
  TextAsp,
  ASPtext,
  ContainerButton,
  ContainerUser,
  Caption,
  Line,
  TextRol,
  TextUser,
  TextLog,
  ContainerText
} from "../styled-components/StyelNAvrigas";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../redux/apiCalls";

function NavRigas() {
  const currentUser = useSelector((state) => state.user.currentUser);



  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    logoutSuccess(dispatch);
  
  };
 

  return (
    <>
      <NavbarContainer>
        <CardNav>
          <Navbarlogo>
            <Logo src={logo} />
            <Caption>Manufacturing Test Tool</Caption>
          </Navbarlogo>
          <ASP>
            <ASPtext>ASP</ASPtext>
            <TextAsp>GO , PRESTE, RIVAL</TextAsp>
          </ASP>
          <NavUser>
            <ContainerButton>
              <Button onClick={logoutHandler}>Log Out</Button>
            </ContainerButton>
            <ContainerUser>
              <ContainerText>
            <TextLog>Logged in as</TextLog>
              <TextUser>{currentUser?.firstName}{" "}{currentUser?.lastName}</TextUser>
              </ContainerText>
              <TextRol>({currentUser?.role})</TextRol>
            </ContainerUser>
          </NavUser>
        </CardNav>
        <Line />
      </NavbarContainer>
    
    </>
  );
}

export default NavRigas;
