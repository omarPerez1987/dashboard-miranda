import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import {
  BookingDetailsStyled,
  DetailsButtonfacilitiesStyled,
  DetailsCheckStyled,
  DetailsImageStyled,
  DetailsInfoFacilitiesStyled,
  DetailsInfoPersonStyled,
  DetailsInfoRoomStyled,
  DetailsTextStyled,
} from "../componentsStyle/general/BookingDetailsStyled";
import bookings from "../../src/JSON/bookings.json";
import { FaPhone } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";

const BookingDetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  // console.log(details);

  useEffect(() => {
    const searchBooking = bookings.find(
      (booking) => booking.id.toString() === id
    );
    setDetails(searchBooking);
  }, []);

  return (
    <MainStyled>
      {details && (
        <BookingDetailsStyled>
          <DetailsTextStyled>
            <DetailsInfoPersonStyled>
              <div className="container-image-info">
                <img src={details.photo} alt="" />
                <div className="container-namebutton">
                  <h1>{details.name}</h1>
                  <h6>{details.id}</h6>
                  <div className="container-phone">
                    <FaPhone />
                    <button className="container-phone__button">
                      <BiMessageSquareDetail className="container-phone__button__icon" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
              <SlOptionsVertical />
            </DetailsInfoPersonStyled>
            <DetailsCheckStyled>
              <div className="box-check">
                <h6>Check in</h6>
                <h3>
                  {details.checkin} | {details.checkinTime}
                </h3>
              </div>
              <div className="box-check">
                <h6>Check out</h6>
                <h3>
                  {details.checkout} | {details.checkoutTime}
                </h3>
              </div>
            </DetailsCheckStyled>
            <DetailsInfoRoomStyled>
              <div className="container-room">
                <div className="container-room__info">
                  <h6>Room Info</h6>
                  <h3>{details.Room}</h3>
                </div>
                <div className="container-room__info">
                  <h6>Price</h6>
                  <h3>
                    ${details.price}
                    <span> /night</span>
                  </h3>
                </div>
              </div>
              <p>{details.notes}</p>
            </DetailsInfoRoomStyled>
            <DetailsInfoFacilitiesStyled>
              <h6>Facilities</h6>
              <div className="container-buttons">
                {details.facilities.map((item) => (
                  <DetailsButtonfacilitiesStyled>
                    {item}
                  </DetailsButtonfacilitiesStyled>
                ))}
              </div>
            </DetailsInfoFacilitiesStyled>
          </DetailsTextStyled>
          <DetailsImageStyled></DetailsImageStyled>
        </BookingDetailsStyled>
      )}
    </MainStyled>
  );
};

export default BookingDetailsPage;
