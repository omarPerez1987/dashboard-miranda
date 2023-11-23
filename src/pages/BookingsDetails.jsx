import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingsDetails = () => {
  const { location } = useNavigate();
  console.log("Current Location:", location.pathname);

  const { id } = useParams();
  return (
    <>
      <div>{id}</div>
      <h1>hvbjkbjshvbjhsvb</h1>
    </>
  );
};

export default BookingsDetails;
