import React from "react";
import {
  CardModalStyled,
  ModalStyled,
} from "../../componentsStyle/modal/ModalStyled";
import { ButtonVariantStyled } from "../../componentsStyle/general/ButtonStyled";

const ModalNotesBookings = ({ notes, setOpenModal }) => {
  return (
    <ModalStyled>
      <CardModalStyled>
        <p>{notes}</p>
        <ButtonVariantStyled type="booked" onClick={() => setOpenModal(false)}>
          Exit Notes
        </ButtonVariantStyled>
      </CardModalStyled>
    </ModalStyled>
  );
};

export default ModalNotesBookings;
