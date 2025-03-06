import '../css/header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// dans le header, on peut utimiser que des balise div,nav,menu,ul et li
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src="src\assets\logo.png" alt="" />
        </Link>

        <div
          className="burger"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          onClick={() => {
            setMenuOpen(false); // Optionnel, cela fermera le menu quand un élément est cliqué
          }}
          className={`link-header ${menuOpen ? 'open' : ''}`}
        >
          <li>
            <Link to="/regles-jeu">Gagne des vacances</Link>
          </li>
          <li>
            <Link to="/Lots">Cadeaux</Link>
          </li>
          <li>Règlement</li>
        </ul>
      </header>
    </>
  );
}
