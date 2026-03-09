import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { ICountry } from "../../types/types";
import Chip from "../../Components/chip/Chip";
import styles from "./countrypage.module.css";
import Button from "../../Components/button/Button";
import { ArrowLeft, Users } from "lucide-react";
import { Link } from "react-router";
import Card from "../../Components/card/Card";

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
      <section className={styles.countryPage}>
        <div className={styles.intro}>
          <div className={styles.countryName}>
            <Link to={"/countries"}>
              <Button variant="secondary">
                <ArrowLeft />
                Back to Countries
              </Button>
            </Link>
            <h1>{country.name.common}</h1>
            <h3>{country.name.official}</h3>
            <div className={styles.chips}>
              <Chip text={country.continents[0]} variant="primary" />
              <Chip text={country.region} variant="secondary" />
              <Chip text={country.subregion} variant="terciary" />
            </div>
          </div>
          <div>
            {/* <CountryCard country={country} /> */}
            <img className={styles.flagImg} src={country.flags.png} />
          </div>
        </div>
        <div className={styles.countryInfo}>
          <div className={styles.leftSide}>
            <div className={styles.mainInfo}>
              <Card>
                <div className={styles.cardContents}>
                  <Users />
                  <h4>Population</h4>
                </div>
              </Card>
              <Card>
                <div className={styles.cardContents}>
                  <Users />
                  <h4>Area</h4>
                </div>
              </Card>
              <Card>
                <div className={styles.cardContents}>
                  <Users />
                  <h4>Coat of Arms</h4>
                </div>
              </Card>
              <Card>
                <div className={styles.cardContents}>
                  <Users />
                  <h4>Coat of Arms</h4>
                </div>
              </Card>
            </div>
          </div>
          <div className={styles.rightSide}>
            <Card>
              <div className={styles.cardContents}>
                <Users />
                <h4>Population</h4>
              </div>
            </Card>
          </div>
        </div>
      </section>
    )
  );
}

export default CountryPage;
