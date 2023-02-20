import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      details
      links {
        flickr_images
      }
      launch_date_utc
    }
  }
`;

export const GET_SINGLE_LAUNCH = gql`
  query GetSingleLaunch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      links {
        flickr_images
      }
      launch_date_utc
    }
  }
`;
