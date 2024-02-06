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
        path: "dashboard",
        element: <Dashboard />,
      },

      // {
      //   path: "/summary",
      //    element: <Summary />,
      // },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      // {
      //   path: "/clients",
      //   element: <Profile />,
      // },
      // {
      //   path: "/settings",
      //   // element: <Settings />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
