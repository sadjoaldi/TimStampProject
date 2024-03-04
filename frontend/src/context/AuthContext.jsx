/* eslint-disable react/prop-types */
import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios"; // Assurez-vous d'installer axios avec `npm install axios` si vous ne l'avez pas déjà fait
import Cookies from "js-cookie";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = Cookies.get("userId");
    if (userId) {
      axios
        .get(`/api/users/${userId}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des informations de l'utilisateur :",
            error
          );
        });
    }
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
    console.info(newUser);
  };

  const authValue = useMemo(() => ({ user, updateUser }), [user]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
