import { RoomsInterface } from "../rooms/roomsInterface";

export interface BookingInterface {
  name: string;
  id: string;
  orderDate: string;
  orderTime: string;
  checkin: string;
  checkinTime: string;
  checkout: string;
  checkoutTime: string;
  notes: string;
  idRoom: string;
  check: string;
}

export interface BookingDetailsInterface {
  room: RoomsInterface;
  booking: BookingInterface;
}
