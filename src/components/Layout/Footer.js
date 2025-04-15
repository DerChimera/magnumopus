import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebookIcon from '../../assets/icons/free-icon-font-facebook-6422199.svg';
import instagramIcon from '../../assets/icons/free-icon-font-instagram-6422200.svg';
import telegramIcon from '../../assets/icons/free-icon-font-telegram-6422206.svg';
import whatsappIcon from '../../assets/icons/free-icon-font-whatsapp-6422213.svg';
import logoMain from '../../assets/icons/logo main.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img src={logoMain} alt="Magnum" className="footer-logo-icon" />
            <span>MAGNUM</span>
          </Link>
          <p className="footer-description">
            Профессиональный автосервис с современным оборудованием и опытными мастерами
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-links-column">
            <h3>УСЛУГИ</h3>
            <ul>
              <li><Link to="/services/diagnostics">Диагностика</Link></li>
              <li><Link to="/services/engine">Ремонт двигателя</Link></li>
              <li><Link to="/services/transmission">Ремонт трансмиссии</Link></li>
              <li><Link to="/services/brakes">Ремонт тормозной системы</Link></li>
              <li><Link to="/services/suspension">Ремонт подвески</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3>РЕМОНТ</h3>
            <ul>
              <li><Link to="/repair/body">Кузовной ремонт</Link></li>
              <li><Link to="/repair/painting">Покраска</Link></li>
              <li><Link to="/repair/glass">Ремонт стекла</Link></li>
              <li><Link to="/repair/wheel">Ремонт колес</Link></li>
              <li><Link to="/repair/electronics">Ремонт электроники</Link></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h3>О НАС</h3>
            <ul>
              <li><Link to="/about">О компании</Link></li>
              <li><Link to="/team">Наша команда</Link></li>
              <li><Link to="/equipment">Оборудование</Link></li>
              <li><Link to="/reviews">Отзывы</Link></li>
              <li><Link to="/contact">Контакты</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <h3>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h3>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#" className="social-link" aria-label="Telegram">
              <img src={telegramIcon} alt="Telegram" />
            </a>
            <a href="#" className="social-link" aria-label="WhatsApp">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Magnum. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;