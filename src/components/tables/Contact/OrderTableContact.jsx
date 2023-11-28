import React from "react";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import { NewestButton } from "../../../componentsStyle/general/ButtonStyled";
import { IoIosArrowDown } from "react-icons/io";


const OrderTableContact = ({ setArchived }) => {

  return (
    <OrderTableStyled>
      <div>
        <h4 onClick={() => setArchived(false)}>All Contacts</h4>
        <h4 onClick={() => setArchived(true)}>Archived</h4>
      </div>
      <div>
        <NewestButton>
          Newest <IoIosArrowDown />
        </NewestButton>
      </div>
    </OrderTableStyled>
  );
};

export default OrderTableContact;
