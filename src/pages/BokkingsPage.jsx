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
} from "../features/bookings/bookingsSlices";
import { getBookingsListThunk } from "../features/bookings/bookingsThunks";

const BokkingsPage = () => {
  const dispatch = useDispatch();
  const bookingsListData = useSelector(getBookingsData);
  const bookingsListStatus = useSelector(getBookingsStatus);
  const bookingsListError = useSelector(getBookingsError);
  const [bookings, setBookings] = useState([]);
  
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (bookingsListStatus === "idle") {
      dispatch(getBookingsListThunk());
    } else if (bookingsListStatus === "pending") {
      setSpinner(true);
    } else if (bookingsListStatus === "fulfilled") {
      setBookings(bookingsListData);
      setSpinner(false);
    }
  }, [dispatch, bookingsListStatus, bookingsListData]);

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
