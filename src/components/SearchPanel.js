import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectComponent from "./SelectComponent";
import useSearch from "../utils/useSearch";

function SearchPanel({ setCountries, setLoader, countries }) {
  const [inputValue, setInputValue] = useState("");
  const { option, setOption, setSearchInput } = useSearch(setCountries, setLoader);
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

  useEffect(() => inputRef.current.focus(), []);

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
