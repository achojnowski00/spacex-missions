import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

// Mui staff
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

const Header = () => {

  return (
    <header className="m-header">
      <div className="wrapper1280 m-header-wrap">

        <Link className="m-header__logo" to="/">
          <svg
            className="m-header__logo-svg"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="331.644px"
            height="40.825px"
            viewBox="0 0 331.644 40.825"
            fill="#000000"
          >
            <g>
              <path d="M77.292,15.094H49.249l-1.039,0.777v24.947h7.763v-9.355l0.741-0.664h20.579   c5.196,0,7.632-1.398,7.632-4.985v-5.728C84.924,16.493,82.489,15.094,77.292,15.094 M77.292,24.317   c0,1.69-1.118,2.041-3.554,2.041H56.799l-0.827-0.804V20.21l0.741-0.678h17.025c2.436,0,3.554,0.347,3.554,2.045V24.317z" />
              <polyline points="99.081,19.813 105.761,29.6 105.391,30.548 90.618,30.548 86.847,35.187 108.837,35.187 110.361,36.115 113.775,40.824 122.659,40.824 103.186,14.775" />
              <polyline points="187.418,35.757 187.418,28.833 188.217,28.143 203.079,28.143 203.079,23.734 179.524,23.734 179.524,40.823 214.27,40.823 214.27,36.435 188.252,36.435" />
              <rect x="179.524" y="15.094" width="35.113" height="4.848" />
              <path d="M140.361,19.685h28.288c-0.436-3.597-2.668-4.595-8.33-4.595H140.06c-6.389,0-8.427,1.247-8.427,6.082   v13.565c0,4.84,2.038,6.087,8.427,6.087h20.259c5.745,0,7.945-1.079,8.095-4.81h-28.053l-0.832-0.783V20.209" />
              <path d="M29.333,25.118H8.754l-0.606-0.667v-4.402l0.603-0.466h27.742l0.379-0.927   c-0.945-2.431-3.392-3.565-7.936-3.565H9.665c-6.385,0-8.426,1.247-8.426,6.082v2.844c0,4.841,2.041,6.086,8.426,6.086h20.533   l0.645,0.566v4.602l-0.526,0.718H6.83v-0.022H0.678c0,0-0.704,0.353-0.677,0.518c0.525,3.382,2.829,4.34,8.345,4.34h20.987   c6.384,0,8.486-1.247,8.486-6.087v-3.543C37.819,26.363,35.717,25.118,29.333,25.118" />
              <path d="M236.725,14.988h-11.551l-0.627,1.193l12.828,9.351c2.43-1.407,5.074-2.833,7.95-4.24" />
              <path d="M247.075,32.603l11.275,8.222h11.692l0.484-1.089L253.69,27.413   C251.454,29.054,249.245,30.787,247.075,32.603" />
              <path d="M235.006,40.806h-10.451l-0.883-1.383C230.778,32.562,262.56,3.151,331.644,0   C331.644,0,273.658,1.956,235.006,40.806" />
            </g>
          </svg>

        </Link>
        <nav className="m-header__nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <Link className="nav__list-item-link" to="/">
                <HomeRoundedIcon className="nav__list-item-icon nav__list-item-icon--home" />
                <p className="nav__list-item-title">Home</p>
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__list-item-link" to="/launches">
                <RocketLaunchRoundedIcon className="nav__list-item-icon nav__list-item-icon--launches" />
                <p className="nav__list-item-title">Launches</p>
              </Link>
            </li>
            <li className="nav__list-item">
              <Link className="nav__list-item-link" to="/favorites">
                <FavoriteRoundedIcon className="nav__list-item-icon nav__list-item-icon--fav" />
                <p className="nav__list-item-title">Favorites</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;