import type { Destination } from "./Destination";
import type { Origin } from "./Origin";
import type { Stop } from "./Stop";
import type { Transportation } from "./Transportation";

export type Leg = {
  origin: Origin;
  destination: Destination;
  transportation: Transportation;
  stopSequence: Stop[];
};
