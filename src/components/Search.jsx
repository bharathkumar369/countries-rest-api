import React from "react";
// import toggleDown from "../images/toggleDown.svg";
// import toggleUp from "../images/toggleUp.svg";
import { Link } from "react-router-dom";
import toggleDownDark from "../images/toggleDown-dark.png";
import toggleDownLight from "../images/toggleDown-light.png";
import toggleUpDark from "../images/toggleUp-dark.png";
import toggleUpLight from "../images/toggleUp-white.png";

const Search = ({ modeChange }) => {
  const [toggle, setToggle] = React.useState(true);

  const toggleChange = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  // const [darkToggle, setDarkToggle] = React.useState();

  // React.useEffect(() => {
  //   setDarkToggle(toggle ? toggleDownDark : toggleUpDark);
  // }, [toggle]);

  // const [lightToggle, setLightToggle] = React.useState();

  // React.useEffect(() => {
  //   setLightToggle(toggle ? toggleDownLight : toggleUpLight);
  // }, [toggle]);

  const darkToggle = toggle ? toggleDownDark : toggleUpDark;

  const lightToggle = toggle ? toggleDownLight : toggleUpLight;

  const [countries, setCountries] = React.useState([]);
  const [filteredCountries, setFilteredCountries] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  console.log(searchInput);
  
  React.useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("error fetching country", err));
  }, []);

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    const filtered = inputValue
      ? countries.filter((country) => {
          const countryName = country.name.common.toLowerCase();
          return countryName.includes(inputValue.toLowerCase());
        })
      : [];

    setFilteredCountries(filtered);
  };
  React.useEffect(() => {
    // Close dropdown when clicking outside of it
    const closeDropdown = (e) => {
      // Check if the clicked element is within the dropdown or the toggle button
      if (
        !e.target.closest(".flag--search__filter") &&
        !e.target.classList.contains("flag--search__toggle")
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div>
      <div className="flag--search">
        <div>
          <input
            type="text"
            placeholder="Search for a country"
            className="flag--search__input"
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="flag--search__region">
          <p>
            Filter By Region
            <img
              src={modeChange ? lightToggle : darkToggle}
              alt="toggleUp"
              className="flag--search__toggle"
              onClick={toggleChange}
            />
          </p>
          <div
            className={`flag--search__filter ${toggle ? "" : "displayNone"}
            }`}
          >
            <Link to="/africa" className={`flag--search__link`}>
              Africa
            </Link>
            <Link to="/asia" className={`flag--search__link`}>
              Asia
            </Link>
            <Link to="/america" className={`flag--search__link`}>
              America
            </Link>
            <Link to="/europe" className={`flag--search__link`}>
              Europe
            </Link>
            <Link to="/ocenia" className={`flag--search__link`}>
              Ocenia
            </Link>
          </div>
        </div>
      </div>
      <div className="flag--search__results">
        {filteredCountries.map((country) => (
          <div key={country.cca3} className="flags--search__country">
            <Link to={`${country.name.common}`}>
              <img src={country.flags.png} alt="flags" />
              <p>{country.name.common}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Search;
