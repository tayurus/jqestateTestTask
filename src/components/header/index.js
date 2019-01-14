import React from "react";
import "./header.css";

import { Button } from "./../button/";

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
        <div className="header__feedback">
          <a href="tel:+7 (495) 023-49-901" className="header__nav-item">
            +7 (495) 023-49-901
          </a>
          <Button label="Обратный звонок" className="button_green" />
        </div>
      </div>
    </header>
  );
};
