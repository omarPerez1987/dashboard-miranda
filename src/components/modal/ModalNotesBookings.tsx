import React from "react";
import {
  CardModalStyled,
  ModalStyled,
} from "../../componentsStyle/modal/ModalStyled";
import { ButtonVariantStyled } from "../../componentsStyle/general/ButtonStyled";
import { ModalNotesBookingsProps } from "../../interfaces/propsInterface/propsInterface";

const ModalNotesBookings: React.FC<ModalNotesBookingsProps> = ({ notes, setOpenModal }) => {
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
