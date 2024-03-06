import React from "react";
import { Link, useParams } from "react-router-dom";

const FlagDetails = ({ modeChange }) => {
  const { id } = useParams();

  const [countryDetails, setCountryDetails] = React.useState([]);

  const flagDetails = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountryDetails(data))
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    flagDetails();
  }, []);

  const details = countryDetails.find((details) => details.name.common === id);

  console.log(details);

  return (
    <div className={`flag--details ${modeChange ? "darkmode" : "lightmode"}`}>
      <Link to=".." relative="path" className="back-button">
        <button className="flag--details__button">&larr; Go Back</button>
      </Link>
      {details && (
        <img
          src={details.flags.png}
          alt={details.flags.alt}
          className="flag--details__flags"
        />
      )}
      {details && (
        <>
          <h1>{details.name.common.slice(0,5)}</h1>
          <h5 className="flag--details__h5">
            Population:
            <span className="flag--details__text">{details.population}</span>
          </h5>
          <h5 className="flag--details__h5">
            Region:<span className="flag--details__text">{details.region}</span>
          </h5>
          <h5 className="flag--details__h5">
            SubRegion:<span className="flag--details__text"></span>
            {details.subregion}
          </h5>
          <h5 className="flag--details__h5">
            Capital:
            <span className="flag--details__text">{details.capital}</span>
          </h5>
          <h5 className="flag--details__h5">
            Currencies:
            <span className="flag--details__text">
              {details.currencies &&
                details.currencies[Object.keys(details.currencies)[0]].name}
            </span>
          </h5>
          <h5 className="flag--details__h5">
            Languages:
            <span className="flag--details__text">
              {details.languages &&
                details.languages[Object.keys(details.languages)[0]]}
            </span>
          </h5>
          <h5 className="flag--details__h5">
            NativeName:
            <span className="flag--details__text">
              {details.name &&
                details.name.nativeName[Object.keys(details.name.nativeName)[0]]
                  .official}
            </span>
          </h5>
          <h5 className="flag--details__h5">
            Top Level Domain:{" "}
            <span className="flag--details__text">
              {details.altSpellings[0]}
            </span>
          </h5>
        </>
      )}
      {details && (
        <div>
          <h5 className="flag--details__h5">
            Borders :
            <span className="flag--details__text">
              {details.borders &&
                details.borders[Object.keys(details.borders)[0]]}
            </span>
          </h5>
        </div>
      )}
    </div>
  );
};
export default FlagDetails;
