import styled from "styled-components";

interface SnackbarContainerProps {
  type: "success" | "error";
}

const getBackgroundColor = (type: "success" | "error") => {
  switch (type) {
    case "success":
      return "#4caf50";
    case "error":
      return "#f44336";
    default:
      return "#333";
  }
};

export const SnackbarContainer = styled.div<SnackbarContainerProps>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  color: #fff;
  background-color: ${(props) => getBackgroundColor(props.type)};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;
