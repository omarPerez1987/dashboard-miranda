import React from "react";
import { Link } from "react-router-dom";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { ButtonVariantStyled } from "../../../componentsStyle/general/ButtonStyled";
import bookings from "../../../JSON/bookings.json";

const TableBookings = () => {
  return (
    <TableStyle>
      <TheadStyled>
        <tr>
          <th>Guest</th>
          <th>Order Date</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Special Request</th>
          <th>Room Type</th>
          <th>Status</th>
        </tr>
      </TheadStyled>
      <tbody>
        {bookings &&
          bookings.map((data) => (
            <TrbodyStyled key={data.id}>
              <TdbodyNameStyled>
                <img src={data.photo} alt="" />
                <div>
                  <span>{data.id}</span>
                  <p>{data.name}</p>
                </div>
              </TdbodyNameStyled>
              <TdbodyStyled>
                {data.orderDate} {data.checkinTime}
              </TdbodyStyled>
              <TdbodyStyled>
                <p>{data.checkin}</p> <span>{data.checkinTime}</span>
              </TdbodyStyled>
              <TdbodyStyled>
                <p>{data.checkout}</p> <span>{data.checkoutTime}</span>
              </TdbodyStyled>
              <TdbodyStyled>
                {data.notes ? (
                  <ButtonVariantStyled type="view-active">
                    View Notes
                  </ButtonVariantStyled>
                ) : (
                  <ButtonVariantStyled type="view-inactive">
                    View Notes
                  </ButtonVariantStyled>
                )}
              </TdbodyStyled>
              <TdbodyStyled>
                <p>{data.Room}</p>
              </TdbodyStyled>
              <TdbodyStyled>
                {data.status === "in" && (
                  <ButtonVariantStyled type="in">Check in</ButtonVariantStyled>
                )}
                {data.status === "out" && (
                  <ButtonVariantStyled type="out">
                    Check out
                  </ButtonVariantStyled>
                )}
                {data.status === "pending" && (
                  <ButtonVariantStyled type="pending">
                    In Progress
                  </ButtonVariantStyled>
                )}
              </TdbodyStyled>
              <TdbodyStyled>
                <PiDotsThreeVerticalBold />
              </TdbodyStyled>
            </TrbodyStyled>
          ))}
      </tbody>
    </TableStyle>
  );
};

export default TableBookings;
