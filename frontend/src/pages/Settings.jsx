import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { SiGooglecalendar } from "react-icons/si";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import Cookies from "js-cookie";

// import getCookies from "js-cookie";
// Import the getCookie function from the cookies module with the correct file extension
import profileAvatar from "../assets/profileAvatar.jpg";
import "../styles/settings.scss";

function getCookie(cookieName) {
  return Cookies.get(cookieName);
}

function Settings() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // ...

  useEffect(() => {
    const token = getCookie("authToken"); // Use the getCookie function
    const decodedToken = jwtDecode(token);
    setUserName(decodedToken.name);
    setUserEmail(decodedToken.email);
  }, []);
  return (
    <>
      <div className="profilInfo">
        <picture>
          <img src={profileAvatar} alt="" />
        </picture>
        <div className="borderTop" />
        <div className="infoContent">
          <p>{userName}</p>
          <p>{userEmail} </p>
          <button type="button">Button settings</button>
        </div>
      </div>
      <div className="calendar">
        <div className="instruction_box">
          <div className="text_content">
            <h3>External calendars</h3>
            <p>
              Connect your external calendars to see all your events in one
              place.{" "}
            </p>
          </div>

          <button type="button">Go to calendar</button>
        </div>
        <div className="butin" />
        <div className="xampl">
          <div className="google">
            <SiGooglecalendar />
            <p>
              google calendar <span>connect</span>
            </p>
          </div>
          <div className="outlook">
            <PiMicrosoftOutlookLogo />
            <p>
              outlook calendar <span>connect</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
