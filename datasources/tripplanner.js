import { RESTDataSource } from "apollo-datasource-rest";

export class TripPlannerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://api.sl.se/api2/TravelplannerV3_1/`;
  }

  routeReducer({ Origin, Destination }) {
    return {
      origin_name: Origin.name,
      dest_name: Destination.name,
      start_time: Origin.time,
      end_time: Destination.time,
    };
  }

  tripReducer({ tripId, LegList, duration }) {
    const routes = LegList.Leg.map((route) => this.routeReducer(route));
    // TODO: tripId doesn't seem to be globally unique
    return { id: tripId, duration, routes };
  }

  async getTrip(originId, destId) {
    const result = await this.get(
      `trip.JSON?key=${process.env.TRIP_PLANNER_API_KEY}&originId=${originId}&destId=${destId}`
    );
    return result?.Trip?.map((trip) => this.tripReducer(trip));
  }
}
