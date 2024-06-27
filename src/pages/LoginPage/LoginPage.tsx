import React from 'react';
import { Container, Title } from './LoginPage.styles';
import AuthControl from '../../components/molecules/AuthControl/AuthControl';
import Snackbar from '../../components/atoms/Snackbar/Snackbar';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Title>学習を始める</Title>
      <AuthControl />
      <Snackbar />
    </Container>
  );
};

export default LoginPage;
