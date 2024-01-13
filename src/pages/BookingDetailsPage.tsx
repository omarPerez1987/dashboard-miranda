import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainStyled } from "../componentsStyle/general/MainStyled";
import {
  BookingDetailsStyled,
  DetailsButtonfacilitiesStyled,
  DetailsCheckStyled,
  DetailsImageStyled,
  DetailsInfoFacilitiesStyled,
  DetailsInfoPersonStyled,
  DetailsInfoRoomStyled,
  DetailsLabelStyled,
  DetailsTextStyled,
} from "../componentsStyle/general/BookingDetailsStyled";
import { FaPhone } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { getBookingsData } from "../features/bookings/bookingsSlices";
import {
  ButtonModalStyled,
  ContainerModalFlexStyled,
} from "../componentsStyle/modal/ModalStyled";
import { toast } from "react-toastify";
import { AppDispatch, useAppSelector } from "../app/store";
import { BookingInterface } from "../interfaces/bookings/bookingsInterface";
import { deleteBookingApiThunk } from "../features/bookings/bookingsThunks";

const BookingDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const bookingsListData = useAppSelector<BookingInterface[]>(getBookingsData);
  const [details, setDetails] = useState<BookingInterface>();

  useEffect(() => {
    searchBooking();
  }, [id]);

  const searchBooking = () => {
    if (id) {
      const result = bookingsListData.find((element) => element._id === id);
      setDetails(result);
    }
  };

  const handleDelete = async (_id: string) => {
    try {
      await dispatch(deleteBookingApiThunk({ _id }));
      toast.warn("Reserva eliminada con éxito!");
      navigate("/home/bookings");
    } catch (error) {
      toast.error("Error al eliminar la reserva");
    }
  };

  return (
    <>
      <MainStyled>
        {details && (
          <>
            <BookingDetailsStyled>
              <DetailsTextStyled>
                <DetailsInfoPersonStyled>
                  <div className="container-image-info">
                    <img src={details.dataRoom.photo || ""} alt="" />
                    <div className="container-namebutton">
                      <h1>{details.name}</h1>
                      <h6>{details._id}</h6>
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
                      <h3>{details.dataRoom.room}</h3>
                    </div>
                    <div className="container-room__info">
                      <h6>Price</h6>
                      <h3>
                        ${details.dataRoom.price}
                        <span> /night</span>
                      </h3>
                    </div>
                  </div>
                  {details.notes ? <p>{details.notes}</p> : <h1>No notes</h1>}
                </DetailsInfoRoomStyled>
                {details.dataRoom.facilities &&
                details.dataRoom.facilities.length > 0 ? (
                  <DetailsInfoFacilitiesStyled>
                    <h6>Facilities</h6>
                    <div className="container-buttons">
                      {details.dataRoom.facilities.map((item, index) => (
                        <DetailsButtonfacilitiesStyled key={index}>
                          {item}
                        </DetailsButtonfacilitiesStyled>
                      ))}
                    </div>
                  </DetailsInfoFacilitiesStyled>
                ) : (
                  <p>No facilities available</p>
                )}
              </DetailsTextStyled>

              <DetailsImageStyled>
                <div className="container-label">
                  {}
                  {details.check === "pending" && (
                    <DetailsLabelStyled type={"booked"}>
                      <p>booked</p>
                    </DetailsLabelStyled>
                  )}
                  {details.check === "checked-in" && (
                    <DetailsLabelStyled type={"booked"}>
                      <p>booked</p>
                    </DetailsLabelStyled>
                  )}
                  {details.check === "checked-out" && (
                    <DetailsLabelStyled type={"available"}>
                      <p>available</p>
                    </DetailsLabelStyled>
                  )}
                </div>
                <img src={details.dataRoom.photo || ""} alt="" />
                <div className="container-text">
                  <h1>Bed Room</h1>
                  {details.notes ? (
                    <p>{`${details.notes.slice(0, 100)}...`}</p>
                  ) : (
                    <h1>No notes</h1>
                  )}
                </div>
              </DetailsImageStyled>
            </BookingDetailsStyled>
            <ContainerModalFlexStyled>
              <ButtonModalStyled
                type="submit"
                color="edit"
                onClick={() => navigate(`/home/edit-booking/${details._id}`)}
              >
                Edit
              </ButtonModalStyled>

              <ButtonModalStyled
                type="button"
                onClick={() => handleDelete(details._id)}
              >
                Delete
              </ButtonModalStyled>
            </ContainerModalFlexStyled>
          </>
        )}
      </MainStyled>
    </>
  );
};

export default BookingDetailsPage;
