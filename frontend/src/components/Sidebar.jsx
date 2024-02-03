import React from "react";
import { Link } from "react-router-dom";
import timestamp from "../assets/timestampLogo.png";
import "../styles/sidebar.scss";
import navLinks from "../Data/Data";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_info">
        <div className="info_img img_fit_cover">
          <img src={timestamp} alt="" />
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
    </aside>
  );
}

export default Sidebar;
