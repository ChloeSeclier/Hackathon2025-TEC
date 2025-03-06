import '../css/lots.css';

// export default function Lots() {
//   return (
//     <div className="lots">
//       <h1> Cadeaux pour ta déconnexion </h1>

//       <ul>
//         <li>
//           <h2>Lot 1 : Séance Yoga</h2>
//           <img src="src\assets\image-lot-1.jpg" alt="" />
//         </li>

//         <li>
//           <h2>Lot 2 : Espace détente</h2>
//           <img src="src\assets\image-lot-2.jpg" alt="" />
//         </li>

//         <li>
//           <h2>Lot 3 : Séjour insolite </h2>
//           <img src="src\assets\image-lot-3.jpg" alt="" />
//         </li>
//       </ul>
//     </div>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import { details } from '../objet/listDetails'; // Importer les données

function Lots() {
  return (
    <div>
      <div className="lots">
        <h1>Cadeaux pour ta déconnexion</h1>
        <ul>
          {details.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} />
              {/* <p>{item.description}</p> */}
              <Link to={`/detail/${item.id}`} className="details">
                Voir les détails
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lots;
