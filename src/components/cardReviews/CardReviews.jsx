import React, { useState } from "react";
import { CardReviewsStyled } from "../../componentsStyle/cardReviews/CardreviewsStyled";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import ModalReviews from "../modal/ModalReviews";

const CardReviews = ({contact}) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
    <CardReviewsStyled onClick={() => setOpenModal(true)}>
      <p>
        {`${contact.review.substring(0, 150)} ...`}
      </p>
      <div>
        <div>
          <img src="#" alt="" />
          <div className="name-user">
            <h5>{contact.name} {contact.last_name}</h5>
            <span>{contact.hour}</span>
          </div>
        </div>
        <div className="container-icons">
          <CiCircleCheck />
          <CiCircleRemove className="icon-red" />
        </div>
      </div>
    </CardReviewsStyled>
    {openModal&& <ModalReviews review={contact.review} setOpenModal={setOpenModal}/>}
    </>
  );
};

export default CardReviews;
