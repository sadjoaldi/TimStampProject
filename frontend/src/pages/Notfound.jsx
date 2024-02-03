import React from "react";
import { useRouteError } from "react-router-dom";

function Notfound() {
  const error = useRouteError();

  return (
    <>
      <h1>Not found</h1>
      {/* la traduction du code d'error: si on a une erreur, on affiche le
      message d'erreur, sinon on affiche une chaine vide. vu chez grafikard */}
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </>
  );
}

export default Notfound;
