import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import ModalReviews from "../modal/ModalReviews";
import { useDispatch } from "react-redux";
import { CardReviewsStyled } from "../../componentsStyle/cardReviews/CardReviewsStyled";
import { ContactInterface } from "../../interfaces/contact/contactInterface";
import { AppDispatch } from "../../app/store";
import { updateContactsApiThunk } from "../../features/contact/contactsThunk";
import { toast } from "react-toastify";

const CardReviews = (props: ContactInterface) => {

  const dispatch: AppDispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <CardReviewsStyled>
        <p onClick={() => setOpenModal(true)}>{`${props.review.substring(
          0,
          150
        )} ...`}</p>
        <div>
          <div>
            <img src="#" alt="" />
            <div className="name-user">
              <h5>
                {props.name} {props.last_name}
              </h5>
              <span>{props.hour}</span>
            </div>
          </div>
          <div className="container-icons">
            <CiCircleRemove
              className="icon-red"
              onClick={() => {
                dispatch(updateContactsApiThunk({ body: { ...props, archived: true } })),
                toast.success("Review archivada con éxito!");
              }}
            />
          </div>
        </div>
      </CardReviewsStyled>
      {openModal && (
        <ModalReviews review={props.review} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default CardReviews;
