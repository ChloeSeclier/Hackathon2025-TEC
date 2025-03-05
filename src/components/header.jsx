import '../css/header.css';
import { Link } from 'react-router-dom';
// dans le header, on peut utimiser que des balise div,nav,menu,ul et li
export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src="src\assets\logo.png" alt="" />
        </Link>
        <ul>
          <li>Gagne des Vacances</li>
          <li>
            <Link to="/Lots" className="cadeaux-link">     
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
