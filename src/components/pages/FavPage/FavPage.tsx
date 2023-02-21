import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { client } from "../../../App";
import { gql } from "@apollo/client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// import "./FavPage.scss";

// Components
import SingleLaunch from "../../partial/SingleLaunch/SingleLaunch";
import Modal from "../../modules/Modal/Modal";
import NoFavorites from "../../modules/NoFavorites/NoFavorites";

// Queries
import { GET_SINGLE_LAUNCH } from "../../../GraphQL/queries";

const FavPage = () => {
  const FAV_LAUNCHES = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ).reverse();
  const launches_objects: string[] = [];
  const [idOfPopup, setIdOfPopup] = useState("");

  const getLaunches = () => {
    FAV_LAUNCHES.forEach((launch: string) => {
      const { data } = useQuery(GET_SINGLE_LAUNCH, {
        client,
        variables: {
          id: launch,
        },
      });
      launches_objects.push(data);
    });
  };

  getLaunches();

  const handleCloseModal = () => {
    setIdOfPopup("");
  };

  return (
    <div className="p-favPage">
      <div className="wrapper1080">
        {idOfPopup && <Modal id={idOfPopup} closeModal={handleCloseModal} />}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 576: 2, 992: 3 }}>
          <Masonry>
            {launches_objects.length > 0 &&
              launches_objects.map((item: any) => {
                if (item) {
                  console.log(item.launch.id);
                  return (
                    <>
                      <SingleLaunch
                        key={item.launch.id}
                        id={item.launch.id}
                        mission_name={item.launch.mission_name}
                        links={item.launch.links}
                        details={item.launch.details}
                        launch_date_utc={item.launch.launch_date_utc}
                        setId={setIdOfPopup}
                      />
                    </>
                  );
                }
              })}
            {launches_objects.length === 0 && <NoFavorites />}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default FavPage;
