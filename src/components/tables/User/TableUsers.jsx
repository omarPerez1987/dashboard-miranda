import React from "react";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import user from "../../../../public/cardUser/bxs-user.svg";
import { IconTelTable } from "../../../componentsStyle/general/IconStyled";

const TableUsers = () => {
  return (
    <TableStyle>
      <TheadStyled>
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          <th>Description</th>
          <th>Contact</th>
          <th>Status</th>
        </tr>
      </TheadStyled>
      <tbody>
        <TrbodyStyled>
          <TdbodyNameStyled>
            <img className="image-user" src={user} alt="" />
            <div>
              <p>James Sitepu</p>
              <span>#12341225</span>
              <span>test@test.com</span>
            </div>
          </TdbodyNameStyled>
          <TdbodyStyled>
            <p>Oct 30th 2020 </p>
          </TdbodyStyled>
          <TdbodyStyled>
            Answering guest inquiries, directing phone calls, coordinating
            travel plans, and more.
          </TdbodyStyled>
          <TdbodyStyled>
          <p><IconTelTable /> 012 334 55512</p>
          </TdbodyStyled>
          <TdbodyStyled>
            <button className="--active"></button>
          </TdbodyStyled>
          <TdbodyStyled>
            <PiDotsThreeVerticalBold />
          </TdbodyStyled>
        </TrbodyStyled>
      </tbody>
    </TableStyle>
  );
};

export default TableUsers;
