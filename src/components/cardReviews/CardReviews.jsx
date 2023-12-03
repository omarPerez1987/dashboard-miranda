import React, { useState } from "react";
import { CardReviewsStyled } from "../../componentsStyle/cardReviews/CardreviewsStyled";
import { CiCircleRemove } from "react-icons/ci";
import ModalReviews from "../modal/ModalReviews";
import { useDispatch } from "react-redux";
import { updateArchived } from "../../features/contact/contactsSlices";

const CardReviews = ({ contact }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <CardReviewsStyled>
        <p onClick={() => setOpenModal(true)}>{`${contact.review.substring(
          0,
          150
        )} ...`}</p>
        <div>
          <div>
            <img src="#" alt="" />
            <div className="name-user">
              <h5>
                {contact.name} {contact.last_name}
              </h5>
              <span>{contact.hour}</span>
            </div>
          </div>
          <div className="container-icons">
            <CiCircleRemove
              className="icon-red"
              onClick={() => {
                dispatch(updateArchived(contact));
              }}
            />
          </div>
        </div>
      </CardReviewsStyled>
      {openModal && (
        <ModalReviews review={contact.review} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default CardReviews;
