import React, { useState } from "react";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { ButtonVariantStyled } from "../../../componentsStyle/general/ButtonStyled";
import { useNavigate } from "react-router-dom";
import { TableRoomsProps } from "../../../interfaces/propsInterface/propsInterface";

const TableRooms: React.FC<TableRoomsProps> = ({ rooms }) => {
  const navigate = useNavigate();

  return (
    <TableStyle>
      <TheadStyled>
        <tr>
          <th>Room Name</th>
          <th>Bed Type</th>
          <th>Facilities</th>
          <th>Price</th>
          <th>Offer Price</th>
          <th>Status</th>
        </tr>
      </TheadStyled>
      <tbody>
        {rooms &&
          rooms.map((room) => (
            <TrbodyStyled key={room.id}>
              <TdbodyNameStyled>
                <img
                  className="image-room"
                  src={room.photo || undefined}
                  alt=""
                />
                <div>
                  <p>{room.room}</p>
                  <span>{room.id}</span>
                </div>
              </TdbodyNameStyled>
              <TdbodyStyled>{room.bed}</TdbodyStyled>
              <TdbodyStyled>{room.facilities}</TdbodyStyled>
              <TdbodyStyled>
                <p>{room.price}</p>
              </TdbodyStyled>
              <TdbodyStyled>
                <p>{room.discount ? `${room.discount}%` : "No offer"}</p>
              </TdbodyStyled>
              <TdbodyStyled>
                <ButtonVariantStyled
                  type={room.status === "Available" ? "available" : "booked"}
                >{`${room.status}`}</ButtonVariantStyled>
              </TdbodyStyled>
              <TdbodyStyled>
                <PiDotsThreeVerticalBold
                  onClick={() => navigate(`/home/edit-room/${room.id}`)}
                />
              </TdbodyStyled>
            </TrbodyStyled>
          ))}
      </tbody>
    </TableStyle>
  );
};

export default TableRooms;
