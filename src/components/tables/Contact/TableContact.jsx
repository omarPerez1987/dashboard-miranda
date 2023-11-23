import React from "react";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";

const TableContact = () => {
  return (
    <TableStyle>
      <TheadStyled>
        <tr>
          <th>Date & ID</th>
          <th>Customer</th>
          <th>Comment</th>
          <th>Action</th>
        </tr>
      </TheadStyled>
      <tbody>
        <TrbodyStyled>
          <TdbodyStyled>
            <p>Oct 30th 2020 </p>
            <span>#000123456</span>
          </TdbodyStyled>
          <TdbodyStyled>
            <p>James Sitepu</p>
            <span>test@test.com</span>
            <h6>973568789</h6>
          </TdbodyStyled>
          <TdbodyStyled>
            We recently had dinner with friends at Dimas Can Zheng and we all
            walked away with a great experience. Good food, pleasant
            environment, personal attention through all the evening. Thanks to
            the team and we will be back
          </TdbodyStyled>
          <TdbodyStyled>
            <button className="archived">ARCHIVE</button>
          </TdbodyStyled>
        </TrbodyStyled>
      </tbody>
    </TableStyle>
  );
};

export default TableContact;
