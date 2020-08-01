import React from "react";
import SearchPanel from "./SearchPanel";
import ResultPanel from "./ResultPanel";

function MainComponent() {
  return (
    <div className="container">
      <main className="main">
        <SearchPanel />
        <ResultPanel />
      </main>
    </div>
  );
}

export default MainComponent;
