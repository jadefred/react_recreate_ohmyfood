import React from "react";
import "./css/menuBackground.css";
import Entrees from "./Entrees";
import Plats from "./Plats";
import Desserts from "./Desserts";

function MenuBackground(props) {
  return (
    <>
      <main>
        <div className="name-and-heart">
          <h2>{props.restaurant.name}</h2>
          <i className="fa-regular fa-heart"></i>
        </div>

        <section className="menu">
          <Entrees dishes={props.restaurant.menus} />
          <Plats dishes={props.restaurant.menus} />
          <Desserts dishes={props.restaurant.menus} />
        </section>
      </main>
    </>
  );
}

export default MenuBackground;
