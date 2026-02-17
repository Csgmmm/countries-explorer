export interface ICountryPortugal {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currency;
  idd: Idd;
  capital: string[];
  altSpellings: [string, string, string, string];
  region: string;
  subregion: string;
  languages: Languages;
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
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
  continents: string[];
  flags: Flags;
  coatOfArms: Pick<ImgsExtensions, "png" | "svg">; //Adicionar Pick<name, ... | ...>, e assim caso haja mais extensões, posso adicionar no type.
  capitalInfo: CapitalInfo;
  startOfWeek: WeekDays;
  postalCode: { format: string; regex: string };
}

type Name = {
  common: string;
  official: string;
  nativeName: { [key: string]: { official: string; common: string } };
};
export type WeekDays =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday"; //Posso fazer desta forma, e assim só aceita estes valores, e não outros. Se fosse string, aceitaria qualquer valor.
type CapitalInfo = { latlng: [number, number] };
type ImgsExtensions = { png: string; svg: string; tif: string; heic: string }; //Posso fazer desta forma, e assim caso haja mais extensões, é só adicionar aqui, e não preciso ir à interface para adicionar a extensão.
type Flags = { png: string; svg: string; alt: string };
type Demonyms = { [key: string]: { f: string; m: string } };
type Languages = { [key: string]: string };
type Idd = { root: string; suffixes: [string] };
type Currency = Record<string, { symbol: string; name: string }>;
export type Translations = Record<string, { official: string; common: string }>; //o record>string é o nome da key como por exemplo: {[key: string]: { name: string; symbol: string }}

//fica string[] porque as vezes nao sabemos quantos valores vai ter uma key. Se for [number] é pq só irá mesmo receber um numero.

//Quando a key não muda ao longo da API, nao se usa [key: string]:, mas quando a key pode mudar, aí sim, usa-se isso. Por exemplo:
//languages: {
//   por: "Portuguese",
// //}, Aqui, usa-se [key: string]: porque a key vai mudar, ou seja fica, Languages = { [key: string]: string }; Ou este exemplo:  gini: { [key: string]: number }; para gini: {"2018": 33.5,}
// Mas aqui ja nao se usa:
// idd: {
// root: "+3",
//suffixes: ["51"],
//},
//Quando só tem 2 ou mais, podemos usar a [key: string]:, mas tambem podemos usar, se tiver muitos, como as currencies, podemos usar Record<string, ou seja:
//type Currency = Record<string, { symbol: string; name: string }>;
