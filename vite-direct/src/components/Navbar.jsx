import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const highlightedColor = "rgb(209, 88, 88)";

  return (
    <nav>
      <button style={path === "/" ? { color: highlightedColor } : undefined}>
        <Link to="/">Home</Link>
      </button>
      <button
        style={path === "/about" ? { color: highlightedColor } : undefined}
      >
        <Link to="/about">About</Link>
      </button>
    </nav>
  );
}

export default Navbar;
