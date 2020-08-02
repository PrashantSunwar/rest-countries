import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styled-components/theme";
import { GlobalStyles } from "./styled-components/global";

library.add(faMoon, faSearch, faAngleDown);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark");
      // otherwise, it should be light
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <MainComponent />
      </>
    </ThemeProvider>
  );
}

export default App;
