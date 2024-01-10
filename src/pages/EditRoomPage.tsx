import React, { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRoomsData } from "../features/rooms/roomsSlices";
import {
  ButtonModalStyled,
  ContainerModalFlexStyled,
  ContainerModalImageStyled,
  EditStyled,
  ModalFormStyled,
} from "../componentsStyle/modal/ModalStyled";
import { ButtonFacilityFormStyled } from "../componentsStyle/forms/FormStyled";
import { toast } from "react-toastify";
import { AppDispatch, useAppSelector } from "../app/store";
import { RoomsInterface } from "../interfaces/rooms/roomsInterface";
import {
  deleteRoomApiThunk,
  updateRoomApiThunk,
} from "../features/rooms/roomsThunk";

const EditRoomPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const roomsListData = useAppSelector<RoomsInterface[]>(getRoomsData);
  const { id } = useParams();

  const [room, setRoom] = useState<RoomsInterface>({
    bed: "",
    cancel: "",
    description: "",
    discount: 0,
    facilities: [],
    _id: "",
    photo: "",
    price: 0,
    room: "",
    status: "",
  });

  useEffect(() => {
    const searchRoom = roomsListData.find((room) => room._id.toString() === id);
    if (searchRoom) {
      setRoom(searchRoom);
    }
  }, [roomsListData, id]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setRoom((prevRoomData) => ({ ...prevRoomData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await dispatch(updateRoomApiThunk({ body: room }));
      toast.success("Habitación editada con éxito");
      navigate("/home/rooms");
    } catch (error) {
      toast.error("Error al editar la habitación");
    }
  };

  const handleDelete = async (_id: string) => {
    try {
      await dispatch(deleteRoomApiThunk({ _id }));
      toast.warn("Habitación eliminada con éxito!");
      navigate("/home/rooms");
    } catch (error) {
      toast.error("Error al eliminar la habitación");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      setRoom((prevRoomData) => ({ ...prevRoomData, image: file }));
    }
  };

  const handleFacilityChange = (facility: string) => {
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
    <EditStyled onSubmit={handleSubmit}>
      <ModalFormStyled>
        <CiCircleRemove onClick={() => navigate("/home/rooms")} />
        <h1>EDIT ROOM</h1>
        <ContainerModalImageStyled>
          <img src={room.photo || ""} alt="" />
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
              handleDelete(room._id);
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
