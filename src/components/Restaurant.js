import React from "react";
import "./css/restaurant.css";
import { restaurantList } from "../assets/data/restaurantList";

function Restaurant() {
  return (
    <section className="restaurant">
      <h2>Restaurants</h2>
      <div className="cards-box">
        {/*map out all restaurants dynamically*/}
        {restaurantList.map((resto) => {
          return (
            <div className="restaurant-card" key={resto.id}>
              <a href="la_palette_du_gout.html">
                {/*see if it's a new restaurant, if so, add tag*/}
                {resto.isNew ? <div className="card__new-tag">Nouveau</div> : ""}
                <img src={require(`../assets/restaurants/${resto.img}`)} alt={resto.name} />
                <div className="card__info-and-heart">
                  <div>
                    <h3>{resto.name}</h3>
                    <p>{resto.city}</p>
                  </div>
                  <i className="fa-regular fa-heart"></i>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Restaurant;
