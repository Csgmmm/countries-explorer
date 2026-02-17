import "./App.css";
import CountriesList from "./Components/CountriesList";

function App() {
  return (
    <>
      <h1>These are the countries</h1>
      {<CountriesList />}
    </>
  );
}

export default App;