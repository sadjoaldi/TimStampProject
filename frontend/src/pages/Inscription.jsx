import React from "react";

function Inscription() {
  return (
    <>
      <form action="" htmlFor="">
        <h1>TimeStamp </h1>
        <label htmlFor="email">
          EMAIL
          <input type="email" name="email" id="email" />
        </label>{" "}
        <br />
        <label htmlFor="password">
          PASSWORD
          <input type="password" name="password" id="password" />
        </label>
        <button type="button">Continue to signup</button>
      </form>

      <span>Log in to an existing account</span>
    </>
  );
}

export default Inscription;
