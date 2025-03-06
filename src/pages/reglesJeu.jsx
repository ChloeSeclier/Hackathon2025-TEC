import { Link } from 'react-router-dom';
import '../css/jeu.css';
import '../css/reglesJeu.css';
import ButtonPlay from '../components/buttonPlay';

export default function ReglesJeu() {
  return (
    <>
      <div className="container-jeu">
        <div className="container-regle">
          <h2>Objectif : </h2>
          <p>
            Répondez aux questions pour marquer des points et obtenir un score
            de fatigue, afin de recevoir un séjour adapté.
          </p>

          <h2>Navigation : </h2>
          <p>Le bouton valider fait apparaître la question suivante.</p>

          <h2>Fin du jeu :</h2>
          <p>
            Le jeu se termine après avoir répondu aux questions, vous
            visualiserez votre score et votre récompense.
          </p>

          <h2>Etes-vous prêt ?</h2>
          <Link to="/jeu">
            <ButtonPlay />
          </Link>
        </div>
      </div>
    </>
  );
}
