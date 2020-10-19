import React from 'react';

// CSS
import "./CampItem.css";

//ICONS
import { BsFillTrashFill, BsPencil } from "react-icons/bs";

//IMAGES
import CampImage from "../../assets/images/imagem01.png";
import { Link } from 'react-router-dom';

function CampItem() {
  return (
    <div className="card">
      <img src={CampImage} alt="Camping"/>
      <div className="content">
        <h4>Camping Party</h4>
        <p>Rodovia Presitende Catelo Branco, km 25</p>
        <p>Cotia - SP</p>
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
  )
}

export default CampItem;
