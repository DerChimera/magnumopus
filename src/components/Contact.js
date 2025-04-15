import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Contact.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 55.7558, // Координаты Москвы
  lng: 37.6173
};

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Контакты</h1>
      <div className="map-container">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={13}
          >
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="contact-info">
        <h2>Наши контакты</h2>
        <p>Адрес: Б, 34 Абдылас Малдыбаев көчөсү, Бишкек</p>
        <p>Телефон: +996778047003</p>
        <p>Email: magnum@info.com</p>
      </div>
    </div>
  );
};

export default Contact;