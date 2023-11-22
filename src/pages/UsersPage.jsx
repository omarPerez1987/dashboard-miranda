import React from "react";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import OrderTableUser from "../components/tables/User/OrderTableUser"
import FooterTable from "../components/tables/FooterTable"
import TableUser from "../components/tables/User/TableUser"

const UsersPage = () => {
  return (
    <MainStyled>
      <OrderTableUser />
      <TableUser />
      <FooterTable />
    </MainStyled>

  );
};

export default UsersPage;
