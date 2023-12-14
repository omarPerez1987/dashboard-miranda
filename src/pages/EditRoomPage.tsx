import React, { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRoom,
  getRoomsData,
  updateRoom,
} from "../features/rooms/roomsSlices";
import {
  ButtonModalStyled,
  ContainerModalFlexStyled,
  ContainerModalImageStyled,
  EditStyled,
  ModalFormStyled,
} from "../componentsStyle/modal/ModalStyled";
import { ButtonFacilityFormStyled } from "../componentsStyle/forms/FormStyled";
import { toast } from "react-toastify";

const EditRoomPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomsListData = useSelector(getRoomsData);
  const { id } = useParams();

  const [room, setRoom] = useState({
    bed: "",
    cancel: "",
    description: "",
    discount: "",
    facilities: "",
    id: "",
    photo: "",
    price: "",
    room: "",
    status: "",
  });

  useEffect(() => {
    const searchRoom = roomsListData.find((room) => room.id.toString() === id);
    setRoom(searchRoom);
  }, [roomsListData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRoom((prevRoomData) => ({ ...prevRoomData, [name]: value }));
  };

  const handleSubmit = (event, room) => {
    event.preventDefault();
    dispatch(updateRoom(room));
    toast.success("Habitación editada con exito!");
    navigate("/home/rooms");
  };

  const handleDelete = (id) => {
    dispatch(deleteRoom(id));
    toast.warn("Habitación eliminada con exito!");
    navigate("/home/rooms");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setRoom((prevRoomData) => ({ ...prevRoomData, image: file }));
  };

  const handleFacilityChange = (facility) => {
    setRoom((prevRoomData) => {
      const facilities = [...prevRoomData.facilities];

      if (facilities.includes(facility)) {
        facilities.splice(facilities.indexOf(facility), 1);
      } else {
        facilities.push(facility);
      }

      return { ...prevRoomData, facilities };
    });
  };

  return (
    <EditStyled onSubmit={(event) => handleSubmit(event, room)}>
      <ModalFormStyled>
        <CiCircleRemove onClick={() => navigate("/home/rooms")} />
        <h1>EDIT ROOM</h1>
        <ContainerModalImageStyled>
          <img src={room.image} alt="" />
        </ContainerModalImageStyled>

        <label>Photo</label>
        <input type="file" name="image" onChange={(e) => handleFileChange(e)} />

        <label>Room Name</label>
        <input
          placeholder="room name..."
          type="text"
          name="room"
          value={room.room}
          onChange={handleChange}
          required
        />
        <label>Room Type</label>

        <select
          placeholder="bed type..."
          type="text"
          name="bed"
          value={room.bed}
          onChange={handleChange}
          required
        >
          {" "}
          <option value="" disabled>
            Select a room type
          </option>
          <option value="Single Bed">Single Bed</option>
          <option value="Double Bed">Double Bed</option>
          <option value="Double Top">Double top</option>
          <option value="Suite">Suite</option>{" "}
        </select>

        <label>Price</label>
        <input
          placeholder="price..."
          type="text"
          name="price"
          value={room.price}
          onChange={handleChange}
          required
        />
        <label>Offer Price</label>
        <input
          placeholder="offer price..."
          type="text"
          name="discount"
          value={room.discount}
          onChange={handleChange}
        />
        <label>Status</label>
        <select
          placeholder="status..."
          type="text"
          name="status"
          value={room.status}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a room type
          </option>
          <option value="Available">Available</option>
          <option value="Booked">Bokked</option>
        </select>
        <label>Facilities</label>
        <ContainerModalFlexStyled>
          {[
            "Swimming Pool",
            "Air Conditioned",
            "Breakfast",
            "Cleaning",
            "Grocery",
            "Shop near",
            "24/7 Online Support",
            "Smart Security",
            "High speed WiFi",
            "Kitchen",
            "Shower relax",
            "Single bed",
            "Strong Locker",
          ].map((facility) => (
            <ButtonFacilityFormStyled
              key={facility}
              type="button"
              label={facility}
              selected={room.facilities.includes(facility)}
              onClick={() => handleFacilityChange(facility)}
            >
              {facility}
            </ButtonFacilityFormStyled>
          ))}
        </ContainerModalFlexStyled>
        <ContainerModalFlexStyled>
          <ButtonModalStyled type="submit" color="edit">
            Edit
          </ButtonModalStyled>
          <ButtonModalStyled
            type="button"
            onClick={() => {
              handleDelete(room.id);
            }}
          >
            Delete
          </ButtonModalStyled>
        </ContainerModalFlexStyled>
      </ModalFormStyled>
    </EditStyled>
  );
};

export default EditRoomPage;
