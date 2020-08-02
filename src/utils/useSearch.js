// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from "react";

let url = "https://restcountries.eu/rest/v2";
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function useSearch(setCountries) {
  const [option, setOption] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const limitResponse = useCallback(
    (data, limit = 8) => {
      const newResp = data.slice(0, limit);
      setCountries(newResp);
      console.log(newResp);
    },
    [setCountries]
  );

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

  return { option, setOption, searchInput, setSearchInput };
}
