import React, { useRef, useState, useEffect } from "react";
import { client } from "../../../App";
import { useQuery } from "@apollo/client";
import "./Modal.scss";
import { formatDistance } from "date-fns";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mui stuff
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// Types
import { LaunchModal } from "../../../Types/Types";

// Queries
import { GET_SINGLE_LAUNCH } from "../../../GraphQL/queries";

// Components
import Loading from "../../partial/Loading/Loading";

const Modal = ({ id, closeModal }: LaunchModal) => {
  const modal = useRef<HTMLDivElement>(null);

  const { loading, error, data } = useQuery(GET_SINGLE_LAUNCH, {
    client,
    variables: {
      id,
    },
  });

  const { mission_name, launch_date_utc, links, details } = data?.launch || {};
  const { flickr_images } = links || [];

  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };

  return (
    <>
      <div onClick={closeModal} className="m-modal__background"></div>
      <div className="m-launchModal" ref={modal}>
        <div className="m-launchModal__close" onClick={closeModal}>
          <CloseRoundedIcon />
        </div>
        {loading && (
          <p className="m-launchModal__loading">
            <Loading />
          </p>
        )}
        {data && (
          <div className="m-launchModal__content">
            <div className="m-launchModal__title">{mission_name}</div>
            <div className="m-launchModal__date">
              {formatDistance(new Date(launch_date_utc), new Date(), {
                addSuffix: true,
              })}
            </div>
            <div className="m-launchModal__details">
              {details || "No details available"}
            </div>
            <div className="m-launchModal__images">
              <Slider {...settings}>
                {flickr_images.map((image: string) => (
                  <div key={image} className="m-launchModal__img">
                    <img src={image} alt={mission_name} />
                  </div>
                ))}
              </Slider>
            </div>

            {flickr_images.length === 0 && (
              <div className="m-launchModal__noImages">No images available</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
