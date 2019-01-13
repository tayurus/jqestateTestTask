import React from "react";
import "./card.css";
import PropTypes from "prop-types";

export const Card = ({ title, price, area, sotki }) => {
  // console.log("kind = ", kind);
  return (
    <div className="card">
      <div
        className="card__image"
        style={{
          backgroundImage: "url(https://www.13min.ru/wp-content/uploads/2012/10/Sobstvennyj-dom.jpg)"
        }}
      />
      <div className="card__title">{title}</div>
      <div className="card__price">{price.toLocaleString()}</div>
      <div className="card__area">
        <div className="card__sotki">{sotki} сот</div>
        <div className="card__square">
          {area} м<sup>2</sup>
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
