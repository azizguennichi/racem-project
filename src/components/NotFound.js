import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 24px;
  color: #777;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color: #0056b3;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>404 - Not Found</Title>
      <Description>The page you are looking for does not exist.</Description>
      <StyledLink to='/'>Back to Home</StyledLink>
    </NotFoundContainer>
  );
};

export default NotFound;
