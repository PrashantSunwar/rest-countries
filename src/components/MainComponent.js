import React, { useState } from "react";
import SearchPanel from "./SearchPanel";
import ResultPanel from "./ResultPanel";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from "../router/Details";

function MainComponent() {
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);

  return (
    <main className="main">
      <div className="container">
        <Router>
          <Route
            exact
            path="/"
            render={(props) => {
              return <SearchPanel {...props} setCountries={setCountries} setLoader={setLoader} />;
            }}
          />
          <Route
            exact
            path="/"
            render={(props) => {
              return <ResultPanel {...props} countries={countries} loader={loader} />;
            }}
          />
          <Route exact path="/detail/:name" component={Details} />
        </Router>
      </div>
    </main>
  );
}

export default MainComponent;
