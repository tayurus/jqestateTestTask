import React, { Component } from "react";
import "./App.css";

import { Card } from "./components";
import { CardsGrid } from "./components";

import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="App">
        <div className="container">
          <CardsGrid cards={cards} />
        </div>
        <Card />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cards } = state;

  return {
    cards
  };
}

const connectedApp = connect(
  mapStateToProps,
  null
)(App);

export { connectedApp as App };
