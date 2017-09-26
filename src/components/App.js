import React, { Component } from "react";

import Layout from "./Layout";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends Component {
  render() {
    return <Layout header={<Header />} main={<Main />} footer={<Footer />} />;
  }
}

export default App;
