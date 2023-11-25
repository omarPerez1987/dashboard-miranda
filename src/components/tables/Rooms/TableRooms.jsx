import React, { useState } from "react";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { ButtonVariantStyled } from "../../../componentsStyle/general/ButtonStyled";
import rooms from "../../../JSON/rooms.json";
import ModalEditRoom from "../../modal/ModalEditRoom";

const TableRooms = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dataRoom, setDataRoom] = useState({});

  return (
    <>
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
              <TrbodyStyled
                key={room.id}
                onClick={() => {
                  setOpenModal(true);
                  setDataRoom(room);
                }}
              >
                <TdbodyNameStyled>
                  <img className="image-room" src={room.photo} alt="" />
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
                  <p>{room.discount ? room.discount : "No offer"}</p>
                </TdbodyStyled>
                <TdbodyStyled>
                  <ButtonVariantStyled
                    type={
                      room.status === "Available" ? "available" : "booked"
                    }
                  >{`${room.status}`}</ButtonVariantStyled>
                </TdbodyStyled>
                <TdbodyStyled>
                  <PiDotsThreeVerticalBold />
                </TdbodyStyled>
              </TrbodyStyled>
            ))}
        </tbody>
      </TableStyle>
      {openModal && <ModalEditRoom room={dataRoom} setOpenModal={setOpenModal}/>}
    </>
  );
};

export default TableRooms;
