import React, { useState } from "react";
import SearchPanel from "./SearchPanel";
import ResultPanel from "./ResultPanel";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "../router/Details";

function MainComponent() {
  const [countries, setCountries] = useState([]);

  return (
    <main className="main">
      <div className="container">
        <Router>
          <Route
            exact
            path="/"
            render={(props) => {
              return <SearchPanel {...props} setCountries={setCountries} />;
            }}
          />
          <Route
            exact
            path="/"
            render={(props) => {
              return <ResultPanel {...props} countries={countries} />;
            }}
          />
          <Route exact path="/detail/:name" component={Details} />
        </Router>
      </div>
    </main>
  );
}

export default MainComponent;
