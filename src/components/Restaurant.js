import React from "react";
import "./css/restaurant.css";

//import local images
import laPaletteDuGout from "../assets/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg";
import laNoteEnchantee from "../assets/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg";
import aLaFrancaise from "../assets/restaurants/toa-heftiba-DQKerTsQwi0-unsplash.jpg";
import leDeliceDesSens from "../assets/restaurants/louis-hansel-shotsoflouis-qNBGVyOCY8Q-unsplash.jpg";

function Restaurant() {
  return (
    <section className="restaurant">
      <h2>Restaurants</h2>
      <div className="cards-box">
        <div className="restaurant-card">
          <a href="la_palette_du_gout.html">
            <div className="card__new-tag">Nouveau</div>
            <img src={laPaletteDuGout} alt="la palette du gôut" />
            <div className="card__info-and-heart">
              <div>
                <h3>La palette du gôut</h3>
                <p>Ménilmontant</p>
              </div>
              <i className="fa-regular fa-heart"></i>
            </div>
          </a>
        </div>

        <div className="restaurant-card">
          <a href="la_note_enchantee.html">
            <div className="card__new-tag">Nouveau</div>
            <img src={laNoteEnchantee} alt="la note enchantée" />
            <div className="card__info-and-heart">
              <div>
                <h3>La note enchantée</h3>
                <p>Charonne</p>
              </div>
              <i className="fa-regular fa-heart"></i>
            </div>
          </a>
        </div>

        <div className="restaurant-card">
          <a href="a_la_francaise.html">
            <img src={aLaFrancaise} alt="à la française" />
            <div className="card__info-and-heart">
              <div>
                <h3>À la française</h3>
                <p>Cité Rouge</p>
              </div>
              <i className="fa-regular fa-heart"></i>
            </div>
          </a>
        </div>

        <div className="restaurant-card">
          <a href="le_delice_des_sens.html">
            <img src={leDeliceDesSens} alt="le délice des sens" />
            <div className="card__info-and-heart">
              <div>
                <h3>Le délice des sens</h3>
                <p>Folie-Méricourt</p>
              </div>
              <i className="fa-regular fa-heart"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Restaurant;
