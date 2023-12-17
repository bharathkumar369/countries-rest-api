import React from "react";
import { Link } from "react-router-dom";

const FilterContinents = (props) => {
  return (
    <div className="filterCotinents--container">
      <Link to={`/${props.name}`}>
        <img src={props.image} alt="" className="filterContinents__image" />
      </Link>
      <div className="filterContinents__text">
        <h1>{props.name}</h1>
        <h2>{props.region}</h2>
      </div>
    </div>
  );
};
export default FilterContinents;
