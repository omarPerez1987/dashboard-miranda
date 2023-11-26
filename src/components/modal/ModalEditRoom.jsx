import React, { useState } from "react";
import {
  ModalFormStyle,
  ModalStyled,
  ContainerModalFlexStyle,
  ContainerModalImageStyle,
  ButtonModalStyled,
} from "../../componentsStyle/modal/ModalStyled";
import { ButtonFacilityForm } from "../../componentsStyle/forms/FormStyled";
import { CiCircleRemove } from "react-icons/ci";

const ModalEditRoom = ({ room, setOpenModal }) => {
  const initialStateForm = {
    id: room.id,
    image: room.photo,
    room: room.room,
    bed: room.bed,
    price: room.price,
    discount: room.discount,
    facilities: room.facilities,
    status: room.status,
  };

  const [formData, setFormData] = useState(initialStateForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos del formulario:", formData); // aki el dispatch
    // setFormData(initialStateForm)
  };

  const handleDelete = () => {}; //eliminar la room

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, image: file }));
  };

  const handleFacilityChange = (facility) => {
    setFormData((prevFormData) => {
      const facilities = [...prevFormData.facilities];

      if (facilities.includes(facility)) {
        facilities.splice(facilities.indexOf(facility), 1);
      } else {
        facilities.push(facility);
      }

      return { ...prevFormData, facilities };
    });
  };

  return (
    <ModalStyled onSubmit={handleSubmit}>
      <ModalFormStyle>
        <CiCircleRemove onClick={() => setOpenModal(false)} />
        <h1>EDIT ROOM</h1>
        <ContainerModalImageStyle>
          <img src={formData.image} alt="" />
        </ContainerModalImageStyle>

        <label>Photo</label>
        <input type="file" name="image" onChange={(e) => handleFileChange(e)} />

        <label>Room Name</label>
        <input
          placeholder="room name..."
          type="text"
          name="room"
          value={formData.room}
          onChange={handleChange}
          required
        />
        <label>Room Type</label>

        <select
          placeholder="bed type..."
          type="text"
          name="bed"
          value={formData.bed}
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
          value={formData.price}
          onChange={handleChange}
          required
        />
        <label>Offer Price</label>
        <input
          placeholder="offer price..."
          type="text"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
        />
        <label>Status</label>
        <select
          placeholder="status..."
          type="text"
          name="status"
          value={formData.status}
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
        <ContainerModalFlexStyle>
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
            <ButtonFacilityForm
              key={facility}
              type="button"
              label={facility}
              selected={formData.facilities.includes(facility)}
              onClick={() => handleFacilityChange(facility)}
            >
              {facility}
            </ButtonFacilityForm>
          ))}
        </ContainerModalFlexStyle>
        <ContainerModalFlexStyle>
          <ButtonModalStyled type="submit" color="edit">
            Edit
          </ButtonModalStyled>
          <ButtonModalStyled type="submit ">Delete</ButtonModalStyled>
        </ContainerModalFlexStyle>
      </ModalFormStyle>
    </ModalStyled>
  );
};

export default ModalEditRoom;
