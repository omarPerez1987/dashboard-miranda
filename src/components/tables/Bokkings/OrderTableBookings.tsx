import React, { useState } from "react";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import {
  CreateButton,
  SelectFooterStyled,
} from "../../../componentsStyle/general/ButtonStyled";
import { Link } from "react-router-dom";
import { OrderTableBookingsProps } from "../../../interfaces/propsInterface/propsInterface";

const OrderTableBookings: React.FC<OrderTableBookingsProps> = ({
  setStateStatus,
  setSelectFooter,
}) => {
  return (
    <OrderTableStyled>
      <div>
        <h4 onClick={() => setStateStatus("all")}>All Guest</h4>
        <h4 onClick={() => setStateStatus("pending")}>Pending</h4>
        <h4 onClick={() => setStateStatus("check-in")}>Check in</h4>
        <h4 onClick={() => setStateStatus("check-out")}>Check out</h4>
      </div>
      <div>
        <Link to={"/home/new-booking"}>
          <CreateButton>+ New Booking</CreateButton>
        </Link>
        <SelectFooterStyled onChange={(e) => setSelectFooter(e.target.value)}>
          <option disabled>Select</option>
          <option value="date">Booking date</option>
          <option value="entryDate">Entry date</option>
          <option value="outDate">Departure date</option>
          <option value="alpha">[ A - Z ]</option>
        </SelectFooterStyled>
      </div>
    </OrderTableStyled>
  );
};

export default OrderTableBookings;
