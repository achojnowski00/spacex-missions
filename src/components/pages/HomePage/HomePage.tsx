import React from "react";
import { Link } from "react-router-dom";
import homeBg from "../../../assets/homeBG.jpg";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="p-homePage">
      <div className="wrapper1080">
        <div className="p-homePage__hero">
          <h1 className="p-homePage__hero-title">
            This is SpaceX's Launches app.
          </h1>
          <p className="p-homePage__hero-subtitle">
            Here you can find informations about SpaceX launches.
          </p>
        </div>
        <Link className="p-homePage__button" to="/launches">
          <div className="p-homePage__button-text">Take me to launches</div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
