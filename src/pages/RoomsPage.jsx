import React from "react";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FooterTable from "../components/tables/FooterTable";
import OrderTableRooms from "../components/tables/Rooms/OrderTableRooms";
import TableRooms from "../components/tables/Rooms/TableRooms";

const RoomsPage = () => {
  return (
    <MainStyled>
      <OrderTableRooms />
      <TableRooms />
      <FooterTable />
    </MainStyled>
  );
};

export default RoomsPage;
