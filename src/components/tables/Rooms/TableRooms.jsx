import React from "react";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import room from "../../../../public/Rooms/Room.jpg";

const TableRooms = () => {
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
        <TrbodyStyled>
          <TdbodyNameStyled>
            <img className="image-room" src={room} alt="" />
            <div>
              <p>Deluxe A-91234</p>
              <span>#12341225</span>
            </div>
          </TdbodyNameStyled>
          <TdbodyStyled>
            <p>Double Bed</p>
          </TdbodyStyled>
          <TdbodyStyled>
            AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi
          </TdbodyStyled>
          <TdbodyStyled>
            <p>$145</p>
          </TdbodyStyled>
          <TdbodyStyled>
            <p>20%</p>
          </TdbodyStyled>
          <TdbodyStyled>
            <button className="booked"></button>
          </TdbodyStyled>
          <TdbodyStyled>
            <PiDotsThreeVerticalBold />
          </TdbodyStyled>
        </TrbodyStyled>
      </tbody>
    </TableStyle>
  );
};

export default TableRooms;