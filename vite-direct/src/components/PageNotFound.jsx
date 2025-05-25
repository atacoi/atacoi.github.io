import { Link } from "react-router-dom";
import "../css/PageNotFound.css";

function PageNotFound() {
  return (
    <div id="page-not-found-container">
      <h1>Whoops!</h1>
      <h2>This page does not exist</h2>
      <Link to="/">return to Home</Link>
    </div>
  );
}

export default PageNotFound;
