import React from "react";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FooterTable from "../components/tables/FooterTable";
import OrderTableUsers from "../components/tables/User/OrderTableUsers";
import TableUsers from "../components/tables/User/TableUsers";

const UsersPage = () => {
  return (
    <MainStyled>
      <OrderTableUsers />
      <TableUsers />
      <FooterTable />
    </MainStyled>
  );
};

export default UsersPage;
