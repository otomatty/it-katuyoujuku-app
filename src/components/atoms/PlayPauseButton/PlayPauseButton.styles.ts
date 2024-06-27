import styled, { keyframes, css } from 'styled-components';

const ripple = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
`;

export const Button = styled.button<{ $isRunning: boolean }>`
  padding: 12px 12px;
  border: none;
  border-radius: 50%; /* 丸いボタンにする */
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.$isRunning &&
    css`
      animation: ${ripple} 1.5s infinite;
    `}

  &:hover {
    background-color: #0056b3;
  }
`;
