import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { ICountry } from "../types/types";
import Card from "../Components/Card";

function CountryPage() {
  const { name } = useParams();
  const [country, setCountry] = useState<ICountry>();

  console.log(name);

    useEffect(() => {
      const fetchCountry = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`,
        );
        const newCountry = await response.json();
        console.log("newCountry", name, newCountry);
        setCountry(newCountry[0]);
      };
      fetchCountry();
    }, []); 
  

  return (
    country && <Card country={country} /> //O country existe? se nao houver nada, da undefinied, se existir, imprimir o card com o country dentro
  );
}

export default CountryPage
