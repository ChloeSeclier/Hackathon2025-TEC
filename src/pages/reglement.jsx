import { Link } from 'react-router-dom';
import '../css/reglement.css';

export default function Reglement() {
  return (
    <div className="reglement">
      <h1> Règlement</h1>
      <p className="grand-p">
        <h2>RÈGLEMENT DU JEU-CONCOURS "QUIZ NATURE"</h2>

        <h3>ARTICLE 1 : ORGANISATEUR</h3>
        <p>
          L'organisateur du jeu-concours "Quiz Nature" est TEC, ayant son siège
          social à la Wild Code School.
        </p>
        <p>
          ARTICLE 2 : DURÉE Le Jeu se déroulera du 6 mars 2025 à 00h00 au 7 mars
          2025 à 23h59 (heure locale).
        </p>
        <h3>ARTICLE 3 : CONDITIONS DE PARTICIPATION</h3>
        <p>
          La participation au Jeu est gratuite et ouverte à toute personne
          physique majeure résidant en [Pays]. Une seule participation par
          personne est autorisée. Toute tentative de participation multiple
          entraînera l’exclusion du participant.
        </p>
        <h3>ARTICLE 4 : MODALITÉS DE PARTICIPATION</h3>
        <p>
          Pour participer, le joueur doit : Compléter le quiz en ligne
          disponible <Link to="/regles-jeu">ici</Link>. Répondre à l’ensemble
          des questions avant la date de fin du Jeu.
        </p>
        <h3>ARTICLE 5 : DÉSIGNATION DES GAGNANTS</h3>
        <p>
          En fonction des réponses fournies, chaque participant se verra
          attribuer l'un des trois lots mis en jeu, correspondant à son score et
          ses choix.
        </p>
        <h3>ARTICLE 6 : LOTS MIS EN JEU</h3>
        <p>
          Les participants peuvent gagner l'un des trois lots suivants, liés à
          une activité nature : Lot 1 : Séance Yoga Lot 2 : Espace détente Lot 3
          :Séjour insolite Les lots ne sont ni échangeables ni remboursables.
        </p>
        <h3>ARTICLE 7 : ANNONCE DES GAGNANTS ET REMISE DES LOTS</h3>
        <p>
          Les gagnants seront contactés par e-mail ou par téléphone dans un
          délai de [X] jours après la fin du Jeu.
        </p>
        <h3>ARTICLE 8 : RESPONSABILITÉS</h3>
        <p>
          L'organisateur ne saurait être tenu responsable en cas de problème
          technique, de fraude ou de force majeure affectant le bon déroulement
          du Jeu.
        </p>
        <h3>ARTICLE 9 : ACCEPTATION DU RÈGLEMENT</h3>
        <p>
          La participation au Jeu implique l’acceptation pleine et entière du
          présent règlement.
        </p>

        <p>Fait à Saint-Jean-de-Braye, le 6 mars 2025.</p>

        <p>TEC.</p>
      </p>
    </div>
  );
}
