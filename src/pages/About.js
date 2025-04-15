import React from 'react';
import './About.css';

const milestones = [
  {
    year: '2010',
    title: 'Гараж и мечта',
    desc: 'Всё началось с обычного гаража в южной части Бишкека, где два друга — Айбек и Тимур — вечерами ремонтировали машины. Это было хобби и страсть к технике.'
  },
  {
    year: '2013',
    title: 'Первая мастерская',
    desc: 'Открыли первую полноценную мастерскую. Не было дорогого оборудования, но было честное отношение к каждому клиенту. Чинили так, как для себя.'
  },
  {
    year: 'Сегодня',
    title: 'Современный автосервис',
    desc: 'Сейчас это современная станция с опытными мастерами, диагностикой и уютной зоной ожидания. Работаем с легковыми, внедорожниками и коммерческими авто.'
  },
  {
    year: 'Наш принцип',
    title: '"Сделай как для себя"',
    desc: 'Главное не изменилось: мы до сих пор работаем по принципу "Сделай как для себя". Это ценят наши постоянные клиенты.'
  }
];

const About = () => (
  <div className="about-page">
    <div className="about-hero">
      <h1>История компании</h1>
      <p className="about-lead">От гаража до современной станции — наш путь в деталях</p>
    </div>
    <div className="timeline-container">
      <div className="timeline">
        {milestones.map((item, idx) => (
          <div className={`timeline-item${idx % 2 === 0 ? ' left' : ' right'}`} key={idx}>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="timeline-progress">
          <div className="timeline-dot start"></div>
          <div className="timeline-line"></div>
          <div className="timeline-dot end"></div>
        </div>
      </div>
    </div>
    <div className="about-final">
      <h2>Почему выбирают нас?</h2>
      <p>Мы не просто ремонтируем автомобили — мы строим доверие и долгосрочные отношения. Для нас важно, чтобы каждый клиент уезжал с уверенностью и спокойствием.</p>
    </div>
  </div>
);

export default About;
