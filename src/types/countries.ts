import type { ICountries } from "./types";
import type { ICountryPortugal } from "./country";

const countries: ICountries = [
  {
    name: { common: "Portugal", official: "Portuguese Republic" },
    cca2: "PT",
    cca3: "PRT",
    capital: ["Lisbon"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 10305564,
    flags: {
      png: "https://flagcdn.com/w320/pt.png",
      svg: "https://flagcdn.com/pt.svg",
      alt: "The flag of Portugal",
    },
    languages: { por: "Portuguese" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
  },
  {
    name: { common: "Spain", official: "Kingdom of Spain" },
    cca2: "ES",
    cca3: "ESP",
    capital: ["Madrid"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 47351567,
    flags: {
      png: "https://flagcdn.com/w320/es.png",
      svg: "https://flagcdn.com/es.svg",
      alt: "The flag of Spain",
    },
    languages: { spa: "Spanish" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
  },
  {
    name: { common: "France", official: "French Republic" },
    cca2: "FR",
    cca3: "FRA",
    capital: ["Paris"],
    region: "Europe",
    subregion: "Western Europe",
    population: 68042591,
    flags: {
      png: "https://flagcdn.com/w320/fr.png",
      svg: "https://flagcdn.com/fr.svg",
      alt: "The flag of France",
    },
    languages: { fra: "French" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
  },
  {
    name: { common: "Germany", official: "Federal Republic of Germany" },
    cca2: "DE",
    cca3: "DEU",
    capital: ["Berlin"],
    region: "Europe",
    subregion: "Western Europe",
    population: 83240525,
    flags: {
      png: "https://flagcdn.com/w320/de.png",
      svg: "https://flagcdn.com/de.svg",
      alt: "The flag of Germany",
    },
    languages: { deu: "German" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
  },
  {
    name: { common: "Italy", official: "Italian Republic" },
    cca2: "IT",
    cca3: "ITA",
    capital: ["Rome"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 58870762,
    flags: {
      png: "https://flagcdn.com/w320/it.png",
      svg: "https://flagcdn.com/it.svg",
      alt: "The flag of Italy",
    },
    languages: { ita: "Italian" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
  },
  {
    name: { common: "Netherlands", official: "Kingdom of the Netherlands" },
    cca2: "NL",
    cca3: "NLD",
    capital: ["Amsterdam"],
    region: "Europe",
    subregion: "Western Europe",
    population: 17900000,
    flags: {
      png: "https://flagcdn.com/w320/nl.png",
      svg: "https://flagcdn.com/nl.svg",
      alt: "The flag of the Netherlands",
    },
    languages: { nld: "Dutch" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
  },
  {
    name: { common: "Belgium", official: "Kingdom of Belgium" },
    cca2: "BE",
    cca3: "BEL",
    capital: ["Brussels"],
    region: "Europe",
    subregion: "Western Europe",
    population: 11660000,
    flags: {
      png: "https://flagcdn.com/w320/be.png",
      svg: "https://flagcdn.com/be.svg",
      alt: "The flag of Belgium",
    },
    languages: { nld: "Dutch", fra: "French", deu: "German" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
  },
  {
    name: { common: "Sweden", official: "Kingdom of Sweden" },
    cca2: "SE",
    cca3: "SWE",
    capital: ["Stockholm"],
    region: "Europe",
    subregion: "Northern Europe",
    population: 10500000,
    flags: {
      png: "https://flagcdn.com/w320/se.png",
      svg: "https://flagcdn.com/se.svg",
      alt: "The flag of Sweden",
    },
    languages: { swe: "Swedish" },
    currencies: { SEK: { name: "Swedish krona", symbol: "kr" } },
  },
  {
    name: { common: "Norway", official: "Kingdom of Norway" },
    cca2: "NO",
    cca3: "NOR",
    capital: ["Oslo"],
    region: "Europe",
    subregion: "Northern Europe",
    population: 5500000,
    flags: {
      png: "https://flagcdn.com/w320/no.png",
      svg: "https://flagcdn.com/no.svg",
      alt: "The flag of Norway",
    },
    languages: { nor: "Norwegian" },
    currencies: { NOK: { name: "Norwegian krone", symbol: "kr" } },
  },
  {
    name: { common: "Greece", official: "Hellenic Republic" },
    cca2: "GR",
    cca3: "GRC",
    capital: ["Athens"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 10400000,
    flags: {
      png: "https://flagcdn.com/w320/gr.png",
      svg: "https://flagcdn.com/gr.svg",
      alt: "The flag of Greece",
    },
    languages: { ell: "Greek" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
  },
  {
    name: { common: "United States", official: "United States of America" },
    cca2: "US",
    cca3: "USA",
    capital: ["Washington, D.C."],
    region: "Americas",
    subregion: "North America",
    population: 333000000,
    flags: {
      png: "https://flagcdn.com/w320/us.png",
      svg: "https://flagcdn.com/us.svg",
      alt: "The flag of the United States",
    },
    languages: { eng: "English" },
    currencies: { USD: { name: "United States dollar", symbol: "$" } },
  },
  {
    name: { common: "Mexico", official: "United Mexican States" },
    cca2: "MX",
    cca3: "MEX",
    capital: ["Mexico City"],
    region: "Americas",
    subregion: "North America",
    population: 126000000,
    flags: {
      png: "https://flagcdn.com/w320/mx.png",
      svg: "https://flagcdn.com/mx.svg",
      alt: "The flag of Mexico",
    },
    languages: { spa: "Spanish" },
    currencies: { MXN: { name: "Mexican peso", symbol: "$" } },
  },
];

console.log(countries);

const country: ICountryPortugal = {
  name: {
    common: "Portugal",
    official: "Portuguese Republic",
    nativeName: {
      por: { official: "República Portuguesa", common: "Portugal" },
    },
  },
  tld: [".pt"],
  cca2: "PT",
  ccn3: "620",
  cioc: "POR",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    EUR: {
      symbol: "€",
      name: "euro",
    },
  },
  idd: {
    root: "+3",
    suffixes: ["51"],
  },
  capital: ["Lisbon"],
  altSpellings: [
    "PT",
    "Portuguesa",
    "Portuguese Republic",
    "República Portuguesa",
  ],
  region: "Europe",
  subregion: "Southern Europe",
  languages: {
    por: "Portuguese",
  },
  latlng: [39.5, -8],
  landlocked: false,
  borders: ["ESP"],
  area: 92090,
  demonyms: {
    eng: {
      f: "Portuguese",
      m: "Portuguese",
    },
    fra: {
      f: "Portugaise",
      m: "Portugais",
    },
  },
  cca3: "PRT",
  translations: {
    ara: {
      official: "الجمهورية البرتغالية",
      common: "البرتغال",
    },
    bre: {
      official: "Republik Portugalat",
      common: "Portugal",
    },
    ces: {
      official: "Portugalská republika",
      common: "Portugalsko",
    },
    cym: {
      official: "Portuguese Republic",
      common: "Portugal",
    },
    deu: {
      official: "Portugiesische Republik",
      common: "Portugal",
    },
    est: {
      official: "Portugali Vabariik",
      common: "Portugal",
    },
    fin: {
      official: "Portugalin tasavalta",
      common: "Portugali",
    },
    fra: {
      official: "République portugaise",
      common: "Portugal",
    },
    hrv: {
      official: "Portugalska Republika",
      common: "Portugal",
    },
    hun: {
      official: "Portugál Köztársaság",
      common: "Portugália",
    },
    ind: {
      official: "Republik Portugal",
      common: "Portugal",
    },
    ita: {
      official: "Repubblica portoghese",
      common: "Portogallo",
    },
    jpn: {
      official: "ポルトガル共和国",
      common: "ポルトガル",
    },
    kor: {
      official: "포르투갈 공화국",
      common: "포르투갈",
    },
    nld: {
      official: "Portugese Republiek",
      common: "Portugal",
    },
    per: {
      official: "جمهوری پرتغال",
      common: "پرتغال",
    },
    pol: {
      official: "Republika Portugalska",
      common: "Portugalia",
    },
    por: {
      official: "República português",
      common: "Portugal",
    },
    rus: {
      official: "Португальская Республика",
      common: "Португалия",
    },
    slk: {
      official: "Portugalská republika",
      common: "Portugalsko",
    },
    spa: {
      official: "República Portuguesa",
      common: "Portugal",
    },
    srp: {
      official: "Португалска Република",
      common: "Португал",
    },
    swe: {
      official: "Republiken Portugal",
      common: "Portugal",
    },
    tur: {
      official: "Portekiz Cumhuriyeti",
      common: "Portekiz",
    },
    urd: {
      official: "جمہوریہ پرتگال",
      common: "پرتگال",
    },
    zho: {
      official: "葡萄牙共和国",
      common: "葡萄牙",
    },
  },
  flag: "🇵🇹",
  maps: {
    googleMaps: "https://goo.gl/maps/BaTBSyc4GWMmbAKB8",
    openStreetMaps: "https://www.openstreetmap.org/relation/295480",
  },
  population: 10749635,
  gini: {
    "2018": 33.5,
  },
  fifa: "POR",
  car: {
    signs: ["P"],
    side: "right",
  },
  timezones: ["UTC-01:00", "UTC"],
  continents: ["Europe"],
  flags: {
    png: "https://flagcdn.com/w320/pt.png",
    svg: "https://flagcdn.com/pt.svg",
    alt: "The flag of Portugal is composed of two vertical bands of green and red in the ratio of 2:3, with the coat of arms of Portugal centered over the two-color boundary.",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/pt.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/pt.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [38.72, -9.13],
  },
  postalCode: {
    format: "####-###",
    regex: "^(\\d{7})$",
  },
};

console.log(country);