import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Button = styled.button<{ isRunning?: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #4285f4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #357ae8;
  }
  svg {
    animation: ${(props) =>
      props.isRunning ? `${spin} 2s linear infinite` : 'none'};
  }
`;
