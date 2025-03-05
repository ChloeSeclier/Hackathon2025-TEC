import { Link } from 'react-router-dom';
import '../css/jeu.css';

export default function ReglesJeu() {
  return (
    <>
      <div className="jeu">
        <p>Vous allez jouer ....!!!! ECRIRE LES REGLES !!!!</p>
        <p>Etes-vous prêt ?</p>
        <Link to="/jeu">C'est partit !</Link>
      </div>
    </>
  );
}
