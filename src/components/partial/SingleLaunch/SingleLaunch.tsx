import React, { useEffect, useState, useRef } from "react";
import { formatDistance } from "date-fns";
import "./SingleLaunch.scss";

// types
import { Launch } from "../../../Types/Types";

// Mui stuff
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const SingleLaunch = ({
  id,
  mission_name,
  links,
  details,
  launch_date_utc,
  setId,
}: Launch) => {
  const [isInFavorite, setIsInFavorite] = useState(
    checkIfLaunchIsInFavorites()
  );
  const [image, setImage] = useState("");
  const favIcon = useRef<HTMLDivElement>(null);

  function checkIfLaunchIsInFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.includes(id);
  }

  const handleSwitchFavoriteState = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(id)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((favorite: string) => favorite !== id))
      );
      setIsInFavorite(false);
      return;
    }

    localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
    setIsInFavorite(true);
  };

  const handleSetId = (e: Event) => {
    if (favIcon.current?.contains(e.target as Node)) {
      return;
    }
    setId(id);
  };

  useEffect(() => {
    setImage(
      links.flickr_images[
        Math.floor(Math.random() * links.flickr_images.length)
      ]
    );
  }, []);

  return (
    <div
      onClick={(e: any) => {
        handleSetId(e);
      }}
      className="pr-singleLaunch"
    >
      <section className="pr-singleLaunch__section">
        <h2 className="pr-singleLaunch__title">{mission_name}</h2>
        <p className="pr-singleLaunch__date">
          {formatDistance(new Date(launch_date_utc), new Date(), {
            addSuffix: true,
          })}
        </p>
      </section>
      {links.flickr_images.length > 0 ? (
        <section className="pr-singleLaunch__section">
          <img
            loading="lazy"
            className="pr-singleLaunch__img"
            src={image}
            alt=""
          />
        </section>
      ) : (
        <section className="pr-singleLaunch__section">
          <p className="pr-singleLaunch__noImg">This mission has no image</p>
        </section>
      )}

      <div
        className="pr-singleLaunch__favBtn"
        onClick={handleSwitchFavoriteState}
        ref={favIcon}
      >
        {isInFavorite ? (
          <FavoriteRoundedIcon className="pr-singleLaunch__favIcon pr-singleLaunch__favIcon--red" />
        ) : (
          <FavoriteBorderRoundedIcon className="pr-singleLaunch__favIcon" />
        )}
      </div>
    </div>
  );
};

export default SingleLaunch;
