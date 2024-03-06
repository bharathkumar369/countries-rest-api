import React from "react";
import { Link } from "react-router-dom";

const AllFlags = (props) => {
  return (
    <div
      className={`flag-container ${
        props.modeChange ? "darkmode" : "lightmode"
      }`}
    >
      <div
        className={`flag-box ${props.modeChange ? "darkmode" : "lightmode"}`}
      >
        <Link to={`${props.name}`}>
          <div className="flagImage">
            <img src={props.image} alt="" className="flags" />
          </div>
        </Link>
        <div
          className={`flags-text ${
            props.modeChange ? "darkmode" : "lightmode"
          }`}
        >
          <h1>{props.name}.slice(0,19)</h1>

          <h5>
            Population:
            <span className="flag-descrip">{props.population}</span>
          </h5>
          <h5>
            Capital:<span className="flag-descrip">{props.capital}</span>
          </h5>
          <h5>
            Region:<span className="flag-descrip">{props.region}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};
export default AllFlags;
