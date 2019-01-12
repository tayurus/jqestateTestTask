import React, { Component } from "react";
import "./App.css";

import { Card } from "./components";
import { CardsGrid } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <CardsGrid cards={[{}, {}, {}]} />
        </div>
        <Card />
      </div>
    );
  }
}

export default App;
