import type { Leg } from "./Leg";

export type Journey = {
  tripDuration: number;
  interchanges: number;
  legs: Leg[];
};
