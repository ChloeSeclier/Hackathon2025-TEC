import '../css/presente.css';
import { Link } from 'react-router-dom';
// import { details } from '../objet/listDetails'; // Importer les données
// Importation des images
import Lot1 from '../assets/image-lot-1.jpg';
import Lot2 from '../assets/image-lot-2.jpg';
import Lot3 from '../assets/image-lot-3.jpg';

export default function Presente({ score }) {
  console.log({ score });

  function getImageByScore(score) {
    if (score === 3) {
      return Lot3; 
    } else if (score === 2) {
      return Lot2; 
    } else {
      return Lot1; 
    }
  }

  return (
    <>
      <div className="resultat-jeu">
        <p>Votre score final est : {score}</p>
        <Link to={`/detail/${score}`}>
          <img
            src={getImageByScore(score)}
            alt="Image de score"
            className="imgPresente"
          />
        </Link>
      </div>
    </>
  );
}
