import React from "react";
import PropTypes from "prop-types";

import "./button.css";

export const Button = props => {
  const { className, label, onClick } = props;
  return (
    <button className={"button " + className} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.function
};

Button.defaultProps = {
  className: "",
  label: "label",
  onClick: () => {}
};
