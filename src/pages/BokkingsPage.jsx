import React from "react";
import OrderTableBookings from "../components/tables/Bokkings/OrderTableBookings";
import TableBookings from "../components/tables/Bokkings/TableBookings";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FooterTable from "../components/tables/FooterTable";

const BokkingsPage = () => {
  return (
    <>
      <MainStyled>
        <OrderTableBookings />
        <TableBookings />
        <FooterTable />
      </MainStyled>
    </>
  );
};

export default BokkingsPage;
