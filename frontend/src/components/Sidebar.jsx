import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TfiTimer } from "react-icons/tfi";
import { TbChartInfographic } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { GrUserSettings } from "react-icons/gr";
import iconsProf from "../assets";
import "../styles/sidebar.scss";
import Logout from "../pages/Logout";

// sidebar links
const navLinks = [
  {
    id: 1,
    title: "Timer",
    img: <TfiTimer />,
    url: "calendar",
  },
  {
    id: 2,
    title: "Rapport",
    img: <TbChartInfographic />,
    url: "rapport",
  },
  {
    id: 3,
    title: "Clients",
    img: <FaCircleUser />,
    url: "clients",
  },
  {
    id: 4,
    title: "Settings",
    img: <GrUserSettings />,
    url: "settings",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="profile_box">
          <NavLink to="/profile" className="profile_link">
            <img src={iconsProf.profAvatar} alt="Avatar" width="100px" />
          </NavLink>
          <div className="describ">
            <span className="flname">Jason D Ronson</span>
            <span className="work">
              {" "}
              <strong>Supervisor</strong>{" "}
            </span>
          </div>
        </div>
      </div>

      <nav>
        <ul className="navlist">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link to={`${navLink.url}`} className={`navlink ${navLink.url}`}>
                <span> {navLink.img}</span>
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="otherIcons">
        <FaQuestionCircle />
        <IoIosNotifications />
        <Logout />
      </div>
    </aside>
  );
}

export default Sidebar;
