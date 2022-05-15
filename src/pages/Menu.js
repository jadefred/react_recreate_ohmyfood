import React from "react";
import { useParams } from "react-router-dom";
import { restaurantList } from "../assets/data/restaurantList";

//component
import MenuHeader from "../components/MenuHeader";
import MenuImg from "../components/MenuImg";
import MenuDisplay from "../components/MenuDisplay";

function Menu() {
  //get restaurant name by searching params
  const { name } = useParams();
  //filter the selected restaurant and pass it to children elements as props
  const selectedRestaurant = restaurantList.filter((i) => i.name.toLowerCase().split(" ").join("-") === name);

  return (
    <>
      <MenuHeader />
      <MenuImg restaurant={selectedRestaurant[0]} />
      <MenuDisplay restaurant={selectedRestaurant[0]} />
    </>
  );
}

export default Menu;
