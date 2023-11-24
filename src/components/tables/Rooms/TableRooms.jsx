import React, { useState } from "react";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import rooms from "../../../JSON/rooms.json";

const TableRooms = () => {
  const [idRoom, setIdRoom] = useState('')
  console.log(idRoom)
  return (
    <TableStyle>
      <TheadStyled id= {idRoom}>
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
            <TrbodyStyled key={room.id} onClick={() => setIdRoom(room.id)}>
              <TdbodyNameStyled>
                <img className="image-room" src={room.photo} alt="" />
                <div>
                  <p>{room.room}</p>
                  <span>{room.id}</span>
                </div>
              </TdbodyNameStyled>
              <TdbodyStyled>{room.bed}</TdbodyStyled>
              <TdbodyStyled>{room.amenities}</TdbodyStyled>
              <TdbodyStyled>
                <p>{room.rate}</p>
              </TdbodyStyled>
              <TdbodyStyled>
                <p>{room.discount ? room.discount : "No offer"}</p>
              </TdbodyStyled>
              <TdbodyStyled>
                <button
                  className={room.available ? "available" : "booked"}
                ></button>
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

export default TableRooms;
