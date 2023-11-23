import React from "react";
import { Link } from "react-router-dom";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import user from "../../../../public/cardUser/bxs-user.svg";

const TableBookings = () => {
  const id = 2;
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
        <TrbodyStyled>
          <TdbodyNameStyled>
            <img src={user} alt="" />
            <div>
              <span>#000123456</span>
              <p>Cahyadi Purnomo</p>
            </div>
          </TdbodyNameStyled>
          <TdbodyStyled>Oct 30th 2020 09:21 AM</TdbodyStyled>
          <TdbodyStyled>
            <p>Nov 2th, 2020</p> <span>9.46 PM</span>
          </TdbodyStyled>
          <TdbodyStyled>
            <p>Nov 4th, 2020</p> <span>6.12 PM</span>
          </TdbodyStyled>
          <TdbodyStyled>
            <Link to={`/home/bookings/${id}`} className="view-active">
              View Notes
            </Link>
          </TdbodyStyled>
          <TdbodyStyled>
            <p>Deluxe A - 02</p>
          </TdbodyStyled>
          <TdbodyStyled>
            <button className="--red"></button>
          </TdbodyStyled>
          <TdbodyStyled>
            <PiDotsThreeVerticalBold />
          </TdbodyStyled>
        </TrbodyStyled>
      </tbody>
    </TableStyle>
  );
};

export default TableBookings;
