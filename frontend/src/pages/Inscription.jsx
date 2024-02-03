import React, { useEffect, useRef, useState } from "react";
import "../styles/inscription.scss";
import { Link, useNavigate } from "react-router-dom";

// Regex pour le mail et le mot de passe
const MAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!%_*?&-])[A-Za-z\d@!%_*?&-]{8,24}$/;

function Inscription() {
  // useRef() permet de récupérer la valeur d'un input
  const emailRef = useRef();
  const erreRef = useRef();
  const FirstnameRef = useRef();
  const LastnameRef = useRef();

  // useState() permet de gérer l'état d'un input
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errMgs, setErrMgs] = useState("");

  // useEffect() permet de gérer les effets de bord
  useEffect(() => {
    const result = MAIL_REGEX.test(email);
    setEmailValid(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setConfirmPassword(result);
  }, [password]);

  useEffect(() => {
    setErrMgs("");
  }, [email, password]);

  const buttonUpdate = () => {
    const button = document.getElementById("button");
    button.disabled = !confirmPassword;
    button.style.opacity = button.disabled ? 0.5 : 1;
  };
  useEffect(() => {
    buttonUpdate();
  }, [confirmPassword]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const mail = e.target.elements.email.value;
    // const pasword = e.target.elements.hashed_password.value;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value.toString(),
            password,
            firstName: FirstnameRef.current.value.toString(),
            lastName: LastnameRef.current.value.toString(),
            profile: "user",
          }),
        }
      );
      if (response.status === 201) {
        navigate("/");
      } else {
        console.info(response);
        // throw new Error("Erreur lors de l'inscription");
      }
      // Si l'inscription a réussi, redirigez l'utilisateur vers le tableau de bord

      // if (response.status === 201) {
      //   const userData = await response.json();

      //   const userResponse = await fetch(
      //     `${import.meta.env.VITE_BACKEND_URL}/api/users`,
      //     {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify({
      //         userId: userData.insertId,
      //         firstName: FirstnameRef.current.value.toString(),
      //         lastName: LastnameRef.current.value.toString(),
      //         email: emailRef.current.value.toString(),
      //       }),
      //     }
      //   );

      //   if (userResponse.status === 201) {
      //     navigate("/");
      //   } else {
      //     console.info(userResponse);
      //   }
      // } else {
      //   console.info(response);
      // }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <p
        ref={erreRef}
        className={errMgs ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMgs}
      </p>
      <div className="form" onSubmit={handleSubmit}>
        <form action="" htmlFor="">
          <h1>TimeStamp </h1>
          <label htmlFor="nom">Firstname</label>
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder="*"
            ref={FirstnameRef}
            required
            autoComplete="off"
          />
          <label htmlFor="nom">Lastname</label>
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder="*"
            ref={LastnameRef}
            required
            autoComplete="off"
          />
          <label htmlFor="email">Email</label>
          <span className={emailValid ? "valid" : "hide"}>Correcte</span>
          <span className={emailValid || !email ? "hide" : "invalid"}>
            Incorrecte
          </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="*"
            ref={emailRef}
            required
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            aria-invalid={emailValid ? "false" : "true"}
            aria-describedby="uidnote"
          />
          <p
            id="uidnote"
            className={
              emailFocus && email && !emailValid ? "instructions" : "offscreen"
            }
          >
            Doit contenir @ et .
          </p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*"
          />
          <label htmlFor="password">Confirm password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={confirmPassword ? "false" : "true"}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <p
            id="pwdnote"
            className={
              passwordFocus && !confirmPassword ? "instructions" : "offscreen"
            }
          >
            Un minimum de 8 caractères.
            <br />
            Doit inclure une lettre majuscule, un chiffre et un caractère
            special (@!%_*?&-).
            <br />
          </p>
          <button type="button" id="button">
            Continue to signup
          </button>{" "}
          <p>
            {" "}
            <Link to="/">Log in to an existing account</Link>
          </p>
        </form>
      </div>
    </>
  );
}

// export default Inscription;
// import React, { useState } from "react";

// function Inscription() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       console.info("Les mots de passe ne correspondent pas");
//       return;
//     }
//     try {
//       const response = await fetch("/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       if (!response.ok) {
//         throw new Error("Erreur lors de l'inscription");
//       }
//     } catch (error) {
//       console.error("Erreur lors de l'inscription", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         required
//       />
//       <button type="submit">S'inscrire</button>
//     </form>
//   );
// }

export default Inscription;
