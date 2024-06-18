import React from "react";
import { Container, Header, Content } from "./MainLayout.styles";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header>
        <h1>IT活用塾アプリ</h1>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default MainLayout;
