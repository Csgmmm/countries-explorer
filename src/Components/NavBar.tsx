import { Link } from "react-router";
import Button from "./Button";
import Logo from "./Logo";
import "./css/Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div>
          <Logo />
        </div>
        <div>
          <Link to={"/countries"}>
            <Button variant="primary"isActive= {true}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-search-icon lucide-search"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
              <span>Countries</span>
            </Button>
          </Link>

          <Link to={"/regions"}>
            <Button variant="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-map-pin-icon lucide-map-pin"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Regions</span>
            </Button>
          </Link>

          <Link to={"/currencies"}>
            <Button variant="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-coins-icon lucide-coins"
              >
                <path d="M13.744 17.736a6 6 0 1 1-7.48-7.48" />
                <path d="M15 6h1v4" />
                <path d="m6.134 14.768.866-.5 2 3.464" />
                <circle cx="16" cy="8" r="6" />
              </svg>
              <span>Currencies</span>
            </Button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
