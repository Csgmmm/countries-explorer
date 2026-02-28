import { Link, useLocation } from "react-router";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import "../navbar/NavBar.css";
import { Coins, MapPin, Search } from "lucide-react";

function Navbar() {
  const location = useLocation();
  
  return (
    <>
      <nav>
        <div>
          <Logo />
        </div>
        <div>
          <Link to={"/countries"}>
            <Button
              variant="primary"
              isActive={location.pathname === "/countries" ? true : false}
            >
              {/*Crio a const location. Aqui, de acordo com o TS, o button aceita 3 params, variant, isActive e o children (que e o svg), colocar a variant que quero usar para este botao, e o isactive, tenho de abrir universo JS, e colocar o pathname, e dizer que se for igual igual ao path, vai ser true e vai ter o css do primary, senao é false.  */}
              <Search /> {/*icon*/}
              <span>Countries</span>
            </Button>
          </Link>

          <Link to={"/regions"}>
            <Button
              variant="primary"
              isActive={location.pathname === "/regions" ? true : false}
            >
              <MapPin />
              <span>Regions</span>
            </Button>
          </Link>

          <Link to={"/currencies"}>
            <Button
              variant="primary"
              isActive={location.pathname === "/currencies" ? true : false}
            >
              <Coins />
              <span>Currencies</span>
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
