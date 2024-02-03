import React from "react";
import Sidebar from "../components/Sidebar";
import Calendar from "../components/Calendar";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <h1>Je suis le dashboard</h1>
      <Calendar />
    </div>
  );
}

export default Dashboard;
