import React, { useState } from "react";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import { NewestButton } from "../../../componentsStyle/general/ButtonStyled";
import { IoIosArrowDown } from "react-icons/io";

const OrderTableContact = ({ setArchived, setNewest }) => {
  const [newOrOld, setNewOrOld] = useState(true);

  return (
    <OrderTableStyled>
      <div>
        <h4 onClick={() => setArchived(false)}>All Contacts</h4>
        <h4 onClick={() => setArchived(true)}>Archived</h4>
      </div>
      <div>
        {newOrOld ? (
          <NewestButton
            onClick={() => {
              setNewOrOld(false), setNewest(true);
            }}
          >
            Newest <IoIosArrowDown />
          </NewestButton>
        ) : (
          <NewestButton
            onClick={() => {
              setNewOrOld(true), setNewest(false);
            }}
          >
            Default <IoIosArrowDown />
          </NewestButton>
        )}
      </div>
    </OrderTableStyled>
  );
};

export default OrderTableContact;
