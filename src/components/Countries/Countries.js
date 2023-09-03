import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="countries-container">
      <h2>Countries from Other File {countries.length}</h2>
      <div>
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
