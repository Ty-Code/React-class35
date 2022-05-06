import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to={'/'} className="nav-link">
        Products
      </Link>
      <Link to={'/favorites'} className="nav-link">
        Favorites
      </Link>
    </nav>
  );
}
