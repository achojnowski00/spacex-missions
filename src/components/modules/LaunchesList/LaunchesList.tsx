import React, { useEffect, useState } from "react";
import { client } from "../../../App";
import { useQuery } from "@apollo/client";
import "./LaunchesList.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// types
import { Launch } from "../../../Types/Types";

// queries
import { GET_LAUNCHES } from "../../../GraphQL/queries";

// components
import SingleLaunch from "../../partial/SingleLaunch/SingleLaunch";
import Modal from "../Modal/Modal";
import Loading from "../../partial/Loading/Loading";

const LaunchesList = () => {
  const [page, setPage] = useState(0);
  const [launchesPerPage, setLaunchesPerPage] = useState(10);

  const [endOf, setEndOf] = useState(false);

  const [idOfPopup, setIdOfPopup] = useState("");

  const { loading, error, data, fetchMore } = useQuery(GET_LAUNCHES, {
    client,
    variables: {
      limit: launchesPerPage,
    },
  });

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        limit: data.launches.length + launchesPerPage,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (
          fetchMoreResult.launches.length - prev.launches.length <
          launchesPerPage
        ) {
          setEndOf(true);
        }
        return fetchMoreResult;
      },
    });
  };

  const handleCloseModal = () => {
    setIdOfPopup("");
  };

  if (loading)
    return (
      <div className="wrapper1080">
        <Loading />
      </div>
    );

  if (error) return <p className="wrapper1080">Something went wrong</p>;

  return (
    <div className="wrapper1080 m-launchesList">
      {idOfPopup && <Modal id={idOfPopup} closeModal={handleCloseModal} />}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 576: 2, 992: 3 }}>
        <Masonry>
          {data &&
            data.launches.map((launch: Launch) => {
              return (
                <SingleLaunch
                  key={launch.id}
                  id={launch.id}
                  mission_name={launch.mission_name}
                  links={launch.links}
                  details={launch.details}
                  launch_date_utc={launch.launch_date_utc}
                  setId={setIdOfPopup}
                />
              );
            })}
        </Masonry>
      </ResponsiveMasonry>
      {!endOf && (
        <button className="m-launchesList__btn" onClick={handleFetchMore}>
          I want to see more
        </button>
      )}
    </div>
  );
};

export default LaunchesList;
