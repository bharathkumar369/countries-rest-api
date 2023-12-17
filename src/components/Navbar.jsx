import React from "react";
import { Link } from "react-router-dom";
import darkToggle from "../images/dark1-toggle.png";
import lightToggle from "../images/light1-toggle.png";

const Navbar = ({ modeChange, toggleMode }) => {
  // const [modeChange, setModeChange] = React.useState(false);

  // const toggleMode = () => {
  //   setModeChange(!modeChange);
  // };

  // return (
  //   <nav className={modeChange ? "darkmode" : "lightmode"}>
  //     <Link
  //       to="/"
  //       className={modeChange ? "darkmode nav__h1" : "lightmode nav__h1"}
  //     >
  //       <h1>where in the World ?</h1>
  //     </Link>
  //     <h4 className="nav__h4" onClick={toggleMode}>
  //       {modeChange ? "Dark Mode" : "Light Mode"}
  //     </h4>
  //   </nav>
  // );

  return (
    <nav className={modeChange ? "darkmode" : "lightmode"}>
      <Link
        to="/"
        className={`nav__h1 ${modeChange ? "darkmode" : "lightmode"}`}
      >
        <h1>where in the World ?</h1>
      </Link>
      <h4 className="nav__h4" onClick={toggleMode}>
        {modeChange ? (
          <img src={lightToggle} alt="darkToggle" className="nav__toggle" />
        ) : (
          <img src={darkToggle} alt="lightToggle" className="nav__toggle" />
        )}
      </h4>
    </nav>
  );
};
export default Navbar;
