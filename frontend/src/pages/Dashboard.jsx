import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.scss";

function Dashboard() {
  return (
    <div className="dash_container">
      <div className="side">
        <Sidebar />
      </div>
      <div className="dashBox">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
