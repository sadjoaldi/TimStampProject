import React from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import timestamp from "../assets/timestampLogo.png";
import "../styles/sidebar.scss";
import navLinks from "../Data/Data";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_info">
        <div className="info_img img_fit_cover">
          <img src={timestamp} alt="" width="200px" />
        </div>
        <span>Jason D Ronson</span>
      </div>
      <nav>
        <ul className="navlist">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link to="/" className={`navlink ${navLink.url}`}>
                {navLink.icon} {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="profile-content">
        <div className="profile">
          <div className="profile-details">
            <img src="" alt="Avatar" />
            <div className="name-job">
              <p className="name">Jason D Ronson</p>
              <p className="job"> Supervisor</p>
            </div>
          </div>
          <BiLogOut className="logout-icon" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
