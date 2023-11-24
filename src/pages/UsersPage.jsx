import React from "react";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import FooterTable from "../components/tables/FooterTable";
import OrderTableUsers from "../components/tables/User/OrderTableUsers";
import TableUsers from "../components/tables/User/TableUsers";
import users from "../JSON/users.json";

const UsersPage = () => {
  return (
    <MainStyled>
      <OrderTableUsers />
      <TableUsers users={users}/>
      <FooterTable />
    </MainStyled>
  );
};

export default UsersPage;
