import { useEffect, useState } from "react";
import Card from "../Components/countryCard/CountryCard";
import type { ICountry } from "../types/types";
import { Link } from "react-router";
import "../Components/countryCard/countryCard.css";

function CountriesPage() {
  const [countries, setCountries] = useState<ICountry[]>([]); //Country tipado
  console.log("Countries", countries); //1.Ele começa com um array vazio. Depois. 4. E agora, ele adiciona de forma sólida na gaveta os countries a API

  const [inpuText, setInpuText] = useState("");

  const filteredCountries = countries.filter((country) => {
    const countryNameLowerCase = country.name.common.toLocaleLowerCase();
    const searchLowerCase = inpuText.toLocaleLowerCase();
    return countryNameLowerCase.includes(searchLowerCase);
  });

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population`,
      );
      const newCountriesList = await response.json();
      console.log("newCountrieeeeeeeeees", newCountriesList); //2. Aqui, ele guarda os items da API numa gaveta
      setCountries(newCountriesList); //3. Abre a gaveta
    };
    fetchCountries();
  }, []);

  return (
    <>
      <input
        type="text"
        id="searchInput"
        className="searchBar"
        onChange={(event) => {
          //captura o value, utilizar o onChange
          setInpuText(event.target.value); //guarda na minha gaveta o inputText que escrevemos na searchbar
        }}
      />

      <div className="grid">
        {inpuText && //se fizer match na seach
          filteredCountries?.map((country) => {
            {
              /*Aqui o country ºe cada item do array*/
            }
            return (
              <Link to={country.name.common}>
                <Card country={country} />
              </Link>
            );
          })}

        {!inpuText && //Se nao fizer match na search
          countries?.map((country) => {
            {
              /*Aqui o country ºe cada item do array*/
            }
            return (
              <Link to={country.name.common}>
                <Card country={country} />
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default CountriesPage;
