import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    stationsByName(name: String!): [Station!]!
    searchTrips(originId: String!, destId: String!): [Trip!]!
  }
  type Station {
    id: ID!
    name: String!
    location: String
  }
  type Trip {
    id: ID!
    duration: String!
    routes: [Route!]
  }
  type Route {
    origin_name: String!
    dest_name: String!
    start_time: String!
    end_time: String!
  }
`;
