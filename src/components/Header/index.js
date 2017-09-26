import React from "react";

import NewTabLink from "../utility/NewTabLink";
import "./index.css";

const Header = () => (
  <div className="Header">
    <NewTabLink url="https://www.freecodecamp.org" className="Header__ImgLink">
      <img
        src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg"
        alt="FCC Logo"
      />
    </NewTabLink>
  </div>
);

export default Header;
