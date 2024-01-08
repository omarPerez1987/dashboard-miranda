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
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useDispatch } from "react-redux";
>>>>>>> 71934316653164d45b7ae8721a42e37f7d52f0cf
import {
  deleteBooking,
  getBookingsData,
  getBookingsStatus,
} from "../features/bookings/bookingsSlices";
import { getRoomsData, getRoomsStatus } from "../features/rooms/roomsSlices";
import { getBookingsListThunk } from "../features/bookings/bookingsThunks";
import { getRoomsListApiThunk } from "../features/rooms/roomsThunk";
import {
  ButtonModalStyled,
  ContainerModalFlexStyled,
} from "../componentsStyle/modal/ModalStyled";
import { toast } from "react-toastify";
<<<<<<< HEAD

const BookingDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const bookingsListData = useSelector(getBookingsData);
  const bookingsListStatus = useSelector(getBookingsStatus);
  const roomsListStatus = useSelector(getRoomsStatus);
  const roomsListData = useSelector(getRoomsData);
  const [spinner, setSpinner] = useState(true);

  const [details, setDetails] = useState({});
=======
import { AppDispatch, useAppSelector } from "../app/store";
import { BookingInterface } from "../interfaces/bookings/bookingsInterface";
import { RoomsInterface } from "../interfaces/rooms/roomsInterface";

const BookingDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const bookingsListData = useAppSelector<BookingInterface[]>(getBookingsData);
  const bookingsListStatus = useAppSelector<string>(getBookingsStatus);
  const roomsListStatus = useAppSelector<string>(getRoomsStatus);
  const roomsListData = useAppSelector<RoomsInterface[]>(getRoomsData);
  const [spinner, setSpinner] = useState<boolean>(true);

  const [details, setDetails] = useState<BookingInterface | undefined>();
>>>>>>> 71934316653164d45b7ae8721a42e37f7d52f0cf

  useEffect(() => {
    const fetchData = () => {
      if (bookingsListStatus === "idle") {
        dispatch(getBookingsListThunk());
        dispatch(getRoomsListApiThunk());
      } else if (bookingsListStatus && roomsListStatus === "pending") {
        setSpinner(true);
      } else if (bookingsListStatus && roomsListStatus === "fulfilled") {
        setSpinner(false);
        findMatchingBookingAndRoom();
      }
    };

    fetchData();
  }, [
    dispatch,
    bookingsListData,
    roomsListData,
    bookingsListStatus,
    roomsListStatus,
    id,
  ]);

  const findMatchingBookingAndRoom = () => {
    const matchedBooking = bookingsListData.find(
      (booking) => booking.idRoom === id
    );
    if (matchedBooking) {
      const correspondingRoom = roomsListData.find(
        (room) => room.id === matchedBooking.idRoom
      );

      if (correspondingRoom) {
        setDetails({
          ...matchedBooking,
          room: correspondingRoom.room,
          price: correspondingRoom.price,
          description: correspondingRoom.description,
          facilities: correspondingRoom.facilities,
          photo: correspondingRoom.photo,
          status: correspondingRoom.status,
        });
      }
    }
  };

  return (
    <>
      <MainStyled>
        {spinner ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {details && (
<<<<<<< HEAD
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
                        <h3>{details.room}</h3>
                      </div>
                      <div className="container-room__info">
                        <h6>Price</h6>
                        <h3>
                          ${details.price}
                          <span> /night</span>
                        </h3>
                      </div>
                    </div>
                    {details.notes ? <p>{details.notes}</p> : <h1>No notes</h1>}
                  </DetailsInfoRoomStyled>
                  <DetailsInfoFacilitiesStyled>
                    <h6>Facilities</h6>
                    <div className="container-buttons">
                      {details.facilities.map((item, index) => (
                        <DetailsButtonfacilitiesStyled key={index}>
                          {item}
                        </DetailsButtonfacilitiesStyled>
                      ))}
                    </div>
                  </DetailsInfoFacilitiesStyled>
                </DetailsTextStyled>

                <DetailsImageStyled>
                  <div className="container-label">
                    {details.status === "in" && (
                      <DetailsLabelStyled type={details.status}>
                        <p>booked</p>
                      </DetailsLabelStyled>
                    )}
                    {details.status === "out" && (
                      <DetailsLabelStyled type={details.status}>
                        <p>free</p>
                      </DetailsLabelStyled>
                    )}
                    {details.status === "pending" && (
                      <DetailsLabelStyled type={details.status}>
                        <p>pending</p>
                      </DetailsLabelStyled>
                    )}
                  </div>
                  <img src={details.photo} alt="" />
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
            )}
            <ContainerModalFlexStyled>
              <ButtonModalStyled
                type="submit"
                color="edit"
                onClick={() => navigate(`/home/edit-booking/${details.id}`)}
              >
                Edit
              </ButtonModalStyled>

              <ButtonModalStyled
                type="button"
                onClick={() => {
                  dispatch(deleteBooking(details.id)),
                    toast.warn("Reserva eliminada con éxito");
                  navigate("/home/bookings");
                }}
              >
                Delete
              </ButtonModalStyled>
            </ContainerModalFlexStyled>
=======
              <>
                <BookingDetailsStyled>
                  <DetailsTextStyled>
                    <DetailsInfoPersonStyled>
                      <div className="container-image-info">
                        <img src={details.photo || ""} alt="" />
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
                          <h3>{details.room}</h3>
                        </div>
                        <div className="container-room__info">
                          <h6>Price</h6>
                          <h3>
                            ${details.price}
                            <span> /night</span>
                          </h3>
                        </div>
                      </div>
                      {details.notes ? (
                        <p>{details.notes}</p>
                      ) : (
                        <h1>No notes</h1>
                      )}
                    </DetailsInfoRoomStyled>
                    {details.facilities && details.facilities.length > 0 ? (
                      <DetailsInfoFacilitiesStyled>
                        <h6>Facilities</h6>
                        <div className="container-buttons">
                          {details.facilities.map((item, index) => (
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
                      {details.status === "in" && (
                        <DetailsLabelStyled type={details.status}>
                          <p>booked</p>
                        </DetailsLabelStyled>
                      )}
                      {details.status === "out" && (
                        <DetailsLabelStyled type={details.status}>
                          <p>free</p>
                        </DetailsLabelStyled>
                      )}
                      {details.status === "pending" && (
                        <DetailsLabelStyled type={details.status}>
                          <p>pending</p>
                        </DetailsLabelStyled>
                      )}
                    </div>
                    <img src={details.photo || ""} alt="" />
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
                    onClick={() => navigate(`/home/edit-booking/${details.id}`)}
                  >
                    Edit
                  </ButtonModalStyled>

                  <ButtonModalStyled
                    type="button"
                    onClick={() => {
                      dispatch(deleteBooking(details.id)),
                        toast.warn("Reserva eliminada con éxito");
                      navigate("/home/bookings");
                    }}
                  >
                    Delete
                  </ButtonModalStyled>
                </ContainerModalFlexStyled>
              </>
            )}
>>>>>>> 71934316653164d45b7ae8721a42e37f7d52f0cf
          </>
        )}
      </MainStyled>
    </>
  );
};

export default BookingDetailsPage;
