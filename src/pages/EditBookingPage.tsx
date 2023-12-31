import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  ButtonFormStyled,
  FormStyled,
  InputFormStyled,
  LabelFormStyled,
  SelectFormStyled,
  TextAreaFormStyled,
} from "../componentsStyle/forms/FormStyled";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  getBookingsData,
  updateBooking,
} from "../features/bookings/bookingsSlices";
import { getRoomsAvailable } from "../features/rooms/roomsSlices";
import { useNavigate, useParams } from "react-router-dom";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import { RoomsInterface } from "../interfaces/rooms/roomsInterface";
import { BookingInterface } from "../interfaces/bookings/bookingsInterface";
import { AppDispatch, useAppSelector } from "../app/store";

const EditBookingPage = () => {
  const navigate = useNavigate();
  const bookingListData = useAppSelector<BookingInterface[]>(getBookingsData);
  const roomsListAvailable =
    useAppSelector<RoomsInterface[]>(getRoomsAvailable);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const [availableRooms, setAvailableRooms] = useState<RoomsInterface[]>([]);

  const [booking, setBooking] = useState<BookingInterface>({
    id: "",
    name: "",
    orderDate: "",
    orderTime: "",
    checkin: "",
    checkinTime: "",
    checkout: "",
    checkoutTime: "",
    notes: "",
    idRoom: "",
    check: "",
    photo: "",
    room: "",
    price: 0,
    description: "",
    facilities: [],
    status: "",
  });

  useEffect(() => {
    const searchBooking = bookingListData.find(
      (booking) => booking.id.toString() === id
    );

    if (searchBooking) {
      setBooking(searchBooking);
      setAvailableRooms(roomsListAvailable);
    }
  }, [bookingListData, id]);

  useEffect(() => {
    setBooking((prevBooking) => ({
      ...prevBooking,
      orderDate: format(new Date(), "dd-MMM-yyyy"),
      orderTime: format(new Date(), "hh:mm aa"),
    }));
  }, [bookingListData]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(updateBooking(booking));
    toast.success("Reserva editada exitosamente");
    navigate("/home/bookings");
  };

  return (
    <MainStyled>
      <FormStyled onSubmit={handleSubmit}>
        <LabelFormStyled>Id</LabelFormStyled>
        <InputFormStyled
          type="text"
          name="id"
          value={booking.id}
          onChange={handleChange}
          readOnly
        />

        <LabelFormStyled>Name and Surname</LabelFormStyled>
        <InputFormStyled
          type="text"
          name="name"
          value={booking.name}
          onChange={handleChange}
          required
        />

        <LabelFormStyled>Order Date / {booking.orderDate}</LabelFormStyled>
        <InputFormStyled
          type="text"
          name="orderDate"
          value={`${format(new Date(), "dd-MMM-yyyy")}`}
          onChange={handleChange}
          readOnly
        />
        <LabelFormStyled>Order Time / {booking.orderTime}</LabelFormStyled>
        <InputFormStyled
          type="text"
          name="orderTime"
          value={booking.orderTime}
          onChange={handleChange}
          readOnly
        />

        <LabelFormStyled>Check In / {booking.checkin}</LabelFormStyled>
        <InputFormStyled
          type="date"
          name="checkin"
          value={booking.checkin}
          onChange={handleChange}
          required
        />

        <LabelFormStyled>Check In Time / {booking.checkinTime}</LabelFormStyled>
        <InputFormStyled
          type="time"
          name="checkinTime"
          value={booking.checkinTime}
          onChange={handleChange}
          required
        />

        <LabelFormStyled>Check Out / {booking.checkout}</LabelFormStyled>
        <InputFormStyled
          type="date"
          name="checkout"
          value={booking.checkout}
          onChange={handleChange}
          required
        />

        <LabelFormStyled>
          Check Out Time / {booking.checkoutTime}
        </LabelFormStyled>
        <InputFormStyled
          type="time"
          name="checkoutTime"
          value={booking.checkoutTime}
          onChange={handleChange}
          required
        />

        <LabelFormStyled>Special Request</LabelFormStyled>
        <TextAreaFormStyled
          placeholder="Special Request..."
          name="notes"
          value={booking.notes}
          onChange={handleChange}
        />

        <LabelFormStyled>Rooms Available</LabelFormStyled>
        <SelectFormStyled
          name="idRoom"
          value={booking.idRoom}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a room available
          </option>
          {availableRooms &&
            availableRooms.map((rooms) => (
              <option value={rooms.id} key={rooms.id}>
                {rooms.room}, ({rooms.bed})
              </option>
            ))}
        </SelectFormStyled>

        <LabelFormStyled>Status</LabelFormStyled>
        <SelectFormStyled
          name="check"
          value={booking.check}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Status
          </option>
          <option value="in">Check In</option>
          <option value="out">Check Out</option>
          <option value="pending">Pending</option>
        </SelectFormStyled>

        <ButtonFormStyled type="submit">Editar</ButtonFormStyled>
      </FormStyled>
    </MainStyled>
  );
};

export default EditBookingPage;
