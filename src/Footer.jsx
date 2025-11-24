import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-title">Bahandi</p>
        <p className="footer-text">@2024 ТОО Баханди. Все права защищены.</p>
      </div>
      <div className="footer-right">
        <p className="footer-section-title">Компания</p>
        <ul>
          <li>Франшиза</li>
          <li>Вакансии</li>
          <li>Оферта</li>
          <li>Политика конфиденциальности</li>
          <li>Карта сайта</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
