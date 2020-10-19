import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTrashFill, BsPencil } from 'react-icons/bs';


// CSS STYLES
import '../styles/pages/Camping.css';

// IMAGES
import LogoImg from '../assets/images/logo.png';
import CampImage from '../assets/images/imagem01.png';


function Camping() {
  return (
    <div id="page-camping">
      <Link to="/" >
        <img src={LogoImg} className="logo-camping-fire" alt="Camping Fire"/>
      </Link>

      <Link to="/">
        <button className="btn-back">
          Voltar
        </button>
      </Link>

      <div className="container">
        <div className="card">
          <img src={CampImage} alt="Camping"/>
          <div className="content">
            <h4>Camping Party</h4>
            <p>Rodovia Presitende Catelo Branco, km 25</p>
            <p>Cotia - SP</p>

            <p>Um acampamento muito lindo, com muitas arvores, lagos e aventura. Venha agendar sua visita!!!</p>
            <p>Contatdo: (11) 99999-9999</p>
          </div>
          <div className="btn-group">
            <button className="trash">
              <BsFillTrashFill size="24"/>
            </button>

            <Link to="/EditCamping">
              <button className="edit">
                <BsPencil size="24"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Camping;
