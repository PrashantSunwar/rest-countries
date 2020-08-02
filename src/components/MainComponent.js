import React, { useState } from "react";
import SearchPanel from "./SearchPanel";
import ResultPanel from "./ResultPanel";

function MainComponent() {
  const [countries, setCountries] = useState([]);

  return (
    <main className="main">
      <div className="container">
        <SearchPanel setCountries={setCountries} />
        <ResultPanel countries={countries} />
      </div>
    </main>
  );
}

export default MainComponent;
