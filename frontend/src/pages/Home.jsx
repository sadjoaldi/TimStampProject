import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineLogin } from "react-icons/md";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import hibouforet from "../assets/hibou_foret.jpg";

function Home() {
  const [menuBurger, setMenuBurger] = useState(false);
  const handleClick = () => {
    setMenuBurger(!menuBurger);
  };

  return (
    <section>
      <h1>TimeStamp</h1>
      {menuBurger ? (
        <AiOutlineClose className="icon" onClick={handleClick} />
      ) : (
        <HiOutlineMenuAlt1 className="icon" onClick={handleClick} />
      )}

      {menuBurger && (
        <ul>
          <li>
            Login
            <Link to="/connexion">
              <MdOutlineLogin />{" "}
            </Link>
          </li>
        </ul>
      )}
      <div className="home">
        <div className="home_container">
          <h2>TimeStamp</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            molestias voluptas maxime incidunt quo consectetur dolore totam
            tempora vel a minima voluptatem perspiciatis beatae, veritatis,
            rerum error aliquid quos magnam architecto amet libero. Odit atque
            doloremque sunt beatae exercitationem! Laboriosam sunt ex impedit
            iure numquam itaque. Velit odio earum eos! Quasi laboriosam voluptas
            delectus excepturi corrupti cum modi quos fuga explicabo sapiente
            consectetur suscipit, ullam quia voluptate natus nulla eius
            perferendis ut reprehenderit dolorum vero ipsa, minus omnis aliquid!
            Enim?
          </p>
          <Link to="/inscription">
            <button type="button">
              {" "}
              <span>Start free tracking</span>
            </button>
          </Link>
        </div>
        <div className="picture">
          <img src={hibouforet} alt="hibou en foret" />
        </div>
      </div>
    </section>
  );
}

export default Home;
