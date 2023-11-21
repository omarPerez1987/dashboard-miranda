import React from "react";
import { TableStyled } from "../componentsStyle/tables/TableStyled";
import HeaderTableUser from "../components/tables/User/HeaderTableUser";

const UsersPage = () => {
  return (
    <TableStyled>
      <HeaderTableUser />
    </TableStyled>
  );
};

export default UsersPage;
