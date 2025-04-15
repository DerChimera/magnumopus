import React, { useState } from 'react';
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carModel: '',
    service: '',
    date: '',
    time: '',
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
    alert('Спасибо за запись! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="appointment-page">
      <div className="appointment-hero">
        <h1>Запись на обслуживание</h1>
        <p>Заполните форму ниже, и мы свяжемся с вами для подтверждения записи</p>
      </div>

      <div className="appointment-container">
        <form className="appointment-form" onSubmit={handleSubmit}>
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
            <label htmlFor="carModel">Марка и модель автомобиля</label>
            <input
              type="text"
              id="carModel"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Тип обслуживания</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Выберите услугу</option>
              <option value="diagnostics">Диагностика</option>
              <option value="maintenance">Техническое обслуживание</option>
              <option value="repair">Ремонт двигателя</option>
              <option value="bodywork">Кузовной ремонт</option>
              <option value="oil">Замена масла</option>
              <option value="tires">Шиномонтаж</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Предпочтительная дата</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Предпочтительное время</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Дополнительная информация</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">Записаться</button>
        </form>

        <div className="appointment-info">
          <h2>Важная информация</h2>
          <ul>
            <li>Пожалуйста, приходите за 10-15 минут до назначенного времени</li>
            <li>Возьмите с собой документы на автомобиль</li>
            <li>В случае необходимости отмены, сообщите нам за 24 часа</li>
            <li>При опоздании более чем на 15 минут, запись может быть перенесена</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appointment; 