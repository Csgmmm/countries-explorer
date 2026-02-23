import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Continents from "./pages/ContinentsPage.tsx";
import CountryPage from "./pages/CountryPage.tsx";
import CountriesPage from "./pages/CountriesPage.tsx";
import Navbar from "./Components/NavBar.tsx";
import CurrencyPage from "./pages/CurrencyPage.tsx";
import RegionsPage from "./pages/RegionsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<App />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="countries/:name" element={<CountryPage />} />
          <Route path="/continents" element={<Continents />} />
          <Route path="/currencies" element={<CurrencyPage/>} />
          <Route path="/region" element={<RegionsPage/>}/>
        </Route>
      </Routes>
      <footer>Footeeeeeeeeeer</footer>
    </BrowserRouter>
  </StrictMode>,
);
