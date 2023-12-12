import { UsersInterfaces } from "./usersInterfaces";

export const statusOptions = <const>[
  "fulfilled",
  "rejected",
  "idle",
  "pending",
];

export interface UsersSliceInitialStateInterface {
  data: UsersInterfaces[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | undefined;
}
