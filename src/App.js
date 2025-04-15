import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { UserProvider } from './context/UserContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Team from './pages/Team';
import About from './pages/About';
import Equipment from './pages/Equipment';
import Auth from './pages/Auth';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from('services').select('*').limit(1);
      if (error) {
        console.error('Ошибка подключения к Supabase:', error);
      } else {
        console.log('Успешное подключение к Supabase! Пример данных:', data);
      }
    }
    testConnection();
  }, []);

  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route
              path="*"
              element={
                <>
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/appointment" element={<Appointment />} />
                      <Route path="/reviews" element={<Reviews />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/equipment" element={<Equipment />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
