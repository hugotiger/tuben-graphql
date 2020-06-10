import { gql } from "apollo-server";

// TODO: Nedan finns bra förslag på struktur och namnsättning!!!
//
// https://developer.transportapi.com/docs?raml=https://transportapi.com/v3/raml/transportapi.raml##uk_public_journey_from_from_to_to_json
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
    duration: Int!
    route_parts: [Route!]!
  }
  type Route {
    origin_name: String!
    dest_name: String!
    start_time: String!
    end_time: String!
    type: String!
    distance: String
  }
`;
