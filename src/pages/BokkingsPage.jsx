import React, { useEffect, useState } from "react";
import OrderTableBookings from "../components/tables/Bokkings/OrderTableBookings";
import TableBookings from "../components/tables/Bokkings/TableBookings";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FooterTable from "../components/tables/FooterTable";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookingsData,
  getBookingsError,
  getBookingsStatus,
  mixBookingAndRoom,
} from "../features/bookings/bookingsSlices";
import { getBookingsListThunk } from "../features/bookings/bookingsThunks";
import { getRoomsData, getRoomsStatus } from "../features/rooms/roomsSlices";
import { getRoomsListApiThunk } from "../features/rooms/roomsThunk";

const BokkingsPage = () => {
  const dispatch = useDispatch();
  const bookingsListData = useSelector(getBookingsData);
  const bookingsListStatus = useSelector(getBookingsStatus);
  const bookingsListError = useSelector(getBookingsError);
  const roomsListData = useSelector(getRoomsData);
  const roomsListStatus = useSelector(getRoomsStatus);
  const [bookings, setBookings] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const bookingAndRoom = () => {
    const dataMix = [];
    for (let i = 0; i < bookingsListData.length; i++) {
      const booking = bookingsListData[i];
      for (let j = 0; j < roomsListData.length; j++) {
        const room = roomsListData[j];
        if (booking.idRoom === room.id) {
          dataMix.push({ ...booking, ...room });
        }
      }
    }
    return dataMix;
  };

  useEffect(() => {
    if (bookingsListStatus && roomsListStatus === "idle") {
      dispatch(getBookingsListThunk());
      dispatch(getRoomsListApiThunk());
    } else if (bookingsListStatus === "pending") {
      setSpinner(true);
    } else if (bookingsListStatus && roomsListStatus === "fulfilled") {
      dispatch(mixBookingAndRoom(bookingAndRoom()));
      setSpinner(false);
    }
  }, [bookingsListStatus]);

  useEffect(() => {
    setBookings(bookingsListData);
  }, [bookingsListData]);

  return (
    <MainStyled>
      {bookingsListError ? (
        <h1>Hubo un error al obtener los datos de los usuarios</h1>
      ) : (
        <>
          <OrderTableBookings />
          {spinner ? (
            <h1>Loading...</h1>
          ) : (
            <TableBookings bookings={bookings} />
          )}
          <FooterTable />
        </>
      )}
    </MainStyled>
  );
};

export default BokkingsPage;
