import { RoomsInterface } from "../rooms/roomsInterface";

export interface BookingInterface {
  _id: string;
  name: string;
  orderDate: string;
  orderTime: string;
  checkin: string;
  checkinTime: string;
  checkout: string;
  checkoutTime: string;
  notes: string;
  dataRoom: RoomsInterface
  idRoom: string;
  check: string;
}
