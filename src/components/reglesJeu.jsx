import { Link } from 'react-router-dom';
import '../css/jeu.css';
import ButtonPlay from './buttonPlay';

export default function ReglesJeu() {
  return (
    <>
      <div className="container-jeu">
        <p>Vous allez jouer ....!!!! ECRIRE LES REGLES !!!!</p>
        <p>Etes-vous prêt ?</p>
        <Link to="/jeu">
          <ButtonPlay />
        </Link>
      </div>
    </>
  );
}
