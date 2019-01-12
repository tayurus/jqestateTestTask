import React, { Component } from "react";
import "./App.css";

import { Card } from "./components";
import { CardsGrid } from "./components";

import { connect } from "react-redux";
import { cardsActions } from "./components/card/actions";

class App extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(cardsActions.getCards(0));
  }

  render() {
    if (this.props.cards) {
      console.log("this.props.cards = ", this.props.cards);
      const cards = this.props.cards.map(card => ({
        title: card.kind,
        currency: card.saleOffer ? card.saleOffer.currency : "none",
        price: card.saleOffer ? card.saleOffer.price : "none",
        area: card.specification.area,
        sotki: (card.specification.area / 100).toFixed(1)
      }));
      return (
        <div className="App">
          <div className="container">
            <CardsGrid cards={cards} />
          </div>
        </div>
      );
    }

    return <div />;
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
