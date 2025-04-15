import React from "react";
import "./Equipment.css";

const equipmentSections = [
  {
    title: "Подъёмники",
    items: [
      "Двухстоечные подъёмники (грузоподъёмность 3.5–5 тонн)",
      "Четырёхстоечные подъёмники — для сход-развала и длиннобазных авто",
      "Ножничные подъёмники — компактные и удобные для шиномонтажа и кузовных работ",
    ],
  },
  {
    title: "Диагностическое оборудование",
    items: [
      "Компьютерные сканеры OBD2 (Launch, Bosch, Autel, Jaltest)",
      "Специализированные сканеры для брендов (BMW ISTA, Mercedes Xentry, VAG VCDS и т.д.)",
      "Многофункциональные диагностические станции (с возможностью прошивки ЭБУ)",
    ],
  },
  {
    title: "Инструменты и станции для ремонта",
    items: [
      "Комплекты ручного и пневмоинструмента (Hazet, Wurth, King Tony)",
      "Станки для ремонта головок блока и ДВС",
      "Пресс-гидравлический (для сайлентблоков, подшипников)",
      "Стенды для промывки инжектора",
      "Аппараты для замены масел под давлением (в АКПП, ГУР)",
    ],
  },
  {
    title: "Шиномонтаж и балансировка",
    items: [
      "Шиномонтажный станок с помощником для RunFlat шин",
      "Балансировочный станок с лазерной калибровкой",
      "Гайковёрты пневматические/электрические",
    ],
  },
  {
    title: "Сход-развал",
    items: [
      "3D-стенд сход-развала (Hunter, Hofmann, John Bean)",
      "Комплект поворотных кругов и подъёмников",
    ],
  },
  {
    title: "Климат-системы",
    items: [
      "Станции заправки кондиционеров (R134a и R1234yf)",
      "Течеискатели, ультрафиолетовые лампы, вакуумные насосы",
    ],
  },
  {
    title: "Кузовной участок",
    items: [
      "Рихтовочный стапель",
      "Инфракрасная сушка",
      "Покрасочная камера (бокс с вентиляцией и фильтрацией)",
      "Шлифмашины, полировочные машины, краскопульты",
    ],
  },
  {
    title: "Детейлинг и чистка",
    items: [
      "Полировочные машинки, абразивы и пасты",
      "Пароочистители и экстракторы",
      "Стенды для мойки двигателей и салона",
      "Аппараты высокого давления (Karcher, Portotecnica)",
    ],
  },
];

const Equipment = () => {
  return (
    <div className="equipment-page equipment-page-light">
      <h1 className="equipment-title equipment-title-light">Оборудование сервиса</h1>
      <p className="equipment-subtitle equipment-subtitle-light">Современное оснащение для профессионального обслуживания вашего автомобиля</p>
      <div className="equipment-gallery creative-gallery">
        <img src={require("../assets/images/equipment/4e (1).jpg")} alt="equipment 1" className="equipment-img-placeholder creative-img-placeholder animate-fadein" style={{objectFit: 'cover', width: 180, height: 120}} />
        <img src={require("../assets/images/equipment/4e (2).jpg")} alt="equipment 2" className="equipment-img-placeholder creative-img-placeholder animate-fadein" style={{objectFit: 'cover', width: 180, height: 120}} />
        <img src={require("../assets/images/equipment/4e (3).jpg")} alt="equipment 3" className="equipment-img-placeholder creative-img-placeholder animate-fadein" style={{objectFit: 'cover', width: 180, height: 120}} />
        <img src={require("../assets/images/equipment/4e (1).png")} alt="equipment 4" className="equipment-img-placeholder creative-img-placeholder animate-fadein" style={{objectFit: 'cover', width: 180, height: 120}} />
      </div>
      <div className="equipment-sections alt-equipment-sections">
        {equipmentSections.map((section, idx) => (
          <div
            className={`alt-equipment-card animate-slideup`}
            key={section.title}
            style={{ borderLeft: `7px solid var(--accent${idx % 6})`, animationDelay: `${0.1 * idx}s` }}
          >
            <h2 className="alt-equipment-title">{section.title}</h2>
            <ul className="alt-equipment-list">
              {section.items.map((item, i) => (
                <li key={i} className="alt-equipment-list-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
