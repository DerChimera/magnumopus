import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import calendarIcon from '../assets/icons/free-icon-font-calendar-3917292.svg';
import checkIcon from '../assets/icons/free-icon-font-check-3917084.svg';
import settingsIcon from '../assets/icons/free-icon-font-settings-3917058.svg';
import envelopeIcon from '../assets/icons/free-icon-font-envelope-3916632.svg';
import diagnosticsImg from '../assets/images/services/diagnostics.jpg';
import engineImg from '../assets/images/services/engine.jpg';
import bodyRepairImg from '../assets/images/services/body-repair.jpg';
import continentalLogo from '../assets/icons/partner-logo/Continental.png';
import pirelliLogo from '../assets/icons/partner-logo/Pirelli.png';
import goodyearLogo from '../assets/icons/partner-logo/Goodyear.png';
import kumhoLogo from '../assets/icons/partner-logo/Kumho.png';
import diamondLogo from '../assets/icons/partner-logo/Diamond.png';
import mycarLogo from '../assets/icons/partner-logo/Mycar.png';

const Home = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const brands = [
    { logo: continentalLogo },
    { logo: pirelliLogo },
    { logo: goodyearLogo },
    { logo: kumhoLogo },
    { logo: diamondLogo },
    { logo: mycarLogo }
  ];

  const features = [
    {
      title: 'Современное оборудование',
      description: 'Используем профессиональное оборудование последнего поколения для точной диагностики и ремонта',
      icon: '🔧'
    },
    {
      title: 'Опытные мастера',
      description: 'Наши специалисты регулярно проходят обучение и имеют сертификаты от ведущих производителей',
      icon: '👨‍🔧'
    },
    {
      title: 'Гарантия качества',
      description: 'Предоставляем гарантию на все виды работ и используем только оригинальные запчасти',
      icon: '✅'
    }
  ];

  const services = [
    {
      title: 'Диагностика',
      description: 'Комплексная проверка всех систем автомобиля',
      details: 'Включает диагностику двигателя, ABS, ESP, АКПП и других систем.',
      image: diagnosticsImg
    },
    {
      title: 'Ремонт двигателя',
      description: 'Капитальный и текущий ремонт двигателей',
      details: 'Замена прокладок, ремонт ГРМ, обслуживание турбин и интеркулеров.',
      image: engineImg
    },
    {
      title: 'Кузовной ремонт',
      description: 'Восстановление геометрии кузова и покраска',
      details: 'Локальная и полная покраска, восстановление после ДТП.',
      image: bodyRepairImg
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
        >
          <source src={require('../assets/videos/hero-bg.mp4')} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Профессиональный автосервис</h1>
          <p>Качественный ремонт и обслуживание вашего автомобиля</p>
          <div className="hero-buttons">
            <Link to="/appointment" className="cta-button">Записаться на сервис</Link>
            <Link to="/services" className="cta-button">Наши услуги</Link>
          </div>
        </div>
      </section>

      <section className="brands-section">
        <h2>Работаем с ведущими брендами</h2>
        <div className="brands-slider">
          <div className="brands-track">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="brand-item">
                <img src={brand.logo} alt="brand" style={{ maxWidth: 120, maxHeight: 60, objectFit: 'contain', margin: '0 auto', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Почему выбирают нас</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="popular-services">
        <h2>Популярные услуги</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p className="service-details">{service.details}</p>
                <Link to="/services" className="service-link">Подробнее</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Лет опыта</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Довольных клиентов</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Профессиональных мастеров</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Гарантия качества</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Нужна консультация?</h2>
          <p>Наши специалисты ответят на все ваши вопросы и помогут решить любую проблему с вашим автомобилем</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-button">Связаться с нами</Link>
            <Link to="/appointment" className="secondary-button">Записаться на сервис</Link>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Контакты</h2>
            <div className="info-item">
              <img src={envelopeIcon} alt="Email" className="icon" />
              <p>magnum@info.com</p>
            </div>
            <div className="info-item">
              <img src={checkIcon} alt="Check" className="icon" />
              <p>+996778047003</p>
            </div>
            <div className="info-item">
              <img src={checkIcon} alt="Address" className="icon" />
              <p>Б, 34 Абдылас Малдыбаев көчөсү, Бишкек</p>
            </div>
          </div>
          <div className="working-hours">
            <h2>Режим работы</h2>
            <div className="hours-grid">
              <div className="hours-item">
                <span>Понедельник - Пятница</span>
                <span>9:00 - 20:00</span>
              </div>
              <div className="hours-item">
                <span>Суббота</span>
                <span>10:00 - 18:00</span>
              </div>
              <div className="hours-item">
                <span>Воскресенье</span>
                <span>Выходной</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;