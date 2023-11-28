import React from "react";
import { TableStyle } from "../../../componentsStyle/tables/TableStyled";
import { TheadStyled } from "../../../componentsStyle/tables/TheadStyled";
import { TrbodyStyled } from "../../../componentsStyle/tables/TrbodyStyled";
import { TdbodyNameStyled } from "../../../componentsStyle/tables/TdbodyNameStyled";
import { TdbodyStyled } from "../../../componentsStyle/tables/TdbodyStyled";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IconTelTable } from "../../../componentsStyle/general/IconStyled";
import { ButtonVariantStyled } from "../../../componentsStyle/general/ButtonStyled";
import { useNavigate } from "react-router-dom";

const TableUsers = ({ users }) => {
  const navigate = useNavigate();

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
        {users &&
          users.map((user) => (
            <TrbodyStyled
              key={user.id}
              onClick={() => navigate(`/home/edit-user/${user.id}`)}
            >
              <TdbodyNameStyled>
                <img className="image-user" src={user.photo} alt="" />
                <div>
                  <p>{user.name}</p>
                  <span>{user.id}</span>
                  <span>{user.email}</span>
                </div>
              </TdbodyNameStyled>
              <TdbodyStyled>
                <p>{user.startDate}</p>
              </TdbodyStyled>
              <TdbodyStyled>
                {user.description.length > 50
                  ? `${user.description.slice(0, 150)}...`
                  : user.description}
              </TdbodyStyled>
              <TdbodyStyled>
                <p>
                  <IconTelTable /> {user.phone}
                </p>
              </TdbodyStyled>
              <TdbodyStyled>
                {user.status === "true" ? (
                  <ButtonVariantStyled type="true">
                    ACTIVE
                  </ButtonVariantStyled>
                ) : (
                  <ButtonVariantStyled type="false">
                    INACTIVE
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

export default TableUsers;
