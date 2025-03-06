import React from 'react';
import { useParams } from 'react-router-dom';
import { details } from '../objet/listDetails'; // Importer les données
import '../css/details.css';

function DetailPage() {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const item = details.find((detail) => detail.id === parseInt(id)); // Trouver l'élément correspondant

  if (!item) {
    return <div>Élément non trouvé</div>; // Si aucun élément n'est trouvé
  }

  return (
    <div className="details">
      <h1>{item.title}</h1>
      <div className="details-container">
        <img src={item.image} alt={item.title} />
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default DetailPage;
