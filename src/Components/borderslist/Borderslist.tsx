import { useEffect, useState } from "react";
import type { ICountry } from "../../types/country";
import Card from "../card/Card";
import Button from "../button/Button";
import { Link } from "react-router";

type CountryCodes = { borderCountryCodes: ICountry["borders"] };

function BordersList({ borderCountryCodes }: CountryCodes) {
  const [countries, setCountries] = useState<ICountry[]>([]);

  console.log("countries", countries);

  useEffect(() => {
    const fetchCountriesByBorderCountryCodes = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?fields=name&codes=${borderCountryCodes}`,
      );

      const newCountries = await response.json();

      setCountries(newCountries);
    };
    fetchCountriesByBorderCountryCodes();
  }, [borderCountryCodes]);

  return (
    <div className={"countriesList"}>
      <Card>
        <div className={"countriesListTitle"}>
          {countries.map((country) => (
            <Link to={`/countries/${country.name.common}`}>
              <Button variant={"primary"}>{country.name.common}</Button>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default BordersList;
