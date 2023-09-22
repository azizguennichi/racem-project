import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  MenuContainer,
  MenuItem,
  Container,
  Textmenu,
  StyledMdSettingsSuggest,
  StyledRiPlayList2Fill,
  StyledFaHome,
  StyledFiLogOut,
  StyledCgPlayListCheck,
  StyledVscDebugStart,
  StyledGrConfigure,
  StyledAiTwotoneTool,
} from '../styled-components/Styel_Menu';
import Runtest from '../components/Runtest';

function Menu() {
  const userRole = useSelector((state) => state.user.currentUser.role); // Get the user's role from Redux
/*   const [userRole, setUserRole] = useState("expert"); // Set the user's role */
  const [activeMenuItem, setActiveMenuItem] = useState(2);
  const location = useLocation();

  // Define a mapping of menu items to user roles
  const menuItems = [
    {
      role: ["super-admin", "admin"],
      text: "System Configure",
      icon: <StyledAiTwotoneTool />,
      to: "/system",
    },
   
    {
      role: ["super-admin", "admin", "expert", "operator"],
      text: "Run Test Sequence",
      icon: <StyledVscDebugStart />,
      to: "/accueil",
    },
    {
      role: ["super-admin", "admin"],
      text: "Admin",
      icon: <StyledFaHome />,
      to: "/admin",
    },
    {
      role: ["super-admin", "admin", "expert"],
      text: "Reports",
      icon: <StyledFiLogOut />,
      to: "/reports",
    },
    // Add other menu items here
  ];

  useEffect(() => {
    const activeItem = menuItems.find((item) => item.to === location.pathname);
    if (activeItem) {
      setActiveMenuItem(menuItems.indexOf(activeItem));
    } else {
      setActiveMenuItem(null); // No matching route, set to null
    }
  }, [location.pathname, menuItems]);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <>
      <MenuContainer active={activeMenuItem === 2}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            as={item.role.includes(userRole) ? Link : 'div'}
            to={item.to}
            active={activeMenuItem === index ? 'true' : undefined}
            onClick={(event) => {
              if (!item.role.includes(userRole)) {
                event.preventDefault();
              } else {
                handleMenuItemClick(index);
              }
            }}
          >
            <Container>
              {item.icon}
              <Textmenu>{item.text}</Textmenu>
            </Container>
          </MenuItem>
        ))}
      </MenuContainer>
    </>
  );
}

export default Menu;
