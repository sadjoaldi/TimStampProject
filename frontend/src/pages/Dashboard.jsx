import React from "react";
// import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Calendar from "./Calendar";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Calendar />
    </div>
  );
}

export default Dashboard;
