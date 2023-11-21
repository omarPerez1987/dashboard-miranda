import React from "react";
import { RowTablesStyled } from "../../../componentsStyle/tables/RowTablesStyled";
import user from "../../../../public/cardUser/bxs-user.svg";
import { RiDraggable } from "react-icons/ri";

const RowTableUser = () => {
  return (
    <RowTablesStyled>
      <td>
        <img src={user} alt="" />
        <div>
          <p>000123456</p>
          <h4>Cahyadi Purnomo</h4>
        </div>
      </td>
      <td>
        <h5>Oct 30th 2020 09:21 AM</h5>
      </td>
      <td>
        <div>
          <h5>Nov 2th, 2020</h5>
          <h6>9.46 PM</h6>
        </div>
      </td>
      <td>
        <div>
          <h5>Nov 4th, 2020</h5>
          <h6>9.46 PM</h6>
        </div>
      </td>
      <td>
        <button className="view-active">View Notes</button>
      </td>
      <td>
        <h5>Deluxe A - 02</h5>
      </td>
      <td>
        <button className="green">Refund</button>
      </td>
      <td>
        <RiDraggable />
      </td>
    </RowTablesStyled>
  );
};

export default RowTableUser;
