import React from "react";
import { Link } from "react-router-dom";
import astronaut from "../../../assets/astronaut.svg";

import "./NoFavorites.scss";

const NoFavorites = () => {
  return (
    <div className="m-noFav">
      <div className="m-noFav__container">
        <section className="m-noFav__text">
          <p className="m-noFav__title">
            It seems that you don't have any favorite launches yet.
          </p>
          <p className="m-noFav__subtitle">
            Go ahead, explore the space and find some interesting flights.
          </p>
        </section>
        <section className="m-noFav__img">
          <img src={astronaut} alt="" />
        </section>
      </div>
      <Link
        className="p-homePage__button p-homePage__button--inverted"
        to="/launches"
      >
        <div className="p-homePage__button-text">Take me to launches</div>
      </Link>
    </div>
  );
};

export default NoFavorites;
