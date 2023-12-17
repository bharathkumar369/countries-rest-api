import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Header = ({ modeChange, toggleMode }) => {
  return (
    <div>
      <Navbar modeChange={modeChange} toggleMode={toggleMode} />
      <Outlet />
    </div>
  );
};
export default Header;
