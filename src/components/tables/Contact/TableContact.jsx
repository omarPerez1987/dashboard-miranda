import React from "react";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import contacts from "../../../JSON/contact.json";
import { ButtonVariantStyled } from "../../../componentsStyle/general/ButtonStyled";

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
        {contacts &&
          contacts.map((data) => (
            <TrbodyStyled key={data.id}>
              <TdbodyNameStyled>
                <div>
                  <p>{data.date}</p>
                  <p>{data.hour}</p>
                  <span>#{data.id}</span>
                </div>
              </TdbodyNameStyled>
              <TdbodyStyled>
                <p>
                  {data.name} {data.last_name}
                </p>
                <span>{data.email}</span>
                <h6>{data.telephone}</h6>
              </TdbodyStyled>
              <TdbodyStyled>{data.review}</TdbodyStyled>
              <TdbodyStyled>
                <ButtonVariantStyled type="archived">ARCHIVED</ButtonVariantStyled>
              </TdbodyStyled>
            </TrbodyStyled>
          ))}
      </tbody>
    </TableStyle>
  );
};

export default TableContact;
