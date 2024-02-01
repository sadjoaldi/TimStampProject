import React from "react";
import "../styles/inscription.scss";
import { Link } from "react-router-dom";

function Connexion() {
  return (
    <>
      <div className="form">
        <form action="" htmlFor="">
          <h1>TimeStamp </h1>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="*" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*"
          />
          <p className="reset">
            {" "}
            <Link to="/">Reset password</Link>
          </p>
          <button type="button" id="button">
            Continue to signup
          </button>{" "}
        </form>
      </div>
      <div />
    </>
  );
}

export default Connexion;
