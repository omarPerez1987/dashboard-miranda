import { ContactInterface } from "./contactInterface";

export interface ContactsSliceInitialStateInterface {
  data: ContactInterface[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | undefined;
}
