import { LocationSearchAPI } from "./locationsearch";
import { TripPlannerAPI } from "./tripplanner";

export default {
  locationsearch: new LocationSearchAPI(),
  tripplanner: new TripPlannerAPI(),
};
