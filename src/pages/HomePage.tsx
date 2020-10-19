import React from 'react';
import { Link } from 'react-router-dom';

// CSS STYLES
import '../styles/pages/HomePage.css';

// IMAGES
import LogoImg from '../assets/images/logo.png';

// Component
import CampItem from '../components/CampItem/CampItem';


function HomePage() {
  return (
    <div id="page-home">
      <Link to="/" >
        <img src={LogoImg} className="logo-camping-fire" alt="Camping Fire"/>
      </Link>

      <Link to="/Register">
        <button className="btn-register">
          Cadastrar Camping
        </button>
      </Link>

      <div className="search">
        <form>
          <input type="search" placeholder="Pesquisar Camping"/>
          <button type="submit">Pesquisar</button>
        </form>
      </div>

      <div className="container">
        <div className="cards">
          <Link to="/Camping" className="link-to" >
            <CampItem />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
