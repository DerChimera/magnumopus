import React from 'react';

const BrandsSlider = ({ brands }) => {
  return (
    <div className="brands-section">
      <h2>Мы работаем с брендами</h2>
      <div className="brands-slider">
        <div className="brands-track">
          {/* Дублируем бренды для создания бесконечной анимации */}
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand.logo} alt={brand.name} title={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSlider; 