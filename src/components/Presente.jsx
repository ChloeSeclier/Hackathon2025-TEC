import '../css/presente.css';
import { Link } from 'react-router-dom';
import { details } from '../objet/listDetails'; // Importer les données

export default function Presente({ score }) {
  console.log({ score });

  const detail = details.find((detail) => detail.id === score);
  function getImageByScore(score) {
    if (score == 3) {
      return '../src/assets/image-lot-3.jpg'; // Exemple pour un score élevé
    } else if (score == 2) {
      return '../src/assets/image-lot-2.jpg'; // Exemple pour un score moyen
    } else {
      return '../src/assets/image-lot-1.jpg'; // Exemple pour un score faible
    }
  }
  return (
    <>
      <div className="resultat-jeu">
        <p>Votre score final est : {score}</p>
        <Link to={`/detail/${score}`}>
          <img src={getImageByScore(score)} alt="Image de score" />
        </Link>
      </div>
    </>
  );
}
