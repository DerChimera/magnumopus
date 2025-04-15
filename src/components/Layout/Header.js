import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import menuIcon from '../../assets/icons/free-icon-font-menu-burger-3917215.svg';
import logoMain from '../../assets/icons/logo main.png';
import userIcon from '../../assets/icons/free-icon-font-user-3917688.svg';
import { useUser } from "../../context/UserContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutDropdownTimeoutRef = React.useRef(null);
  const { user, handleLogout } = useUser();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoutClick = () => {
    if (handleLogout) handleLogout();
    navigate('/');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src={logoMain} alt="Magnum" className="logo-icon" />
            <span>MAGNUM</span>
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu" />
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/appointment">Запись</Link></li>
            <li className="about-navbar-wrapper"
                onMouseEnter={() => {
                  if (aboutDropdownTimeoutRef.current) clearTimeout(aboutDropdownTimeoutRef.current);
                  setIsAboutOpen(true);
                }}
                onMouseLeave={() => {
                  aboutDropdownTimeoutRef.current = setTimeout(() => setIsAboutOpen(false), 500);
                }}
            >
              <Link
                to="/about"
                className={`about-navbar-trigger${isAboutOpen ? ' active' : ''}`}
                onClick={e => { e.preventDefault(); setIsAboutOpen(!isAboutOpen); }}
                onMouseDown={e => e.preventDefault()}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') setIsAboutOpen(!isAboutOpen);
                }}
                aria-haspopup="true"
                aria-expanded={isAboutOpen}
              >О нас</Link>
              {isAboutOpen && (
                <div className="about-navbar-dropdown"
                     onMouseEnter={() => {
                       if (aboutDropdownTimeoutRef.current) clearTimeout(aboutDropdownTimeoutRef.current);
                       setIsAboutOpen(true);
                     }}
                     onMouseLeave={() => {
                       aboutDropdownTimeoutRef.current = setTimeout(() => setIsAboutOpen(false), 500);
                     }}
                >
                  <div className="about-navbar-content">
                    <Link to="/about">О компании</Link>
                    <Link to="/team">Наша команда</Link>
                    <Link to="/equipment">Оборудование</Link>
                    <Link to="/reviews">Отзывы</Link>
                  </div>
                </div>
              )}
            </li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          {user ? (
            <>
              <span style={{ color: '#fff', marginRight: 12 }}>Привет, {user.name}</span>
              <button className="login-button" onClick={handleLogoutClick}>Выйти</button>
            </>
          ) : (
            <Link to="/auth" className="auth-link">
              <img src={userIcon} alt="Авторизация" className="auth-icon" />
              <span className="auth-text">Авторизация</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;