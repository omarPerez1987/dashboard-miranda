import React from 'react'
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
        <CreateButton>+ New Room</CreateButton>
        <NewestButton>
          Newest <IoIosArrowDown />
        </NewestButton>
      </div>

    </OrderTableStyled>
  )
}

export default OrderTableRooms