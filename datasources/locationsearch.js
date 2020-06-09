import { RESTDataSource } from "apollo-datasource-rest";
import { separateNameAndLocation } from "../helpers";

const MAX_RESULTS = 20;

export class LocationSearchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api.sl.se/api2/`;
  }

  locationReducer({ SiteId, Name }) {
    const { name, location } = separateNameAndLocation(Name);
    return { id: SiteId, name, location };
  }

  async getStationsByName(searchString) {
    const result = await this.get(
      `typeahead.JSON?key=${process.env.LOCATION_SEARCH_API_KEY}&maxresults=${MAX_RESULTS}&searchstring=${searchString}`
    );
    return result?.ResponseData?.map((location) =>
      this.locationReducer(location)
    );
  }
}
