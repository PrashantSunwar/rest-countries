import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "../styled-components/Toggle";

function Header({ toggleTheme, theme }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__cont">
          <h1>Where in the world?</h1>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;
