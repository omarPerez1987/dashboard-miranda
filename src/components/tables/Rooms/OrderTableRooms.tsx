import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import { IoIosArrowDown } from "react-icons/io";
import {
  CreateButton,
  NewestButton,
} from "../../../componentsStyle/general/ButtonStyled";
import { OrderTableRoomsProps } from "../../../interfaces/propsInterface/propsInterface";

const OrderTableRooms: React.FC<OrderTableRoomsProps> = ({
  setStateStatus,
  setNewest,
}) => {
  const [origin, setOrigin] = useState<boolean>(true);

  return (
    <OrderTableStyled>
      <div>
        <h4 onClick={() => setStateStatus("All")}>All Rooms</h4>
        <h4 onClick={() => setStateStatus("Available")}>Available Rooms</h4>
        <h4 onClick={() => setStateStatus("Booked")}>Booked Rooms</h4>
      </div>
      <div>
        <Link to={"/home/new-room"}>
          <CreateButton>+ New Room</CreateButton>
        </Link>
        {origin ? (
          <NewestButton
            onClick={() => {
              setOrigin(false), setNewest(true);
            }}
          >
            Room <IoIosArrowDown />
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

export default OrderTableRooms;
