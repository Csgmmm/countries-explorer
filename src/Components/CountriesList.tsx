import { useEffect, useState } from "react";

function CountriesList() {
  //gaveta onde guardo os paises, e o setCountries é a chave para abrir a gaveta e colocar os paises lá dentro
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    console.log("dependencies");
    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,cca2,currencies",
      );
      const newCountries = await response.json(); //newcountries é onde os dados da api vao cair, e depois é só usar o setCountries para colocar os dados dentro da gaveta
      console.log("this is the new countries from the api", newCountries);
      setCountries(newCountries); //aqui é onde abro a gavetinha e coloco entao os dados que vieram da api
    };

    fetchData(); //aqui é onde chamo a função que vai buscar os dados da api, e como o useEffect tem um array de dependencias vazio, isso significa que a função só vai ser chamada uma vez, quando o componente for montado, ou seja, quando a página for carregada pela primeira vez
  }, []);

  return (
    <div>
      <h1>Countries List</h1>
      {countries.map((country) => (
        <div>
          <h1>{country.name.official}</h1>
          <img src={country.flags.png} alt="" />
          <div>{country.cca2}</div>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
