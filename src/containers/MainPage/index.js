import React, { Component } from "react";
import "./MainPage.css";
import { Pagination, Preloader } from "react-materialize";
import { connect } from "react-redux";
import { Card, CardsGrid, Header } from "./../../components";
import { cardsActions } from "./../../actions";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.handlePaginationItemClick = this.handlePaginationItemClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(cardsActions.getCards(0));
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
        badge: card.badge,
        sotki: (card.specification.area / 100).toFixed(1)
      }));

      const { total, limit, paginationIndex } = this.props;
      return (
        <div className="main-page">
          <Header />
          <CardsGrid cards={cards} />
          <Pagination
            className="main-page__pagination"
            items={parseInt(total / limit) + (total > limit && total % limit ? 1 : 0)}
            activePage={paginationIndex}
            onSelect={this.handlePaginationItemClick}
            maxButtons={8}
          />
        </div>
      );
    }

    return (
      <div className="main-page main-page_loading">
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

const connectedPage = connect(
  mapStateToProps,
  null
)(MainPage);

export { connectedPage as MainPage };
