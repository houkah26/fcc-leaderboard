import React from "react";

import NewTabLink from "../utility/NewTabLink";

import "./index.css";

const Footer = () => (
  <div className="Footer">
    <span>
      Brought to You By{" "}
      <NewTabLink url="https://github.com/houkah26" className="Footer__Link">
        Austin Houk
      </NewTabLink>
    </span>
  </div>
);
export default Footer;
