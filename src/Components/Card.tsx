import type { ICountry } from "../types/types";

interface ICard {
  country: ICountry;
}

function Card({ country }: ICard) {
  return (
    <div>
      <img src={country.flags.png}></img>
      <span><h1>{country.name.official}</h1></span>
      <span>{country.population}</span>
      <span>{country.region} </span>
    </div>
  );
}

export default Card;
