export interface ICountryPortugal {
  name: { common: string; official: string; nativeName: NativeName };
  tld: [string];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currency;
  idd: Idd;
  capital: [string];
  altSpellings: [string, string, string, string];
  region: string;
  subregion: string;
  languages: Languages;
  latlng: [number, number];
  landlocked: boolean;
  borders: [string];
  area: number;
  demonyms: Demonyms;
  cca3: string;
  translations: Translations;
  flag: string;
  maps: { googleMaps: string; openStreetMaps: string };
  population: number;
  gini: { [key: string]: number };
  fifa: string;
  car: { signs: [string]; side: string };
  timezones: [string, string];
  continents: [string];
  flags: Flags;
  coatOfArms: CoatOfArms;
  capitalInfo: CapitalInfo;
  startOfWeek: string;
  postalCode: { format: string; regex: string };
}

type CapitalInfo = { latlng: [number, number] };
type CoatOfArms = { png: string; svg: string };
type Flags = { png: string; svg: string; alt: string };
type Demonyms = { [key: string]: { f: string; m: string } };
type Languages = { [key: string]: string };
type Idd = { root: string; suffixes: [string] };
type Currency = { [key: string]: { symbol: string; name: string } };
type NativeName = { [key: string]: { official: string; common: string } };
type Translations = Record<string, { official: string; common: string }>; //o record>string é o nome da key como por exemplo: {[key: string]: { name: string; symbol: string }}

//Quando a key não muda ao longo da API, nao se usa [key: string]:, mas quando a key pode mudar, aí sim, usa-se isso. Por exemplo:
//languages: {
//   por: "Portuguese",
// //}, Aqui, usa-se [key: string]: porque a key vai mudar, ou seja fica, Languages = { [key: string]: string };
// Mas aqui ja nao se usa:
// idd: {
// root: "+3",
//suffixes: ["51"],
//},
