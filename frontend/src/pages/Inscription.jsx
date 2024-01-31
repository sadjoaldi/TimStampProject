import React from "react";
import "../styles/inscription.scss";
import { Link } from "react-router-dom";

function Inscription() {
  return (
    <div className="form">
      <form action="" htmlFor="">
        <h1>TimeStamp </h1>
        <label htmlFor="nom">Firstname</label>
        <input type="text" name="nom" id="nom" placeholder="*" />
        <label htmlFor="nom">Lastname</label>
        <input type="text" name="nom" id="nom" placeholder="*" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="*" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="*" />
        <label htmlFor="password">Confirm password</label>
        <input type="password" name="password" id="password" placeholder="*" />
        <button type="button">Continue to signup</button>{" "}
        <span>
          {" "}
          <Link to="/">Log in to an existing account</Link>
        </span>
      </form>
    </div>
  );
}

export default Inscription;
