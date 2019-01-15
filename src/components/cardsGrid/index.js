import React from "react";
import "./cardsGrid.css";

import { Card } from "./../";
import PropTypes from "prop-types";

export const CardsGrid = props => {
  const { cards } = props;
  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

CardsGrid.propTypes = {
  cards: PropTypes.array
};

CardsGrid.defaultProps = {
  cards: []
};
