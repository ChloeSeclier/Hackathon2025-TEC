import '../css/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src="src\assets\logo.png" alt="" />
        </Link>
        <ul>
          <li>
            <Link to="/jeu">Gagne des vacances</Link>
          </li>
          <li>
            <Link to="/Lots">
              Cadeaux
            </Link>
          </li>
          <li>Règlement</li>
          <li>Connexion</li>
        </ul>
      </header>
    </>
  );
}
