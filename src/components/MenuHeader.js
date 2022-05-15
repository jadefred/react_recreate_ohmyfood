import React from "react";
import "./css/menuHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function MenuHeader() {
  return (
    <>
      <header>
        <h1>ohmyfood</h1>
        <Link to={"/"}>
          <FontAwesomeIcon className="arrow-left" icon={["fa", "arrow-left"]} />
        </Link>
      </header>
    </>
  );
}

export default MenuHeader;
