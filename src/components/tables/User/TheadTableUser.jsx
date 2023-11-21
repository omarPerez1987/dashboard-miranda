import React from "react";
import { TheadTableStyled } from "../../../componentsStyle/tables/TheadTableStyled";

const TheadTableUser = () => {
  return (
    <TheadTableStyled>
      <tr>
        <th>Guest</th>
      </tr>
      <tr>
        <th>Order Date</th>
      </tr>
      <tr>
        <th>Check In</th>
      </tr>
      <tr>
        <th>Check Out</th>
      </tr>
      <tr>
        <th>Special Request</th>
      </tr>
      <tr>
        <th>Room Type</th>
      </tr>
      <tr>
        <th>Status</th>
      </tr>
      <tr>
        <th></th>
      </tr>
    </TheadTableStyled>
  );
};

export default TheadTableUser;
