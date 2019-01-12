import React from "react";
import "./card.css";
import PropTypes from "prop-types";

export const Card = props => {
  return (
    <div className="card">
      <div
        className="card__image"
        style={{
          backgroundImage:
            "url(https://www.13min.ru/wp-content/uploads/2012/10/Sobstvennyj-dom.jpg)"
        }}
      />
      <div className="card__title">Дом</div>
      <div className="card__price">$1 500 000</div>
      <div className="card__area">
        <div className="card__sotki">3 сот</div>
        <div className="card__square">
          575 м<sup>2</sup>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sotki: PropTypes.string.isRequired,
  square: PropTypes.string.isRequired
};

Card.defaultProps = {
  title: "Дом",
  price: "100 000",
  sotki: "3",
  square: "100"
};
