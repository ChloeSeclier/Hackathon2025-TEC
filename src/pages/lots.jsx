import '../css/lots.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { details } from '../objet/listDetails'; // Importer les données
// Importation des images
import Lot1 from '../assets/image-lot-1.jpg';
import Lot2 from '../assets/image-lot-2.jpg';
import Lot3 from '../assets/image-lot-3.jpg';

function Lots() {
    // Remplacement des images en fonction des éléments pour visualiser image en prod
    const getImageById = (id) => {
      switch (id) {
        case 1:
          return Lot1;
        case 2:
          return Lot2;
        case 3:
          return Lot3;
        default:
          return Lot1; // Valeur par défaut si l'ID ne correspond à aucune image
      }
    };

  return (
    <div>
      <div className="lots">
        <h1>Cadeaux pour ta déconnexion</h1>
        <ul>
          {details
            .filter((item, index) => index !== 0) // Exclude the first item (index 0)
            .map((item) => (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <Link to={`/detail/${item.id}`} className="detail">
                  <img src={getImageById(item.id)} alt={item.title} />
                  <p>Voir les détails</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Lots;
