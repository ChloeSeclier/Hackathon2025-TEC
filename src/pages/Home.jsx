import '../css/home.css';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>
          Vous sortez d’un hackathon ?<br />
          Besoin de déconnecter ?
        </h1>

        <h2>
          Laissez-vous tenter par notre jeu pour gagner un moment de détente
          selon votre besoin.
        </h2>

        <Carousel />
      </div>
    </>
  );
}
