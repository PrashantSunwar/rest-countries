import React from "react";

function SearchPanel() {
  return (
    <div className="search">
      <form>
        <div className="search__cont">
          <button className="search__button">
            <i class="fas fa-search"></i>
          </button>
          <input type="text" placeholder="Search for a country..." className="search__input" />
        </div>
        <select className="search__filter">
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
}

export default SearchPanel;
