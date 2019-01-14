import React, { Component } from "react";
import "./App.css";

import { MainPage } from "./containers";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MainPage />;
  }
}

export default App;
