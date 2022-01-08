import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faSkype,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react/cjs/react.development";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div class="nav-center">
        <div class="nav-header">
          {/* <img src="logo.png" class="logo" alt=""> */}
          <h2>Icon</h2>
          <button class="nav-toggle" onClick={toggleActive}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <ul class={!isActive ? "links" : "links show-links"}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <ul class="social-icons">
          <li>
            <a href="">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faSkype} />
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
