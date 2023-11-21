import React from "react";
import { TableStyled } from "../componentsStyle/tables/TableStyled";
import RowTableUser from "../components/tables/User/RowTableUser";
import OrderTableUser from "../components/tables/User/OrderTableUser";
import FooterTable from "../components/tables/FooterTable";
import TheadTableUser from "../components/tables/User/TheadTableUser";

const UsersPage = () => {
  return (
    <TableStyled>
      <OrderTableUser />
      <table>
        <TheadTableUser />
        <tbody>
          <RowTableUser />
          <RowTableUser />
          <RowTableUser />
          <RowTableUser />
          <RowTableUser />
          <RowTableUser />
          <RowTableUser />
          <RowTableUser />
          <RowTableUser />
        </tbody>
      </table>
      <FooterTable />
    </TableStyled>
  );
};

export default UsersPage;
