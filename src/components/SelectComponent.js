import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SelectComponent({ option, setOption }) {
  return (
    <div className="custom-select">
      <select className="search__filter" value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <span className="custom-select__icon">
        <FontAwesomeIcon icon="angle-down" />
      </span>
    </div>
  );
}

export default SelectComponent;
