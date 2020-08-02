import React, { useState, useEffect, useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectComponent from "./SelectComponent";

let url = "https://restcountries.eu/rest/v2";
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

function SearchPanel({ setCountries }) {
  const [inputValue, setInputValue] = useState("");
  const [option, setOption] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setInputValue("");
      setCountries([]);
      inputRef.current.focus();
      setSearchInput(inputValue);
    }
  };

  const limitResponse = useCallback(
    (data, limit = 8) => {
      const newResp = data.slice(0, limit);
      setCountries(newResp);
      console.log(newResp);
    },
    [setCountries]
  );

  useEffect(() => inputRef.current.focus(), []);

  useEffect(() => {
    if (searchInput) {
      let searchUrl;
      if (regions.includes(searchInput)) searchUrl = url + `/region/${searchInput}`;
      else searchUrl = url + `/name/${searchInput}`;
      fetch(searchUrl)
        .then((resp) => resp.json())
        .then((data) => {
          limitResponse(data);
        })
        .catch(console.error);
    }
  }, [searchInput, limitResponse]);

  useEffect(() => {
    if (option) {
      const resgionUrl = url + `/region/${option}`;
      fetch(resgionUrl)
        .then((resp) => resp.json())
        .then((data) => {
          limitResponse(data);
        })
        .catch(console.error);
    }
  }, [option, limitResponse]);

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="search__cont">
          <button className="search__button" onClick={handleSubmit}>
            <FontAwesomeIcon icon="search" />
          </button>
          <input
            type="text"
            placeholder="Search for a country..."
            className="search__input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
        </div>
      </form>
      <SelectComponent option={option} setOption={setOption} />
    </div>
  );
}

export default SearchPanel;
