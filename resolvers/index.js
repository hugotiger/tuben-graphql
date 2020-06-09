export const resolvers = {
  Query: {
    stationsByName: (_, { name }, { dataSources }) =>
      dataSources.locationsearch.getStationsByName(name),
    searchTrips: (_, { originId, destId }, { dataSources }) =>
      dataSources.tripplanner.getTrip(originId, destId),
  },
};
