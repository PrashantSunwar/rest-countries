import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faMoon, faSun);

const ToggleContainer = styled.button`
  background: none;
  color: inherit;
  border: none;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: inherit;
  overflow: hidden;

  svg {
    height: auto;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? "translateY(0)" : "translateY(100px)")};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? "translateY(-100px)" : "translate(-15px, 0)")};
  }

`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  const text = theme === "light" ? "Light Mode" : "Dark Mode";
  return (
    <ToggleContainer onClick={toggleTheme} lightTheme={isLight}>
      <FontAwesomeIcon icon="sun" />
      <FontAwesomeIcon icon="moon" />
      {text}
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
