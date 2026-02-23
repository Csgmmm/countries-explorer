import type { ICountry } from "../types/types";
import "./css/Card.css";

interface ICard {
  country: ICountry;
}

function Card({ country }: ICard) {
  return (
    <div className="card">
      <img src={country.flags.png}></img>
      <div className="info">
      <span><h1>{country.name.official}</h1></span>
      <span>Population: {country.population}</span>
      <span>Region: {country.region} </span>
      </div>
    </div>

  );
}

export default Card;
