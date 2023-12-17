import React from "react";
import AllFlags from "./AllFlags";

const Flags = ({ modeChange }) => {
  const [country, setCountry] = React.useState([]);

  const flagDetails = () => {
    fetch(" https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data))
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    flagDetails();
  }, []);
  console.log(country);

  const allflags = country.map((flags, index) => (
    <AllFlags
      key={index}
      name={flags.name.common}
      image={flags.flags.png}
      population={flags.population}
      region={flags.region}
      capital={flags.capital}
      modeChange={modeChange}
    />
  ));

  return <div>{allflags}</div>;
};
export default Flags;
