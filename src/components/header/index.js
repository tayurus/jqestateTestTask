import React from "react";
import "./header.css";

export const Header = props => {
  const navItems = ["Аренда", "Продажа", "Поселки", "О компании"];
  return (
    <header className="header">
      <div className="header__inner">
        <nav className="header__nav">
          <ul>
            <li href="#">
              <a href="#" className="header__logo" />
            </li>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="header__nav-item">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
