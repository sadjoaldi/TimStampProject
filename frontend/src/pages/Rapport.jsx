import React from "react";
import { Outlet } from "react-router-dom";

function Rapport() {
  return (
    <>
      <h1>je suis un rapport</h1>
      <Outlet />
    </>
  );
}

export default Rapport;
