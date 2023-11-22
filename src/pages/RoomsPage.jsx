import React from "react";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FooterTable from "../components/tables/FooterTable";
import TableRooms from "../components/tables/Rooms/TableRooms";

const RoomsPage = () => {
  return (
    <MainStyled>
      <TableRooms />
      <FooterTable />
    </MainStyled>
  );
};

export default RoomsPage;
