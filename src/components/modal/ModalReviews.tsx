import React from "react";
import {
  CardModalStyled,
  ModalStyled,
} from "../../componentsStyle/modal/ModalStyled";
import { ButtonVariantStyled } from "../../componentsStyle/general/ButtonStyled";
import { ModalReviewsProps } from "../../interfaces/propsInterface/propsInterface";

const ModalReviews: React.FC<ModalReviewsProps> = ({
  review,
  setOpenModal,
}) => {
  return (
    <ModalStyled>
      <CardModalStyled>
        <p>{review}</p>
        <ButtonVariantStyled type="booked" onClick={() => setOpenModal(false)}>
          Exit Review
        </ButtonVariantStyled>
      </CardModalStyled>
    </ModalStyled>
  );
};

export default ModalReviews;
