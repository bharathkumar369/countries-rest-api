import React from "react";
import FilterContinents from "./FilterContinents";

const FilterAfrica = () => {
  const [filterCountries, setFilterCountries] = React.useState([]);

  const filterDetails = () => {
    fetch(" https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setFilterCountries(data))
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    filterDetails();
  }, []);

  const filtercontinents = filterCountries
    ? filterCountries.filter((filter) => filter.region === "Africa")
    : [];

  const Filter = filtercontinents.map((filter, index) => (
    <FilterContinents
      key={index}
      name={filter.name.common}
      image={filter.flags.png}
      region={filter.region}
    />
  ));

  return <div>{Filter}</div>;
};
export default FilterAfrica;
