import React from "react";
import { client } from "../../../App";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const Header = () => {
  const [page, setPage] = React.useState(1);
  const [launchesPerPage, setLaunchesPerPage] = React.useState(10);

  const { loading, error, data } = useQuery(gql`
      query GetLaunches($limit: Int, $offset: Int) {
        launches(limit: $limit, offset: $offset) {
          id
          mission_name
        }
      }
    `, {
    variables: {
      limit: launchesPerPage * page,
      offset: (page - 1) * launchesPerPage
    }
  });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data && data.launches.map((launch: any) => (
        <div key={launch.id}>
          <p>{launch.mission_name}</p>
        </div>
      )
      )}
      {data && console.log(data)}
      <button onClick={() => setPage(page - 1)}>Prev Page</button>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
      <h1>Header</h1>
    </div>
  );
}

export default Header;