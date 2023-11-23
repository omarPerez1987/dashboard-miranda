import React from "react";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import { IoIosArrowDown } from "react-icons/io";
import { NewestButton } from "../../../componentsStyle/general/ButtonStyled";

const OrderTableBookings = () => {
  return (
    <OrderTableStyled>
      <div>
        <h4>All Guest</h4>
        <h4>Pending</h4>
        <h4>Booked</h4>
        <h4>Canceled</h4>
        <h4>Refund</h4>
      </div>
      <div>
        <NewestButton>
          Newest <IoIosArrowDown />
        </NewestButton>
      </div>
    </OrderTableStyled>
  );
};

export default OrderTableBookings;
