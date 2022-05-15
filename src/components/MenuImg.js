import React from "react";
import "./css/menuHeader.css";

function MenuImg(props) {
  return (
    <>
      <div className="banner">
        <img src={require(`../assets/restaurants/${props.restaurant.img}`)} alt={props.restaurant.name} />
      </div>
    </>
  );
}

export default MenuImg;
