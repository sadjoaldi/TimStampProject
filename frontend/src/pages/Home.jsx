import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/home.scss";

function Home() {
  return (
    <section>
      {/* <img src={logo} alt="logo du site" /> */}
      <h1>TimeStamp</h1>
      <AiOutlineClose className="icon" />
      <HiOutlineMenuAlt1 className="icon" />
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
        <button type="button">
          {" "}
          <span>Start free tracking</span>
        </button>
      </div>
    </section>
  );
}

export default Home;
