import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/connexion.scss";

function Connexion() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value.toString(),
            password: passwordRef.current.value.toString(),
          }),
          credentials: "include", // Ajoutez cette ligne
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("authToken", data.token);
        navigate("/dashboard"); // or navigate to another page
      } else {
        console.info(response);
        // navigate("/connexion");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="form">
        <form action="" htmlFor="" onSubmit={handleLogin}>
          <h1>TimeStamp </h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="*"
            ref={emailRef}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*"
            ref={passwordRef}
          />
          <p className="reset">
            {" "}
            <Link to="/">Reset password</Link>
          </p>
          <button type="submit" id="button" onClick={handleLogin}>
            Continue to signup
          </button>{" "}
        </form>
      </div>
      <div />
    </>
  );
}

export default Connexion;
