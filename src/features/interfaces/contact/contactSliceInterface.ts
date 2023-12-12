import { ContactInterface } from "./contactInterface";

export const statusOptions = <const>[
  "fulfilled",
  "rejected",
  "idle",
  "pending",
];

export interface ContactsSliceInitialStateInterface {
  data: ContactInterface[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | undefined;
}
