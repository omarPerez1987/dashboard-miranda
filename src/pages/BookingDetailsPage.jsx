import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bookings from "../../src/JSON/bookings.json";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import {
  BookingDetailsStyled,
  DetailsImageStyled,
  DetailsInfoFacilitiesStyled,
  DetailsInfoPersonStyled,
  DetailsInfoRoomStyled,
  DetailsTextStyled,
} from "../componentsStyle/general/BookingDetailsStyled";

const BookingDetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  console.log(details);

  useEffect(() => {
    const searchBooking = bookings.find(
      (booking) => booking.id.toString() === id
    );
    setDetails(searchBooking);
  }, []);

  return (
    <MainStyled>
      <BookingDetailsStyled>
        <DetailsTextStyled>
          <DetailsInfoPersonStyled></DetailsInfoPersonStyled>
          <DetailsInfoRoomStyled></DetailsInfoRoomStyled>
          <DetailsInfoFacilitiesStyled></DetailsInfoFacilitiesStyled>
        </DetailsTextStyled>
        <DetailsImageStyled>
          
        </DetailsImageStyled>
      </BookingDetailsStyled>
    </MainStyled>
  );
};

export default BookingDetailsPage;
