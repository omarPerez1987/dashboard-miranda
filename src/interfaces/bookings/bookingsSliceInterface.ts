import { BookingInterface } from "./bookingsInterface";

export interface BookingsSliceInitialStateInterface {
  data: BookingInterface[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | undefined;
}
