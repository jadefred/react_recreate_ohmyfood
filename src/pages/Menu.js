import React from "react";
import { useParams } from "react-router-dom";
import { restaurantList } from "../assets/data/restaurantList";

//component
import MenuHeader from "../components/MenuHeader";

function Menu() {
  const { name } = useParams();
  const selectedRestaurant = restaurantList.filter((i) => i.name.toLowerCase().split(" ").join("-") === name);

  return (
    <>
      <MenuHeader restaurant={selectedRestaurant[0]} />
    </>
  );
}

export default Menu;
