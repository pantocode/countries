import { useState, useEffect } from "react";
import * as API from "../services/data.js";
import { CountryCard } from "./CountryCard.jsx";

export function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    API.getAllCountries().then(setCountries).catch(console.log);
  }, []);
  return (
    <>
      <h1>
        PAISES
      </h1>
      <form>
        <input placeholder="Pais"></input>
      </form>
      {countries.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {countries.map((country) => (
            <CountryCard key={country.ccn3} {...country} />
          ))}
        </section>
      )} 
      {console.log(countries.data)}
    </>
  );
}