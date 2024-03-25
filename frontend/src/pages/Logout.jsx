import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../styles/logout.scss";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie =
      "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  return (
    <button className="logoutBtn" type="submit" onClick={handleLogout}>
      <MdLogout /> Se déconnecter
    </button>
  );
}

export default Logout;
