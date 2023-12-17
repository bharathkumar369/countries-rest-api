import React from "react";
//import Header from "./Header";
import Search from "./Search";
import Flags from "./Flags-home";

const FlagCountries = ({ modeChange }) => {
  return (
    <div>
      <Search modeChange={modeChange} />
      <Flags modeChange={modeChange} />
    </div>
  );
};
export default FlagCountries;
