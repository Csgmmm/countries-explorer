import { useEffect, useState } from "react";
import type { ICountry } from "../types/country";

function SingleCountry() {
  const [countriesList, setCountriesLists] = useState<ICountry[]>([]); //aqui é onde vou guardar a lista de países, e o setCountriesList é a chave para abrir a gaveta e colocar a lista de países lá dentro
  const [country, setCountry] = useState<ICountry>() //aqui é onde vou guardar o país que quero mostrar os detalhes, e o setCountry é a chave para abrir a gaveta e colocar o país lá dentro
  const [selectedCountry, setSelectedCountry] = useState<string>("pt"); //aqui é onde está o pais selecionado na gaveta, e o setSelectedCountry é a chave para abrir a gaveta e colocar o país selecionado lá dentro e o "pt" é o valor inicial do país selecionado, ou seja, quando a página for carregada pela primeira vez, o país selecionado vai ser Portugal
  console.log("Country", country);
  
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${selectedCountry}`,
      );
      const newCountry = await response.json();
      console.log("newCountry", selectedCountry, newCountry);
      setCountry(newCountry[0]);
    };
    fetchCountries();
  }, [selectedCountry]); //aqui é onde fecho o useEffect, e como o array de dependencias tem o selectedCountry, isso significa que o useEffect vai ser executado toda vez que o selectedCountry for atualizado, ou seja, toda vez que o país selecionado for alterado, ou seja, toda vez que a pessoa clicar em um país diferente para mostrar os detalhes

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2",
      );
      const newCountriesList = await response.json();
      console.log("newCountriesList", newCountriesList);
      setCountriesLists(newCountriesList);
    };

    fetchData();
  }, []); //aqui é onde fecho o useEffect, e como o array de dependencias está vazio, isso significa que o useEffect só vai ser executado uma vez, quando o componente for montado, ou seja, quando a página for carregada pela primeira vez

  return (
    <div>
      <select onChange={(event) => setSelectedCountry(event.target.value)}>
        {countriesList.map((country) => {
          return <option value={country?.cca2}>{country?.name?.common}</option>;
        })}
      </select>

      <div>
        <span>{country?.name?.common}</span>
        <span>{country?.flag}</span>
        <img src={country?.flags?.png} alt="" />
      </div>
    </div>
  );
}

export default SingleCountry;
