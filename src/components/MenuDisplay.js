import React from "react";
import "./css/menuDisplay.css";
import AllDishes from "./AllDishes";

function MenuDisplay(props) {
  return (
    <>
      <main>
        <div className="name-and-heart">
          <h2>{props.restaurant.name}</h2>
          <i className="fa-regular fa-heart"></i>
        </div>

        <section className="menu">
          <AllDishes dishes={props.restaurant.menus} />
        </section>

        <div className="button-box">
          <button type="button">Commander</button>
        </div>
      </main>
    </>
  );
}

export default MenuDisplay;
