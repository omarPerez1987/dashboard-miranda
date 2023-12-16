import { BookingInterface } from "../bookings/bookingsInterface";
import { ContactInterface } from "../contact/contactInterface";
import { RoomsInterface } from "../rooms/roomsInterface";
import { UsersInterfaces } from "../users/usersInterfaces";

export interface TopMenuProps {
  hiddenMenu: () => void;
  menuOpen: boolean;
  title: string;
}

export interface KpisCardProps {
  Icon: React.ElementType;
  number: number;
  text: string;
}

export interface ModalEditAdminProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalNotesBookingsProps {
  notes: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalReviewsProps {
  review: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface OrderTableBookingsProps {
  setStateStatus: (status: string) => void;
  setSelectFooter: (value: string) => void;
}

export interface OrderTableContactsProps {
  setArchived: React.Dispatch<React.SetStateAction<boolean>>;
  setNewest: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface TableContactProps {
  contacts: ContactInterface[]
}


export interface OrderTableRoomsProps {
  setStateStatus: (status: string) => void;
  setNewest: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TableRoomsProps {
  rooms: RoomsInterface[]
}
export interface OrderTableUsersProps {
  setStateStatus: (status: string) => void;
  setNewest: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TableUsersProps {
  users: UsersInterfaces[]
}

export interface FooterTableProps {
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
  numberOfItems: number;
}