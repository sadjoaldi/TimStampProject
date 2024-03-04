import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Clients from "./pages/Clients";
import Rapport from "./pages/Rapport";
import Settings from "./pages/Settings";
// import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "calendar",
            element: <Calendar />,
          },
          {
            path: "rapport",
            element: <Rapport />,
          },
          {
            path: "clients",
            element: <Clients />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
      {
        path: "profileSettings",
        element: <ProfileSettings />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
