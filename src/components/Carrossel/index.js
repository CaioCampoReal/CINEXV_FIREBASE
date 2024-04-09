import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import './script.js';
import velozes from '../assets/velozes em fullhd.jpg';
import tubarao from '../assets/Megatubarão.jpg';
import mario from '../assets/mario-cinema.jpeg';
import spiderman from '../assets/homem aranha fullhd.webp';

function Carrossel() {
  return (
    <main style={{ paddingTop: '150px' }}>
      <section className="slider" id="pagina3">
        <h3 id="text-slider">Filmes em Exibição</h3>
        <div className="slides">
          {/* Radio Button */}
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          {/* Fim Radio Button */}

          {/* Slide images */}
          <div className="slide first">
            <img src={velozes} alt="Velozes & Furiosos" />
            <h1>Velozes & Furiosos</h1>
          </div>
          <div className="slide">
            <img src={spiderman} alt="Homem-Aranha" />
          </div>
          <div className="slide">
            <img src={mario} alt="Super Mario" />
          </div>
          <div className="slide">
            <img src={tubarao} alt="Mega" />
          </div>
          {/* Fim Slide images */}

          {/* Navigation auto */}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </section>
    </main>
  );
}

export default Carrossel;
