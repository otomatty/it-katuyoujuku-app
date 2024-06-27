import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const NavItem = styled.div`
  padding: 10px 0;
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;

  &:hover {
    color: #357ae8;
  }
`;
