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
  DetailsLabelStyled,
  DetailsTextStyled,
} from "../componentsStyle/general/BookingDetailsStyled";
import { FaPhone } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { useSelector } from "react-redux";
import { getBookingsData } from "../features/bookings/bookingsSlices";
import { getRoomsData } from "../features/rooms/roomsSlices";

const BookingDetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const bookingsListData = useSelector(getBookingsData);
  const roomsListData = useSelector(getRoomsData);

  // useEffect(() => {
  //   const combinedData = [];
  //   const searchBooking = bookingsListData.find(
  //     (booking) => booking.idRoom === id
  //   );
  //   // console.log(searchBooking);

  //   const searchRoom = roomsListData.find((room) => room.id.toString() === id);
  //   if (searchBooking) {
  //     combinedData.push({
  //       ...searchBooking,
  //       ...searchRoom,
  //     });
  //   }
  //   setDetails(combinedData);
  // }, [id, bookingsListData, roomsListData]);






  useEffect(() => {
    console.log(bookingsListData);
    console.log(roomsListData);
  }, [id]);

  return (
    <h1>Hola soy {id}</h1>
    // <MainStyled>
    //   {details && (
    //     <BookingDetailsStyled>
    //       <DetailsTextStyled>
    //         <DetailsInfoPersonStyled>
    //           <div className="container-image-info">
    //             <img src={details.photo} alt="" />
    //             <div className="container-namebutton">
    //               <h1>{details.name}</h1>
    //               <h6>{details.id}</h6>
    //               <div className="container-phone">
    //                 <FaPhone />
    //                 <button className="container-phone__button">
    //                   <BiMessageSquareDetail className="container-phone__button__icon" />
    //                   Send Message
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //           <SlOptionsVertical />
    //         </DetailsInfoPersonStyled>
    //         <DetailsCheckStyled>
    //           <div className="box-check">
    //             <h6>Check in</h6>
    //             <h3>
    //               {details.checkin} | {details.checkinTime}
    //             </h3>
    //           </div>
    //           <div className="box-check">
    //             <h6>Check out</h6>
    //             <h3>
    //               {details.checkout} | {details.checkoutTime}
    //             </h3>
    //           </div>
    //         </DetailsCheckStyled>
    //         <DetailsInfoRoomStyled>
    //           <div className="container-room">
    //             <div className="container-room__info">
    //               <h6>Room Info</h6>
    //               <h3>{details.Room}</h3>
    //             </div>
    //             <div className="container-room__info">
    //               <h6>Price</h6>
    //               <h3>
    //                 ${details.price}
    //                 <span> /night</span>
    //               </h3>
    //             </div>
    //           </div>
    //           {details.notes ? <p>{details.notes}</p> : <h1>No notes</h1>}
    //         </DetailsInfoRoomStyled>
    //         <DetailsInfoFacilitiesStyled>
    //           <h6>Facilities</h6>
    //           <div className="container-buttons">
    //             {details.facilities.map((item) => (
    //               <DetailsButtonfacilitiesStyled>
    //                 {item}
    //               </DetailsButtonfacilitiesStyled>
    //             ))}
    //           </div>
    //         </DetailsInfoFacilitiesStyled>
    //       </DetailsTextStyled>

    //       <DetailsImageStyled>
    //         <div className="container-label">
    //           {details.status === "in" && (
    //             <DetailsLabelStyled type={details.status}>
    //               <p>booked</p>
    //             </DetailsLabelStyled>
    //           )}
    //           {details.status === "out" && (
    //             <DetailsLabelStyled type={details.status}>
    //               <p>free</p>
    //             </DetailsLabelStyled>
    //           )}
    //           {details.status === "pending" && (
    //             <DetailsLabelStyled type={details.status}>
    //               <p>pending</p>
    //             </DetailsLabelStyled>
    //           )}
    //         </div>
    //         <img src={details.photo} alt="" />
    //         <div className="container-text">
    //           <h1>Bed Room</h1>
    //           {details.notes ? (
    //             <p>{`${details.notes.slice(0, 100)}...`}</p>
    //           ) : (
    //             <h1>No notes</h1>
    //           )}
    //         </div>
    //       </DetailsImageStyled>
    //     </BookingDetailsStyled>
    //   )}
    // </MainStyled>
  );
};

export default BookingDetailsPage;
