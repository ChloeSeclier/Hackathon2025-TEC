import React from 'react';
import { useParams } from 'react-router-dom';
import { details } from '../objet/listDetails'; // Importer les données
import '../css/details.css';
// Importation des images
import Lot1 from '../assets/image-lot-1.jpg';
import Lot2 from '../assets/image-lot-2.jpg';
import Lot3 from '../assets/image-lot-3.jpg';

function DetailPage() {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const item = details.find((detail) => detail.id === parseInt(id)); // Trouver l'élément correspondant

  if (!item) {
    return <div>Élément non trouvé</div>; // Si aucun élément n'est trouvé
  }

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
    <div className="details">
      <h1>{item.title}</h1>
      <div className="details-container">
        <img src={getImageById(item.id)} alt={item.title} />
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default DetailPage;
