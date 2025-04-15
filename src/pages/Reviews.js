import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: 'Александр',
      date: '15.03.2024',
      rating: 5,
      text: 'Отличный сервис! Быстро и качественно выполнили ремонт двигателя. Особая благодарность мастеру Михаилу за профессионализм.',
      service: 'Ремонт двигателя'
    },
    {
      id: 2,
      name: 'Елена',
      date: '10.03.2024',
      rating: 5,
      text: 'Очень довольна обслуживанием. Вежливый персонал, чистота в помещении. Сделали все точно в срок.',
      service: 'Техническое обслуживание'
    },
    {
      id: 3,
      name: 'Дмитрий',
      date: '05.03.2024',
      rating: 4,
      text: 'Хороший автосервис, разумные цены. Единственный минус - пришлось немного подождать.',
      service: 'Диагностика'
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    text: '',
    service: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки отзыва
    console.log('New review:', newReview);
    alert('Спасибо за ваш отзыв!');
    setNewReview({
      name: '',
      rating: 5,
      text: '',
      service: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="reviews-page">
      <div className="reviews-hero">
        <h1>Отзывы наших клиентов</h1>
        <p>Узнайте, что говорят о нас клиенты</p>
      </div>

      <div className="reviews-container">
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <h3>{review.name}</h3>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-service">{review.service}</div>
              <div className="review-rating">{renderStars(review.rating)}</div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="review-form-container">
          <h2>Оставить отзыв</h2>
          <form onSubmit={handleSubmit} className="review-form">
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Услуга</label>
              <select
                id="service"
                name="service"
                value={newReview.service}
                onChange={handleChange}
                required
              >
                <option value="">Выберите услугу</option>
                <option value="Диагностика">Диагностика</option>
                <option value="Техническое обслуживание">Техническое обслуживание</option>
                <option value="Ремонт двигателя">Ремонт двигателя</option>
                <option value="Кузовной ремонт">Кузовной ремонт</option>
                <option value="Замена масла">Замена масла</option>
                <option value="Шиномонтаж">Шиномонтаж</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="rating">Оценка</label>
              <select
                id="rating"
                name="rating"
                value={newReview.rating}
                onChange={handleChange}
                required
              >
                <option value="5">5 звезд</option>
                <option value="4">4 звезды</option>
                <option value="3">3 звезды</option>
                <option value="2">2 звезды</option>
                <option value="1">1 звезда</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="text">Ваш отзыв</label>
              <textarea
                id="text"
                name="text"
                value={newReview.text}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Отправить отзыв</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews; 