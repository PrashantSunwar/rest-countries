import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../components/Loader";
const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -50 },
};

function ResultPanel({ countries, loader }) {
  return loader ? (
    <Loader />
  ) : (
    <section className="flags">
      <motion.ul variants={list} initial="hidden" animate="visible" className="flags-grid">
        {countries.map((country) => (
          <motion.li variants={item} className="flag" key={`${country.nativeName}${country.area}`}>
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
                    currencies: "",
                    languages: "",
                  },
                },
              }}
            >
              <div className="flag__image">
                <img src={country.flag} alt={country.name} />
              </div>
            </Link>
            <div className="flag__info">
              <h2 className="flag__name">{country.name}</h2>
              <p className="flag__subtext">
                Population:{" "}
                <span className="flag__subtext-info">{country.population.toLocaleString()}</span>
              </p>
              <p className="flag__subtext">
                Region: <span className="flag__subtext-info">{country.region}</span>
              </p>
              <p className="flag__subtext">
                Capital: <span className="flag__subtext-info">{country.capital}</span>
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default ResultPanel;
