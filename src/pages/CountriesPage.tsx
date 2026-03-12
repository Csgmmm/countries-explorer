import { useEffect, useState } from "react";
import Card from "../Components/countryCard/CountryCard";
import type { ICountry } from "../types/types";
import { Link } from "react-router";
import "../Components/countryCard/countryCard.css";
import "../Components/searchbar/search.css";
import Button from "../Components/button/Button";
import { Funnel, Search } from "lucide-react";

function CountriesPage() {
  const [countries, setCountries] = useState<ICountry[]>([]); //Country tipado //Gavetas para guardar os countries e utiliza-los
  const [inpuText, setInpuText] = useState(""); //gavetas para o input do search

  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");

  //continents
  const continents = countries.map((country) => {
    return country.region;
  });
  const uniqueContinents = [...new Set(continents)]; //pega na lista e garate que tenho valores unicos dos que sao repetidos
  //fazer tentativa do replace para tirar os espaços em branco
  //regions
  const regions = countries.map((country) => {
    //criar uma variavel, e quero que ele vá a todos os paises e retorne a subregion
    return country.subregion;
  });
  const uniqueRegions = [...new Set(regions)];

  //currency
  const currencies = countries.flatMap((country) => {
    return country.currencies
      ? Object.keys(country.currencies).map((currency) => {
          return currency;
        })
      : [];
  });

  const uniqueCurrencies = [...new Set(currencies)];

  const filteredCountries = countries.filter((country) => {
    const searchLowerCase = inpuText.toLowerCase(); //variavel que vai conter o input pronta para ter lowercase

    //Opção 1:
    // //country
    // const countryNameLowerCase = country.name.common.toLowerCase();
    // const hasNameInSearch = countryNameLowerCase.includes(searchLowerCase); //se tem algum match aqui no search, da true

    // //capital
    // const capital = country.capital[0] ?? ""; //nao tem capital? vem string vazia. e passa para o prpximo em lowercase. Sendo que as capitais vem em Array, usamos [0]
    // const capitalLowerCase = capital.toLowerCase();
    // const hasCapitalInSearch = capitalLowerCase.includes(searchLowerCase);

    // //region
    // const regionNameLowerCase = country.region.toLowerCase();
    // const hasRegionInSearch = regionNameLowerCase.includes(searchLowerCase);

    //return hasRegionInSearch || hasCapitalInSearch || hasNameInSearch

    //Opção 2:
    const searchAll =
      country.name.common.toLowerCase().includes(inpuText.toLowerCase()) || //
      country.capital?.[0]?.toLowerCase().includes(inpuText.toLowerCase()) ||
      country.region.toLowerCase().includes(searchLowerCase);

    const continentsSelector =
      selectedContinent === "" || country.region === selectedContinent; //verifica se o continente selecionado é vazio ou se o continente do país é igual ao continente selecionado
    const regionsSelector =
      selectedRegion === "" || country.subregion === selectedRegion;
    const currencySelector =
      selectedCurrency === "" ||
      (country.currencies &&
        Object.keys(country.currencies).includes(selectedCurrency)); //ele aceita as correncies sem valor (o default) e verifica se as keys do object das currencies incluem o que esta inserido na gaveta do selectedCurrency
    console.log(
      searchAll,
      continentsSelector,
      regionsSelector,
      currencySelector,
    );
    return (
      searchAll && continentsSelector && regionsSelector && currencySelector
    );
  });

  const clearFilter = () => {
    setSelectedContinent("");
    setSelectedRegion("");
    setSelectedCurrency("");
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,continents,currencies,subregion`,
      );
      const newCountriesList = await response.json();
      setCountries(newCountriesList); //Abre a gaveta
    };
    fetchCountries();
  }, []);

  return (
    <>
      <div className="searchContainer">
        <div className="searchBox">
          <Search className="searchIcon" size={18} />
          <input
            type="text"
            id="searchInput"
            className="searchBar"
            placeholder="Search countries, regions or capitals..."
            onChange={(event) => {
              //captura o value, utilizar o onChange
              setInpuText(event.target.value); //guarda na minha gaveta o inputText que escrevemos na searchbar
            }}
          />
        </div>

        <div className="filters">
          <Funnel className="filterIcon" size={18} />
          <span>Filter by:</span>
          <select
            value={selectedContinent}
            onChange={(e) => setSelectedContinent(e.target.value)}
          >
            <option value="">Continents</option>
            {uniqueContinents.map((continent) => {
              return <option>{continent}</option>;
            })}
            ;
          </select>

          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="">Regions</option>
            {uniqueRegions.map((regions) => {
              return <option>{regions}</option>;
            })}
          </select>

          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value="">Currency</option>
            {uniqueCurrencies.map((currency) => {
              return <option>{currency}</option>;
            })}
          </select>
          <Button variant="terciary" onClick={clearFilter}>
            Clear filter
          </Button>
        </div>
      </div>

      <div className="grid">
        {filteredCountries?.map((country) => {
          {
            /*Aqui o country ºe cada item do array*/
          }
          return (
            <Link to={`/countries/${country.name.common}`}>
              <Card country={country} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default CountriesPage;
