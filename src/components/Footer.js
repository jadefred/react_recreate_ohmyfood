import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
      <h3>ohmyfood</h3>
      <ul>
        <li>
          <a href="#0">
            <FontAwesomeIcon className="location-icon" icon={["fa", "utensils"]} />
            Proposer un restaurant
          </a>
        </li>
        <li>
          <a href="#0">
            <FontAwesomeIcon className="location-icon" icon={["fa", "handshake-angle"]} />
            Devenir partenaire
          </a>
        </li>
        <li>
          <a href="#0">Mentions légales</a>
        </li>
        <li>
          <a href="#0">Contact</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
