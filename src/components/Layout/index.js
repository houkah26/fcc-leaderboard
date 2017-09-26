import React from "react";

import "./index.css";

const Layout = props => (
  <div className="Layout">
    <header className="Layout__Header">{props.header}</header>
    <div className="Layout__Container">
      <main className="Layout__Container__Main">{props.main}</main>
      <footer className="Layout__Container__Footer">{props.footer}</footer>
    </div>
  </div>
);

export default Layout;
