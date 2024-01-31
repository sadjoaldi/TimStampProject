import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/home.scss";
import { Link } from "react-router-dom";

function Home() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
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
        <div>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
        </div>
      )}
      <div className="home_container">
        <h2>TimeStamp</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          molestias voluptas maxime incidunt quo consectetur dolore totam
          tempora vel a minima voluptatem perspiciatis beatae, veritatis, rerum
          error aliquid quos magnam architecto amet libero. Odit atque
          doloremque sunt beatae exercitationem! Laboriosam sunt ex impedit iure
          numquam itaque. Velit odio earum eos! Quasi laboriosam voluptas
          delectus excepturi corrupti cum modi quos fuga explicabo sapiente
          consectetur suscipit, ullam quia voluptate natus nulla eius
          perferendis ut reprehenderit dolorum vero ipsa, minus omnis aliquid!
          Enim?
        </p>
        <Link to="/connexion">
          <button type="button">
            {" "}
            <span>Start free tracking</span>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
