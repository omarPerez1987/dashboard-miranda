import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import { IoIosArrowDown } from "react-icons/io";
import {
  CreateButton,
  NewestButton,
} from "../../../componentsStyle/general/ButtonStyled";
import { OrderTableUsersProps } from "../../../interfaces/propsInterface/propsInterface";

const OrderTableUsers: React.FC<OrderTableUsersProps> = ({
  setStateStatus,
  setNewest,
}) => {
  const [origin, setOrigin] = useState(true);
  return (
    <OrderTableStyled>
      <div>
        <h4 onClick={() => setStateStatus("All")}>All Employee</h4>
        <h4 onClick={() => setStateStatus("Active")}>Active Employee</h4>
        <h4 onClick={() => setStateStatus("Inactive")}>Inactive Employee</h4>
      </div>
      <div>
        <Link to={"/home/new-user"}>
          <CreateButton>+ New Employee</CreateButton>
        </Link>
        {origin ? (
          <NewestButton
            onClick={() => {
              setOrigin(false), setNewest(true);
            }}
          >
            Date <IoIosArrowDown />
          </NewestButton>
        ) : (
          <NewestButton
            onClick={() => {
              setOrigin(true), setNewest(false);
            }}
          >
            Default <IoIosArrowDown />
          </NewestButton>
        )}
      </div>
    </OrderTableStyled>
  );
};

export default OrderTableUsers;
