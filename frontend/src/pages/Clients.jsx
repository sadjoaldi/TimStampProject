import React from "react";
import { Outlet } from "react-router-dom";

function Clients() {
  return (
    <>
      <h1>je suis un client</h1>
      <Outlet />
    </>
  );
}

export default Clients;
