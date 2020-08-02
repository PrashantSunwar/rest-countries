import React from "react";
import SearchPanel from "./SearchPanel";
import ResultPanel from "./ResultPanel";

function MainComponent() {
  return (
    <main className="main">
      <div className="container">
        <SearchPanel />
        <ResultPanel />
      </div>
    </main>
  );
}

export default MainComponent;
