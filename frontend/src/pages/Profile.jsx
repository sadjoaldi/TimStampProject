// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// import { Link } from "react-router-dom";
// // import profAvatar from "../assets/profileAvatar.jpg";

// function Profile() {
//   // // etat de l'utilisateur connecté
//   // const [user, setUser] = useState();
//   // // etat de l'ulisatuer qui a été mis à jour
//   // const [userUpdate, setUserUpdate] = useState(false);

//   // // fonction pour récupérer l'utilisateur connecté
//   // useEffect(() => {
//   //   const getProfileData = async () => {
//   //     try {
//   //       const { data } = await axios.get("api", {
//   //         Headers: {
//   //           Authorirization: `Bearer ${token}`,
//   //         },
//   //       });
//   //       setUser(data);
//   //       setUserUpdate(false);
//   //     } catch (error) {
//   //       console.info({ error });
//   //     }
//   //   };
//   // }, [token, userUpdate]);

//   return (
//     <div>
//       <div className="userProfile">
//         <div className="user_info">
//           <h1> User name</h1>
//           <p> User email</p>
//           <p> User role</p>
//           <p> Account date Create at: 03/02/2024</p>
//         </div>
//         <picture>{/* <img src={profAvatar} alt="avatar" /> */}</picture>
//       </div>
//       <Link to="/profileSettings">
//         <button type="button">Setting</button>
//       </Link>

//       <div className="external_calendar">
//         <h2>External Calendar optionnelle</h2>
//         <p>Connect your calendar to see your events in Timer</p>
//         <button type="button">Connect</button>
//       </div>
//       <div className="themes">
//         <form action="select">
//           <select name="elect" id="select">
//             <option value="system">System setting</option>
//             <option value="light">Light</option>
//             <option value="dark">Dark</option>
//           </select>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Profile;
