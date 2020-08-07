/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from "react";

let url = "https://restcountries.eu/rest/v2";
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function useSearch(setCountries, setLoader) {
  const [option, setOption] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const limitResponse = useCallback(
    (data, limit = 50) => {
      const newResp = data.slice(0, limit);
      console.log(newResp);
      setCountries(newResp);
    },
    [setCountries]
  );

  function fetchData(url) {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        limitResponse(data);
      })
      .catch(console.error)
      .finally(() => setLoader(false));
  }

  useEffect(() => {
    setLoader(true);
    fetchData(url);
  }, []);

  useEffect(() => {
    if (searchInput) {
      let searchUrl;
      setCountries([]);
      setLoader(true);
      if (regions.includes(searchInput)) searchUrl = url + `/region/${searchInput}`;
      else searchUrl = url + `/name/${searchInput}`;
      fetchData(searchUrl);
    }
  }, [searchInput, setCountries, setLoader]);

  useEffect(() => {
    if (option) {
      setCountries([]);
      setLoader(true);
      const regionUrl = url + `/region/${option}`;
      fetchData(regionUrl);
    }
  }, [option, setCountries, setLoader]);

  return { option, setOption, searchInput, setSearchInput };
}
