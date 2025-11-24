import React from "react";
import "./Header.css";

const Header = ({ cartCount, search, setSearch }) => {
  return (
    <header className="header">
      <div className="logo">Bahandi</div>

      {/* Поле поиска рядом с логотипом */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <nav className="nav">
        <a href="?category=Бургеры">Бургеры</a>
        <a href="?category=Напитки">Напитки</a>
        <a href="?category=Комбо">Комбо</a>
        <button className="cart-button">
          Корзина ({cartCount})
        </button>
      </nav>
    </header>
  );
};

export default Header;
