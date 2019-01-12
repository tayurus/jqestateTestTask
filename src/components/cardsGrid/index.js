import React from "react";
import "./cardsGrid.css";

import { Card } from "./../";
import PropTypes from "prop-types";

export class CardsGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cards } = this.props;
    return (
      <div className="cards-grid">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    );
  }
}

CardsGrid.propTypes = {
  cards: PropTypes.array
};

CardsGrid.defaultProps = {
  cards: []
};
