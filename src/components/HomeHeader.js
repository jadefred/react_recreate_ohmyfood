import React from "react";
import "./css/homeHeader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeHeader() {
  return (
    <>
      <header>
        <h1>ohmyfood</h1>
        <div className="location">
          <FontAwesomeIcon className="location-icon" icon={["fa", "location-dot"]} />
          <input type="text" placeholder="Paris, Belleville" />
        </div>
      </header>

      <section className="intro">
        <h2>Réservez le menu qui vous convient</h2>
        <p>Découvrez des restaurants d'exception, séléctionnés par nos soins.</p>
        <button type="button">Explorer nos restaurants</button>
      </section>

      <section className="fonction">
        <h2>Fonctionnement</h2>
        <ul>
          <li>
            <div className="fonction__num">1</div>
            <i className="fa-solid fa-mobile-screen-button"></i>Choisissez un restaurant
          </li>
          <li>
            <div className="fonction__num">2</div>
            <i className="fa-solid fa-list-ul"></i>Composez votre menu
          </li>
          <li>
            <div className="fonction__num">3</div>
            <i className="fa-solid fa-store"></i>Dégustez au restaurant
          </li>
        </ul>
      </section>
    </>
  );
}

export default HomeHeader;
