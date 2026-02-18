import { useEffect, useState } from "react";
import Card from "./Card";
import type { ICountry } from "../types/types";

function CountriesPage() {
  const [countries, setCountries] = useState<ICountry[]>([]); //Country tipado
  console.log("Countries", countries); //1.Ele começa com um array vazio. Depois. 4. E agora, ele adiciona de forma sólida na gaveta os countries a API

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
    <div style = {{display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "40px"}}>
      {countries?.map((country) => { {/*Aqui o country ºe cada item do array*/}
        return <Card country={country} />;
      })}
    </div>
  );
}

export default CountriesPage;
