import React from "react";
import { Link } from "react-router-dom";

function ResultPanel({ countries }) {
  return (
    <section className="flags">
      <div className="flags-grid">
        {countries.map((country) => (
          <div className="flag" key={country.area}>
            <div className="flag__image">
              <Link
                to={{
                  pathname: `/detail/${country.name}`,
                  state: {
                    info: {
                      name: country.name,
                      nativeName: country.nativeName,
                      population: country.population,
                      region: country.region,
                      subregion: country.subregion,
                      flag: country.flag,
                      capital: country.capital,
                      topLevelDomain: country.topLevelDomain[0],
                      currencies: country.currencies[0].name,
                      languages: country.languages[0].name,
                    },
                  },
                }}
              >
                <img src={country.flag} alt={country.name} />
              </Link>
            </div>
            <div className="flag__info">
              <h2 className="flag__name">{country.name}</h2>
              <p className="flag__subtext">
                Population: <span className="flag__subtext-info">{country.population.toLocaleString()}</span>
              </p>
              <p className="flag__subtext">
                Region: <span className="flag__subtext-info">{country.region}</span>
              </p>
              <p className="flag__subtext">
                Capital: <span className="flag__subtext-info">{country.capital}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResultPanel;
