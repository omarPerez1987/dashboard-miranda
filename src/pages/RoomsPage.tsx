import React, { useEffect, useState } from "react";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FooterTable from "../components/tables/FooterTable";
import OrderTableRooms from "../components/tables/Rooms/OrderTableRooms";
import TableRooms from "../components/tables/Rooms/TableRooms";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoomsAvailable,
  getRoomsBooked,
  getRoomsData,
  getRoomsError,
  getRoomsStatus,
} from "../features/rooms/roomsSlices";
import { getRoomsListApiThunk } from "../features/rooms/roomsThunk";

const RoomsPage = () => {
  const dispatch = useDispatch();
  const roomsListData = useSelector(getRoomsData);
  const roomsListAvailable = useSelector(getRoomsAvailable);
  const roomsListBooked = useSelector(getRoomsBooked);
  const roomsListStatus = useSelector(getRoomsStatus);
  const roomsListError = useSelector(getRoomsError);
  const [spinner, setSpinner] = useState(true);

  const [stateStatus, setStateStatus] = useState("All");
  const [newest, setNewest] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (roomsListStatus === "idle") {
      dispatch(getRoomsListApiThunk());
    } else if (roomsListStatus === "pending") {
      setSpinner(true);
    } else if (roomsListStatus === "fulfilled") {
      switchRoomsList();
      setSpinner(false);
    }
  }, [
    dispatch,
    roomsListData,
    roomsListStatus,
    stateStatus,
    roomsListAvailable,
    roomsListBooked,
  ]);

  const switchRoomsList = () => {
    switch (stateStatus) {
      case "All":
        setRooms(roomsListData);
        break;
      case "Available":
        setRooms(roomsListAvailable);
        break;
      case "Booked":
        setRooms(roomsListBooked);
        break;
      default:
        break;
    }
  };

  const orderRooms = () => {
    const orderedRooms = [...rooms];
    orderedRooms.sort((a, b) => {
      const roomNumberA = parseInt(a.room.split(" - ")[1]);
      const roomNumberB = parseInt(b.room.split(" - ")[1]);
      return roomNumberA - roomNumberB;
    });
    return orderedRooms;
  };

  useEffect(() => {
    if (newest && roomsListStatus === "fulfilled") {
      setRooms(orderRooms());
    }
    if (!newest && roomsListStatus === "fulfilled") {
      switchRoomsList();
    }
  }, [newest, roomsListStatus]);

  //PAGINATION***************************************

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const switchPagination = () => {
    switch (currentPage) {
      case 1:
        return rooms.slice(0, 10);

      case 2:
        return rooms.slice(10, 20);

      case 3:
        return rooms.slice(20, 30);

      case 4:
        return rooms.slice(30, 40);

      default:
        return [];
    }
  };

  const roomsSlices = switchPagination();

  return (
    <MainStyled>
      {roomsListError ? (
        <h1>Hubo un error al obtener los datos de las habitaciones</h1>
      ) : (
        <>
          {spinner && !roomsListError ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <OrderTableRooms
                setStateStatus={setStateStatus}
                setNewest={setNewest}
              />
              <TableRooms rooms={roomsSlices} />
              <FooterTable
                currentPage={currentPage}
                onPageChange={handlePageChange}
                numberOfItems={rooms.length}
              />
            </>
          )}
        </>
      )}
    </MainStyled>
  );
};
export default RoomsPage;
