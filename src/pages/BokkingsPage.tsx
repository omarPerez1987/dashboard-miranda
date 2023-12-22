import React, { useEffect, useState } from "react";
import OrderTableBookings from "../components/tables/Bokkings/OrderTableBookings";
import TableBookings from "../components/tables/Bokkings/TableBookings";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import { SpinnerStyled } from "../componentsStyle/general/SpinnerStyled";
import FooterTable from "../components/tables/FooterTable";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookingsData,
  getBookingsError,
  getBookingsStatus,
  getRoomsCheckIn,
  getRoomsCheckOut,
  getRoomsCheckPending,
} from "../features/bookings/bookingsSlices";
import { getBookingsListThunk } from "../features/bookings/bookingsThunks";
import { getRoomsData } from "../features/rooms/roomsSlices";
import { getRoomsListApiThunk } from "../features/rooms/roomsThunk";

const BokkingsPage = () => {
  const dispatch = useDispatch();
  const bookingsListData = useSelector(getBookingsData);
  const bookingsListCheckIn = useSelector(getRoomsCheckIn);
  const bookingsListCheckOut = useSelector(getRoomsCheckOut);
  const bookingsListPending = useSelector(getRoomsCheckPending);
  const bookingsListStatus = useSelector(getBookingsStatus);
  const bookingsListError = useSelector(getBookingsError);
  const roomsListData = useSelector(getRoomsData);
  const [spinner, setSpinner] = useState(true);

  const [stateStatus, setStateStatus] = useState("All");
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [selectFooter, setSelectFooter] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (bookingsListStatus === "idle") {
      dispatch(getBookingsListThunk());
      dispatch(getRoomsListApiThunk());
    } else if (bookingsListStatus === "pending") {
      setSpinner(true);
    } else if (bookingsListStatus === "fulfilled") {
      setRooms(roomsListData);
      switchBookingsList();
      setSpinner(false);
    }
  }, [
    dispatch,
    bookingsListData,
    bookingsListStatus,
    stateStatus,
    rooms,
  ]);

  const bookingAndRoom = (selectList) => {
    const combinedData = [];

    selectList.forEach((booking) => {
      const correspondingRoom = rooms.find(
        (room) => room.id === booking.idRoom
      );

      if (correspondingRoom) {
        combinedData.push({
          ...booking,
          room: correspondingRoom.room,
        });
      }
    });

    return combinedData;
  };

  const switchBookingsList = () => {
    switch (stateStatus) {
      case "All":
        setBookings(bookingAndRoom(bookingsListData));
        break;
      case "In":
        setBookings(bookingAndRoom(bookingsListCheckIn));
        break;
      case "Out":
        setBookings(bookingAndRoom(bookingsListCheckOut));
        break;
      case "Pending":
        setBookings(bookingAndRoom(bookingsListPending));
        break;
      default:
        break;
    }
  };

  const orderBookings = () => {
    switch (selectFooter) {
      case "date":
        const orderedBookingsDate = [...bookings];
        orderedBookingsDate.sort((a, b) => {
          const dateA = new Date(a.orderDate.split(".").reverse().join("-"));
          const dateB = new Date(b.orderDate.split(".").reverse().join("-"));
          return dateA - dateB;
        });
        return orderedBookingsDate;
      case "entryDate":
        const orderedBookingsCheckin = [...bookings];
        orderedBookingsCheckin.sort((a, b) => {
          const dateA = new Date(a.checkin.split(".").reverse().join("-"));
          const dateB = new Date(b.checkin.split(".").reverse().join("-"));
          return dateA - dateB;
        });
        return orderedBookingsCheckin;
      case "outDate":
        const orderedBookingsCheckOut = [...bookings];
        orderedBookingsCheckOut.sort((a, b) => {
          const dateA = new Date(a.checkout.split(".").reverse().join("-"));
          const dateB = new Date(b.checkout.split(".").reverse().join("-"));
          return dateA - dateB;
        });
        return orderedBookingsCheckOut;

      case "alpha":
        const orderedBookingsAlpha = [...bookings];
        orderedBookingsAlpha.sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
        return orderedBookingsAlpha;

      default:
        break;
    }
  };

  useEffect(() => {
    const orderedBookings = orderBookings();
    setBookings(orderedBookings);
  }, [selectFooter]);

  //PAGINATION***************************************

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const switchPagination = () => {
    switch (currentPage) {
      case 1:
        return bookings.slice(0, 10);

      case 2:
        return bookings.slice(10, 20);

      case 3:
        return bookings.slice(20, 30);

      case 4:
        return bookings.slice(30, 40);

      default:
        return [];
    }
  };

  const bookingsSlices = switchPagination();

  return (
    <MainStyled>
      {bookingsListError ? (
        <h1>Hubo un error al obtener los datos de las reservas</h1>
      ) : (
        <>
          {spinner ? (
            <SpinnerStyled />
          ) : (
            <>
              <OrderTableBookings
                setStateStatus={setStateStatus}
                setSelectFooter={setSelectFooter}
              />
              <TableBookings bookings={bookingsSlices} />

              <FooterTable
                currentPage={currentPage}
                onPageChange={handlePageChange}
                numberOfItems={bookings.length}
              />
            </>
          )}
        </>
      )}
    </MainStyled>
  );
};

export default BokkingsPage;
