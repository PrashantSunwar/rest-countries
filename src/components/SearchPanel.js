import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchPanel() {
  return (
    <div className="search">
      <form>
        <div className="search__cont">
          <button className="search__button">
            <FontAwesomeIcon icon="search" />
          </button>
          <input type="text" placeholder="Search for a country..." className="search__input" />
        </div>
        <div className="custom-select">
          <select className="search__filter">
            <option value="Filter by Region">Filter by Region</option>
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
      </form>
    </div>
  );
}

export default SearchPanel;
