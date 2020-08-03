import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function snakeCase(word) {
  return word.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
}

function Details({ location }) {
  const countryInfo = Object.entries(location.state.info);
  countryInfo.splice(5, 1);
  return (
    <main className="details">
      <Link to="/" className="back-route">
        <FontAwesomeIcon icon="arrow-left" />
        Back
      </Link>
      <section className="country">
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          initial={{ y: 100, opacity: 0 }}
          className="country-grid"
        >
          <img src={location.state.info.flag} alt={location.name} />
          <div className="country-cont">
            <h1>{location.state.info.name} </h1>
            <div className="country-info">
              {countryInfo.map((country) => (
                <p className="flag__subtext" key={country[0]}>
                  {snakeCase(country[0])}:&nbsp;
                  <span className="flag__subtext-info">
                    {typeof country[1] === "number" ? country[1].toLocaleString() : country[1]}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default Details;
