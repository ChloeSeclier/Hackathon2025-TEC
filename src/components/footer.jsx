import '../css/footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Link to="/contact"> Contact</Link>
        <Link to="/contact"> Politique de confidentialitée</Link>
        <Link to="/contact"> Mentions légales</Link>
      </footer>
    </>
  );
}
