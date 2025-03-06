import { Link } from 'react-router-dom';
import '../css/jeu.css';
import ButtonPlay from './buttonPlay';

export default function ReglesJeu() {
  return (
    <>
      <div className="container-jeu">
        <p>
          Objectif : Répondez aux questions pour marquer des points et obtenir
          un score de fatigue, afin de recevoir un séjour adapté.
        </p>
        <p>Types de questions :</p>
        <ul>
          <li>Vrai/Faux : Choisissez une option pour obtenir 0 ou 1 point.</li>
          <li>
            Échelle : Déplacez le curseur entre 0 et 5 pour sélectionner un
            score.
          </li>
        </ul>
        <p>
          Navigation : Chaque réponse valide fait apparaître la question
          suivante. À la fin, votre score total et des récompenses sont
          affichés.
        </p>
        <p>
          Fin du jeu : Le jeu se termine après toutes les questions, avec votre
          score et des récompenses.
        </p>

        <p>Etes-vous prêt ?</p>
        <Link to="/jeu">
          <ButtonPlay />
        </Link>
      </div>
    </>
  );
}
