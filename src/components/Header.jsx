import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/display">DisplayName</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
