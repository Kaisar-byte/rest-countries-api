import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div className="country">
      <h2>Country Name: {country.name.common}</h2>
      <img src={country.flags.png} alt="" />
      <p>Population: {country.population}</p>
      <small>
        <p>Area: {country.area}</p>
      </small>
      <small>
        <p>Area: {country.region}</p>
      </small>
    </div>
  );
};

export default Country;
