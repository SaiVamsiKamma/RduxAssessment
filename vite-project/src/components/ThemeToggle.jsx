import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import styled from "styled-components";

// Styled components
const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${props => (props.theme === "light" ? "#f1f1f1" : "#333")};
  color: ${props => (props.theme === "light" ? "#333" : "#f1f1f1")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${props => (props.theme === "light" ? "#ddd" : "#555")};
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleContainer>
      <ToggleButton theme={theme} onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Theme
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;
