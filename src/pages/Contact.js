import React, { useState } from 'react';
import './Contact.css';
import facebookIcon from '../assets/icons/free-icon-font-facebook-6422199.svg';
import instagramIcon from '../assets/icons/free-icon-font-instagram-6422200.svg';
import telegramIcon from '../assets/icons/free-icon-font-telegram-6422206.svg';
import whatsappIcon from '../assets/icons/free-icon-font-whatsapp-6422213.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
    alert('Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Контакты</h1>
        <p>Свяжитесь с нами любым удобным способом</p>
      </div>

      <div className="contact-container">
        <div className="contact-info-section">
          <div className="info-card">
            <h2>Наш адрес</h2>
            <p>Б, 34 Абдылас Малдыбаев көчөсү, Бишкек</p>
          </div>

          <div className="info-card">
            <h2>Часы работы</h2>
            <div className="hours-grid">
              <div className="hours-item">
                <span>Понедельник - Пятница:</span>
                <span>9:00 - 20:00</span>
              </div>
              <div className="hours-item">
                <span>Суббота:</span>
                <span>10:00 - 18:00</span>
              </div>
              <div className="hours-item">
                <span>Воскресенье:</span>
                <span>Выходной</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2>Контактная информация</h2>
            <p>Телефон: +996778047003</p>
            <p>Email: magnum@info.com</p>
          </div>

          <div className="info-card">
            <h2>Мы в социальных сетях</h2>
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

        <div className="contact-form-section">
          <div className="form-container">
            <h2>Напишите нам</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Тема</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">Отправить сообщение</button>
            </form>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h2>Как нас найти</h2>
        <div className="map-container" style={{padding:0, height:'400px', background:'#fff', borderRadius:'10px', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=42.84052869623984,74.60100717674804&zoom=13&size=1200x400&markers=color:red%7C42.84052869623984,74.60100717674804&key=xxx"
            alt="Карта проезда"
            style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'10px', border:'none'}}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
