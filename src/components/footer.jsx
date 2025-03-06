import '../css/footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Link to="/contact"> Contact</Link>
        <Link to="/politique"> Politique de confidentialitée</Link>
        <Link to="/mentions"> Mentions légales</Link>
      </footer>
    </>
  );
}
