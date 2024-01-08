import { RoomsInterface } from "./roomsInterface";

export interface RoomsSliceInitialStateInterface {
  data: RoomsInterface[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | undefined;
}
