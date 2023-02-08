import React from 'react';
import "./NotFound.scss"
import { Link } from "react-router-dom";
import Rocket from "./Rocket.svg"

export default function NotFound() {
  return (
    <div className='p-NotFound'>
      <div className="NotFound__wrapper">
        <div className="NotFound__container">
          <img src={Rocket} />
        </div>
        <div className="NotFound__container">
          <p className="NotFound__text">Oops!</p>
          <p
            className="NotFound__text NotFound__text--big NotFound__text--blue"
          >
            404
          </p>
          <p
            className="NotFound__text NotFound__text--small"
          >
            Looks like you got lost in space!
          </p>
          <Link to="/">
            <button className="NotFound__button">Take me home!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}