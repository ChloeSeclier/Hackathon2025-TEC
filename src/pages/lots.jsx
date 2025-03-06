import '../css/lots.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { details } from '../objet/listDetails'; // Importer les données

function Lots() {
  return (
    <div>
      <div className="lots">
        <h1>Cadeaux pour ta déconnexion</h1>
        <ul>
          {details.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} />
              {/* <p>{item.description}</p> */}
              <Link to={`/detail/${item.id}`} className="detail">
                Voir les détails
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lots;
