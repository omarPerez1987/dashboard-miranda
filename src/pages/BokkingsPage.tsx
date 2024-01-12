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
import { getAllBookingsApiThunk } from "../features/bookings/bookingsThunks";
import { AppDispatch, useAppSelector } from "../app/store";
import { BookingInterface } from "../interfaces/bookings/bookingsInterface";

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
  const [spinner, setSpinner] = useState<boolean>(true);

  const [stateStatus, setStateStatus] = useState<string>("All");
  const [bookings, setBookings] = useState<BookingInterface[]>([]);

  const [selectFooter, setSelectFooter] = useState<string>("date");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (bookingsListStatus === "idle") {
      dispatch(getAllBookingsApiThunk());
    } else if (bookingsListStatus === "pending") {
      setSpinner(true);
    } else if (bookingsListStatus === "fulfilled") {
      setBookings(bookingsListData);
      switchBookingsList();
      setSpinner(false);
    }
  }, [
    dispatch,
    bookingsListData,
    bookingsListStatus,
    stateStatus,
    spinner
  ]);

  const switchBookingsList = () => {
    switch (stateStatus) {
      case "all":
        setBookings(bookingsListData);
        break;
      case "check-in":
        setBookings(bookingsListCheckIn);
        break;
      case "check-out":
        setBookings(bookingsListCheckOut);
        break;
      case "pending":
        setBookings(bookingsListPending);
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
