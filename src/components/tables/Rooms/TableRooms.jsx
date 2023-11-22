import React from "react";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import user from "../../../../public/cardUser/bxs-user.svg";

const TableRooms = () => {
  return (
    <TableStyle>
      <TheadStyled>
        <tr>
          <th>Name</th>
          <th>Job Desk</th>
          <th>Schedule</th>
          <th>Contact</th>
          <th>Status</th>
        </tr>
      </TheadStyled>
      <tbody>
        <TrbodyStyled>
          <TdbodyNameStyled>
            <img className="image-room" src={user} alt="" />
            <div>
              <p>James Sitepu</p>
              <span>#12341225</span>
              <span>Joined on Aug 2th 2017</span>
            </div>
          </TdbodyNameStyled>
          <TdbodyStyled>
            Answering guest inquiries, directing phone calls, coordinating
            travel plans, and more.
          </TdbodyStyled>
          <TdbodyStyled>
            <p>Monday, Friday</p> <h6>Check schedule</h6>
          </TdbodyStyled>
          <TdbodyStyled>
          <p> <BsTelephone /> 012 334 55512</p>
          </TdbodyStyled>
          <TdbodyStyled>
            <button className="--red">INACTIVE</button>
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
