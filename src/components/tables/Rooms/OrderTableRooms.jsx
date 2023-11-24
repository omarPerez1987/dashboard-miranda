import React from "react";
import { Link } from "react-router-dom";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import { IoIosArrowDown } from "react-icons/io";
import {
  CreateButton,
  NewestButton,
} from "../../../componentsStyle/general/ButtonStyled";

const OrderTableRooms = () => {
  return (
    <OrderTableStyled>
      <div>
        <h4>All Rooms</h4>
        <h4>Available Rooms</h4>
        <h4>Booked Rooms</h4>
      </div>
      <div>
        <Link to={"/home/new-room"}>
          <CreateButton>+ New Room</CreateButton>
        </Link>
        <NewestButton>
          Newest <IoIosArrowDown />
        </NewestButton>
      </div>
    </OrderTableStyled>
  );
};

export default OrderTableRooms;
