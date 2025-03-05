import '../css/header.css';
// dans le header, on peut utimiser que des balise div,nav,menu,ul et li
export default function Header() {
  return (
    <>
      <header className="header">
        <a href="/">
          <img src="src\assets\logo.png" alt="" />
        </a>

        <ul>
          <li>Gagne des Vacances</li>
          <li>
            <a href="/Lots">Cadeaux</a>
          </li>
          <li>Règlement</li>
          <li>Connexion</li>
        </ul>
      </header>
    </>
  );
}
