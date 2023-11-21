import React from "react";
import { HeaderTableStyled } from "../../../componentsStyle/tables/HeaderTableStyled";
import { IoIosArrowDown } from "react-icons/io";

const HeaderTableUser = () => {
  return (
    <HeaderTableStyled>
      <div>
        <h4>All Guest</h4>
        <h4>Pending</h4>
        <h4>Booked</h4>
        <h4>Canceled</h4>
        <h4>Refund</h4>
      </div>
      <div>
        <button>
          Newest <IoIosArrowDown />
        </button>
      </div>
    </HeaderTableStyled>
  );
};

export default HeaderTableUser;
