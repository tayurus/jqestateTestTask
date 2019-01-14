import React, { Component } from "react";
import "./App.css";

import { Card, CardsGrid, Header } from "./components";
import { Pagination, Preloader } from "react-materialize";

import { connect } from "react-redux";
import { cardsActions } from "./components/card/actions";

class App extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;

    dispatch(cardsActions.getCards(0));

    this.handlePaginationItemClick = this.handlePaginationItemClick.bind(this);
  }

  handlePaginationItemClick(paginationIndex) {
    const { dispatch, limit } = this.props;
    dispatch(cardsActions.getCards((paginationIndex - 1) * limit, paginationIndex));
  }

  render() {
    if (this.props.error) {
      alert("При загрузке произошла ошибка!");
      return <div />;
    } else if (!this.props.loading) {
      const cards = this.props.cards.map(card => ({
        title: card.kind,
        currency: card.saleOffer ? card.saleOffer.currency : "none",
        price: card.saleOffer ? card.saleOffer.price : "none",
        area: card.specification.area,
        sotki: (card.specification.area / 100).toFixed(1)
      }));

      const { total, limit, paginationIndex } = this.props;
      return (
        <div className="App">
          <Header />
          <CardsGrid cards={cards} />
          <Pagination
            className="App__pagination"
            items={parseInt(total / limit) + (total > limit && total % limit ? 1 : 0)}
            activePage={paginationIndex}
            onSelect={this.handlePaginationItemClick}
            maxButtons={8}
          />
        </div>
      );
    }

    return (
      <div className="App App_loading">
        <Preloader size="big" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cards, total, limit, loading, paginationIndex, error } = state;

  return {
    cards,
    total,
    limit,
    loading,
    paginationIndex,
    error
  };
}

const connectedApp = connect(
  mapStateToProps,
  null
)(App);

export { connectedApp as App };
