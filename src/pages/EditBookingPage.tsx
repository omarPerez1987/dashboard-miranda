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
  getBookingsStatus,
  updateBooking,
} from "../features/bookings/bookingsSlices";
import { getRoomsAvailable } from "../features/rooms/roomsSlices";
import { useNavigate, useParams } from "react-router-dom";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import { RoomsInterface } from "../interfaces/rooms/roomsInterface";
import { BookingInterface } from "../interfaces/bookings/bookingsInterface";
import { AppDispatch, useAppSelector } from "../app/store";
import { getAllBookingsApiThunk, updateBookingApiThunk } from "../features/bookings/bookingsThunks";
import { getAllRoomsApiThunk } from "../features/rooms/roomsThunk";


const EditBookingPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const bookingsListData = useAppSelector<BookingInterface[]>(getBookingsData);
  const bookingsListStatus = useAppSelector<string>(getBookingsStatus);

  const [spinner, setSpinner] = useState<boolean>(true);
  const bookingListData = useAppSelector<BookingInterface[]>(getBookingsData);
  const roomsListAvailable =
    useAppSelector<RoomsInterface[]>(getRoomsAvailable);
  const { id } = useParams();
  const [availableRooms, setAvailableRooms] = useState<RoomsInterface[]>([]);

  const [booking, setBooking] = useState<BookingInterface>({
    _id: "",
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
    dataRoom: {
      _id: "",
      photo: "",
      room: "",
      bed: "",
      facilities: [],
      description: "",
      price: 0,
      discount: 0,
      cancel: "",
      status: "",
    },
  });

  useEffect(() => {
    if (bookingsListStatus === "idle") {
      dispatch(getAllBookingsApiThunk());
      dispatch(getAllRoomsApiThunk());
    } else if (bookingsListStatus === "pending") {
      setSpinner(true);
    } else if (bookingsListStatus === "fulfilled") {
      setSpinner(false);
    }
  }, [
    dispatch,
    bookingsListData,
    bookingsListStatus,
    roomsListAvailable,
    spinner
  ]);

  useEffect(() => {
    const searchBooking = bookingListData.find(
      (booking) => booking._id.toString() === id
    );

    if (searchBooking) {
      setBooking(searchBooking);
      setAvailableRooms(roomsListAvailable);
    }
  }, [bookingListData, id]);

  useEffect(() => {
    setBooking((prevBooking) => ({
      ...prevBooking,
      orderDate: format(new Date(), "dd/MM/yyyy"),
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await dispatch(updateBookingApiThunk({ body: booking }));
      toast.success("Reserva editada con éxito");
      navigate("/home/bookings");
    } catch (error) {
      toast.error("Error al editar la reserva");
    }
  };

  return (
    <MainStyled>
      <FormStyled onSubmit={handleSubmit}>
  
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
          value={`${format(new Date(), "dd/MM/yyyy")}`}
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
              <option value={rooms._id} key={rooms._id}>
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
