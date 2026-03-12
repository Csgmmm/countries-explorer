import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { ICountry } from "../../types/country";
import Chip from "../../Components/chip/Chip";
import styles from "./countrypage.module.css";
import Button from "../../Components/button/Button";
import { ArrowLeft, Coins, Earth, MapPin, Shield, Users } from "lucide-react";
import { Link } from "react-router";
import DetailsCountryPage from "../../Components/infoCountry/detailsCountryPage";
import BordersList from "../../Components/borderslist/Borderslist";

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
  }, [name]);

  return (
    country && ( //o country existe? então, vai mostrar tudo o que está dentro da div.
      <section id={styles.countryPage}>
        <div className={styles.intro}>
          <div className={styles["info-section"]}>
            <Link to={"/countries"}>
              <Button variant="secondary">
                <ArrowLeft />
                Back to Countries
              </Button>
            </Link>
            <h1>{country.name.common}</h1>
            <h3>{country.name.official}</h3>
            <div className={styles.chips}>
              <Chip text={country.capital[0]} variant="primary" />
              <Chip text={country.region} variant="secondary" />
              {country.subregion && (
                <Chip text={country.subregion} variant="terciary" />
              )}
              {/*  se houver subregion, então vai aparecer chip, caso não haja subregion, nao aparece nada*/}
            </div>
          </div>
          <div>
            <img className={styles.flagImg} src={country.flags.png} />
          </div>
        </div>
        <section id={styles["main-section"]}>
          <div className={styles["left-side"]}>
            <div className={styles.cardsLeftSide}>
              <DetailsCountryPage
                title={
                  <div className="subtitleContainer">
                    <Users className="icon" />
                    <span>Population</span>
                  </div>
                }
                value={country.population}
              />
              <DetailsCountryPage
                title={
                  <div className="subtitleContainer">
                    <MapPin className="icon" />
                    <span>Area</span>
                  </div>
                }
                value={`${country.area} km²`}
                
              />
              <DetailsCountryPage
                title={
                  <div className="subtitleContainer">
                    <Earth className="icon" />
                    <span>Capital</span>
                  </div>
                }
                value={country.capital}
              />
              <DetailsCountryPage
                title={
                  <div className="subtitleContainer">
                    <Coins className="icon" />
                    <span>Currency</span>
                  </div>
                }
                value={`${country.currencies[Object.keys(country.currencies)[0]].name} (${country.currencies[Object.keys(country.currencies)[0]].symbol})`}
              />
            </div>
          </div>
          <div className={styles["right-side"]}>
            <div className={styles.cardsRightSide}>
              <DetailsCountryPage
                title={"Coat of Arms"}
                value={
                  <img
                    className={styles.image}
                    src={country.coatOfArms.png}
                    alt="Coat of Arms"
                  />
                }
              />
              <BordersList borderCountryCodes={country.borders}></BordersList>
            </div>
          </div>
        </section>
      </section>
    )
  );
}

export default CountryPage;
