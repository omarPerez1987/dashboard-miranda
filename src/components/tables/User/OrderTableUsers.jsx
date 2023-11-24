import React from "react";
import { Link } from "react-router-dom";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import { IoIosArrowDown } from "react-icons/io";
import {
  CreateButton,
  NewestButton,
} from "../../../componentsStyle/general/ButtonStyled";

const OrderTableUsers = () => {
  return (
    <OrderTableStyled>
      <div>
        <h4>All Employee</h4>
        <h4>Active Employee</h4>
        <h4>Inactive Employee</h4>
      </div>
      <div>
        <Link to={'/home/new-user'}>
          <CreateButton>+ New Employee</CreateButton>
        </Link>

        <NewestButton>
          Newest <IoIosArrowDown />
        </NewestButton>
      </div>
    </OrderTableStyled>
  );
};

export default OrderTableUsers;
