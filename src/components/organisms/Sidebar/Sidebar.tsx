import React from 'react';
import UserInfo from '../../molecules/UserInfo/UserInfo';
import Navigation from '../../molecules/Navigation/Navigation';
import LogoutButton from '../../atoms/LogoutButton/LogoutButton';
import { Container, Footer } from './Sidebar.styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <UserInfo />
      <Navigation />
      <Footer>
        <LogoutButton />
      </Footer>
    </Container>
  );
};

export default Sidebar;
