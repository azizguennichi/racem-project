import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

function Menu({ child }) {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [userRole, setUserRole] = useState("admin"); // Set the user's role

  // Define a mapping of menu items to user roles
  const menuItems = [
    {
      role: ["super-admin", "admin"],
      text: "System Configure",
      icon: <StyledAiTwotoneTool />,
      to: "/sys",
    },
    {
      role: ["super-admin", "admin", "expert"],
      text: "Test Sequence",
      icon: <StyledCgPlayListCheck />,
      to: "#test",
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
      to: "#admin2",
    },
    {
      role: ["super-admin", "admin", "expert"],
      text: "Reports",
      icon: <StyledFiLogOut />,
      to: "#Users",
    },
    // Add other menu items here
  ];

  const filteredMenuItems = menuItems.filter((item) =>
    item.role.includes(userRole)
  );

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <>
      <MenuContainer active={activeMenuItem === 0}>
        {filteredMenuItems.map((item, index) => (
          <MenuItem
            key={index}
            as={Link}
            to={item.to}
            active={activeMenuItem === index}
            onClick={() => handleMenuItemClick(index)}
          >
            <Container>
              {item.icon}
              <Textmenu>{item.text}</Textmenu>
            </Container>
          </MenuItem>
        ))}
      </MenuContainer>
        {child}
    </>
  );
}

export default Menu;




