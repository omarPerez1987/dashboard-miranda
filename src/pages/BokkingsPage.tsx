import React, { useEffect, useState } from "react";
import OrderTableBookings from "../components/tables/Bokkings/OrderTableBookings";
import TableBookings from "../components/tables/Bokkings/TableBookings";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import { SpinnerStyled } from "../componentsStyle/general/SpinnerStyled";
import FooterTable from "../components/tables/FooterTable";
import { useDispatch } from "react-redux";
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
import { getAllRoomsApiThunk } from "../features/rooms/roomsThunk";
import { AppDispatch, useAppSelector } from "../app/store";
import { BookingInterface } from "../interfaces/bookings/bookingsInterface";
import { RoomsInterface } from "../interfaces/rooms/roomsInterface";

const BokkingsPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const bookingsListData = useAppSelector<BookingInterface[]>(getBookingsData);
  const bookingsListCheckIn =
    useAppSelector<BookingInterface[]>(getRoomsCheckIn);
  const bookingsListCheckOut =
    useAppSelector<BookingInterface[]>(getRoomsCheckOut);
  const bookingsListPending =
    useAppSelector<BookingInterface[]>(getRoomsCheckPending);
  const bookingsListStatus = useAppSelector<string>(getBookingsStatus);
  const bookingsListError = useAppSelector<string | undefined>(
    getBookingsError
  );
  const roomsListData = useAppSelector<RoomsInterface[]>(getRoomsData);
  const [spinner, setSpinner] = useState<boolean>(true);

  const [stateStatus, setStateStatus] = useState<string>("All");
  const [bookings, setBookings] = useState<BookingInterface[]>([]);
  const [rooms, setRooms] = useState<RoomsInterface[]>([]);

  const [selectFooter, setSelectFooter] = useState<string>("date");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (bookingsListStatus === "idle") {
      dispatch(getBookingsListThunk());
      dispatch(getAllRoomsApiThunk());
    } else if (bookingsListStatus === "pending") {
      setSpinner(true);
    } else if (bookingsListStatus === "fulfilled") {
      setRooms(roomsListData);
      switchBookingsList();
      setSpinner(false);
    }
  }, [dispatch, bookingsListData, bookingsListStatus, stateStatus, rooms]);

  const bookingAndRoom = (selectList: BookingInterface[]) => {
    const combinedData: Array<Object> = [];

    selectList.forEach((booking) => {
      const correspondingRoom = rooms.find(
        (room) => room._id === booking.idRoom
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
        setBookings(bookingAndRoom(bookingsListData) as BookingInterface[]);
        break;
      case "In":
        setBookings(bookingAndRoom(bookingsListCheckIn) as BookingInterface[]);
        break;
      case "Out":
        setBookings(bookingAndRoom(bookingsListCheckOut) as BookingInterface[]);
        break;
      case "Pending":
        setBookings(bookingAndRoom(bookingsListPending) as BookingInterface[]);
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
          return dateA.getTime() - dateB.getTime();
        });
        return orderedBookingsDate;
      case "entryDate":
        const orderedBookingsCheckin = [...bookings];
        orderedBookingsCheckin.sort((a, b) => {
          const dateA = new Date(a.checkin.split(".").reverse().join("-"));
          const dateB = new Date(b.checkin.split(".").reverse().join("-"));
          return dateA.getTime() - dateB.getTime();
        });
        return orderedBookingsCheckin;
      case "outDate":
        const orderedBookingsCheckOut = [...bookings];
        orderedBookingsCheckOut.sort((a, b) => {
          const dateA = new Date(a.checkout.split(".").reverse().join("-"));
          const dateB = new Date(b.checkout.split(".").reverse().join("-"));
          return dateA.getTime() - dateB.getTime();
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
    setBookings(orderedBookings as BookingInterface[]);
  }, [selectFooter]);

  //PAGINATION***************************************

  const handlePageChange = (selectedPage: number) => {
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
