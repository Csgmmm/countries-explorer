import { useEffect, useState } from "react";
import type { ICountry } from "../types/types";

function CountriesList() {
  //gaveta onde guardo os paises, e o setCountries é a chave para abrir a gaveta e colocar os paises lá dentro
  const [countries, setCountries] = useState<ICountry[]>([]); //Tipar. Vem da interface do types.

  useEffect(() => {
    //useEffect 1
    console.log("dependencies");

    const fetchData = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,cca2,currencies",
      );
      const newCountries = await response.json(); //newcountries é onde os dados da api vao cair, e depois é só usar o setCountries para colocar os dados dentro da gaveta
      console.log(
        "vai só mostrar a lista que vem do fetch na consola",
        newCountries,
      );
      setCountries(newCountries); //aqui é onde abro a gavetinha e coloco entao os dados que vieram da api
    };

    fetchData(); //aqui é onde chamo a função que vai buscar os dados da api, e como o useEffect tem um array de dependencias vazio, isso significa que a função só vai ser chamada uma vez, quando o componente for montado, ou seja, quando a página for carregada pela primeira vez
  }, []); ////useEffect 1: aqui é onde fecho o useEffect, e como o array de dependencias está vazio, isso significa que o useEffect só vai ser executado uma vez, quando o componente for montado, ou seja, quando a página for carregada pela primeira vez

  useEffect(() => {
    //useEffect 2
    console.log(
      "agora sim, vai mostrar a lista sempre que o countries for atualizado ",
      countries,
    );
  }, [countries]); //useEffect 2: com dependencia, ou seja, o [countries] diz ao React: "Executa isto no início E sempre que a gaveta countries sofrer alguma alteração"

  useEffect(() => {
    //useEffect 3
    console.log("it's alwayyyyyyyys happening"); //useEffect 3: sem dependencias, ou seja, sem o array de dependencias, isso significa que o useEffect vai ser executado toda vez que o componente for renderizado, ou seja, toda vez que a página for atualizada, seja por causa do fetch ou por qualquer outra coisa que cause uma atualização do componente
  });

  return (
    <div>
      {countries.map(
        (
          country, //abro o universo javascript, e vou ao countries que é a gaveta onde estão os países, e uso o map para percorrer cada país, e para cada país eu vou retornar um div com o nome do país, a bandeira e o código do país
        ) => (
          <div key={country.cca2}>
            {/* A 'key' serve para dar uma identidade única a cada elemento da lista. 
      O React usa o 'cca2' (PT, ES, etc.) como uma "etiqueta" para saber 
      exatamente qual país deve atualizar se a lista mudar, evitando 
      ter de redesenhar a página toda do zero.  E como cca2 ou cca3: (PT, ESP, FRA...) São códigos internacionais padrão. São perfeitos, porque nunca há dois países com o mesmo código.  */}
            <h1>{country.name.official}</h1>
            <img src={country.flags.png} alt="" />
            <div>{country.cca2}</div>
          </div>
        ),
      )}
    </div>
  );
}

export default CountriesList;
