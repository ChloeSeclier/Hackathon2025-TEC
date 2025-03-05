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
          <ul className={menuOpen ? 'open' : ''}>
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
