import React from "react";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faSearch);

function App() {
  return (
    <>
      <Header />
      <MainComponent />
    </>
  );
}

export default App;
