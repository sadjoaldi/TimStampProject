import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "../styles/notFound.scss";

function Notfound() {
  const error = useRouteError();

  return (
    <div className="notfound">
      <div className="content">
        <h1> 404 </h1>
        <span>Not found</span>
        {/* la traduction du code d'error: si on a une erreur, on affiche le
      message d'erreur, sinon on affiche une chaine vide. vu chez grafikard */}
        <p>{error?.error?.toString() ?? error?.toString()}</p>
      </div>
      <button type="button">
        {" "}
        <Link to="dashboard">Dashboard</Link>{" "}
      </button>
    </div>
  );
}

export default Notfound;
