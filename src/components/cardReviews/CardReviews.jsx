import React from "react";
import { CardReviewsStyled } from "../../componentsStyle/cardReviews/CardreviewsStyled";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";

const CardReviews = () => {
  return (
    <CardReviewsStyled>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <div>
        <div>
          <img src="#" alt="" />
          <div className="name-user">
            <h5>Kusnaidi Anderson</h5>
            <span>4m ago</span>
          </div>
        </div>
        <div className="container-icons">
          <CiCircleCheck />
          <CiCircleRemove className="icon-red" />
        </div>
      </div>
    </CardReviewsStyled>
  );
};

export default CardReviews;
