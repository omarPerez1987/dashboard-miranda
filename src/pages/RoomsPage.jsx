import React, { useEffect, useState } from "react";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FooterTable from "../components/tables/FooterTable";
import OrderTableRooms from "../components/tables/Rooms/OrderTableRooms";
import TableRooms from "../components/tables/Rooms/TableRooms";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoomsData,
  getRoomsError,
  getRoomsStatus,
} from "../features/rooms/roomsSlices";
import { getRoomsListApiThunk } from "../features/rooms/roomsThunk";

const RoomsPage = () => {
  const dispatch = useDispatch();
  const roomsListData = useSelector(getRoomsData);
  const roomsListStatus = useSelector(getRoomsStatus);
  const roomsListError = useSelector(getRoomsError);
  const [rooms, setRooms] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (roomsListStatus === "idle") {
      dispatch(getRoomsListApiThunk());
    } else if (roomsListStatus === "pending") {
      setSpinner(true);
    } else if (roomsListStatus === "fulfilled") {
      setRooms(roomsListData);
      setSpinner(false);
    }
  }, [dispatch, roomsListData, roomsListStatus]);
  
  return (
    <MainStyled>
      {roomsListError ? (
        <h1>Hubo un error al obtener los datos de los usuarios</h1>
      ) : (
        <>
          <OrderTableRooms />
          {spinner ? <h1>Loading...</h1> : <TableRooms rooms={rooms} />}
          <FooterTable />
        </>
      )}
    </MainStyled>
  );
};

export default RoomsPage;
