export type ICountries = ICountry[];

export interface ICountry {
  name: { common: string; official: string }; //{common} aceita apenas a key common
  cca2: string;
  cca3: string;
  capital: [string];
  region: string;
  subregion: string;
  population: number;
  flags: flag;
  languages: { [key: string]: string }; //[key]/acessor/aceita várias keys. A key aceita string e retorna outra string
  currencies: currency;
}

export type flag = { png: string; svg: string; alt: string }; //fazer type com os varios objetos da key, e ligar à key da interface, porque fica mais facil de leitura (e ate mesmo para reutilização do type)
export type currency = { [key: string]: { name: string; symbol: string } };
