import { UsersInterfaces } from "./usersInterfaces";

export interface UsersSliceInitialStateInterface {
  data: UsersInterfaces[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | undefined;
}
