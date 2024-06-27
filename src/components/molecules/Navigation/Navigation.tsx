import React from 'react';
import { Container, NavItem } from './Navigation.styles';

const Navigation: React.FC = () => {
  return (
    <Container>
      <NavItem>Dashboard</NavItem>
      <NavItem>Profile</NavItem>
      <NavItem>Settings</NavItem>
    </Container>
  );
};

export default Navigation;
