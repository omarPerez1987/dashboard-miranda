import React from "react";
import { OrderTableStyled } from "../../../componentsStyle/tables/OrderTableStyled";
import { NewestButton } from "../../../componentsStyle/general/ButtonStyled";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { archived } from "../../../features/contact/contactsSlices";

const OrderTableContact = () => {
  const dispatch = useDispatch();

  return (
    <OrderTableStyled>
      <div>
        <h4 onClick={() => dispatch(archived(false))}>All Contacts</h4>
        <h4 onClick={() => dispatch(archived(true))}>Archived</h4>
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
