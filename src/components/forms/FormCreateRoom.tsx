import React, { useState } from "react";
import {
  ButtonFacilityFormStyled,
  ButtonFormStyled,
  ContainerFacilitiesFormStyled,
  ContainerFormImageStyled,
  FormStyled,
  InputFormStyled,
  LabelFormStyled,
  SelectFormStyled,
  TextAreaFormStyled,
} from "../../componentsStyle/forms/FormStyled";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { RoomFormInterface } from "../../interfaces/rooms/roomFormInterface";
import { createRoomApiThunk } from "../../features/rooms/roomsThunk";
import { useNavigate } from "react-router-dom";

const FormCreateRoom = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const initialStateForm = {
    photo: null,
    // image2: null,
    // image3: null,
    // image4: null,
    // image5: null,
    room: "",
    bed: "",
    facilities: [],
    description: "",
    price: 0,
    discount: 0,
    cancel: "",
    status: "",
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState<RoomFormInterface>(initialStateForm);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dispatch(createRoomApiThunk({ body: formData }));
      toast.success("Creado exitosamente");
      navigate("/home/rooms");
    } catch (error) {
      toast.error("Error al crear la habitación");
    }
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    imageKey: string
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [imageKey]: imageUrl,
      }));
    }
  };

  const handleFacilityChange = (facility: string) => {
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
    <FormStyled onSubmit={handleSubmit}>
      <ContainerFormImageStyled>
        {selectedImage ? (
          <img src={selectedImage} alt=""/>
        ) : (
          <h1>Select an images</h1>
        )}
      </ContainerFormImageStyled>

      <LabelFormStyled>Images</LabelFormStyled>
      <InputFormStyled
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, "photo")}
        required
      />
      {/* <InputFormStyled
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, "image2")}
        required
      />
      <InputFormStyled
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, "image3")}
        required
      />
      <InputFormStyled
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, "image4")}
      />
      <InputFormStyled
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, "image5")}
      /> */}

      <LabelFormStyled>
        Room Type
        <SelectFormStyled
          name="room"
          value={formData.room}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a room type
          </option>
          <option value="Single Bed">Single Bed</option>
          <option value="Double Bed">Double Bed</option>
          <option value="Double Top">Double top</option>
          <option value="Suite">Suite</option>
        </SelectFormStyled>
      </LabelFormStyled>

      <LabelFormStyled>
        Room Number
        <InputFormStyled
          placeholder="Example: E-15"
          type="text"
          name="bed"
          value={formData.bed}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>Description</LabelFormStyled>
      <TextAreaFormStyled
        placeholder="Room description..."
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <LabelFormStyled>
        Discount
        <InputFormStyled
          placeholder="discount..."
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>
      <LabelFormStyled>
        Price
        <InputFormStyled
          placeholder="Price per night..."
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>Cancellation</LabelFormStyled>
      <TextAreaFormStyled
        placeholder="Cancellation policy..."
        name="cancel"
        value={formData.cancel}
        onChange={handleChange}
        required
      />

      <LabelFormStyled>Facilities</LabelFormStyled>

      <ContainerFacilitiesFormStyled>
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
          selected={formData.facilities.includes(facility)}
          onClick={() => handleFacilityChange(facility)}
          >
            {facility}
          </ButtonFacilityFormStyled>
        ))}
      </ContainerFacilitiesFormStyled>

          <LabelFormStyled>
            Status
            <SelectFormStyled
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a status
              </option>
              <option value={"available"}>AVAILABLE</option>
              <option value={"booked"}>BOOKED</option>
            </SelectFormStyled>
          </LabelFormStyled>
      <ButtonFormStyled type="submit">Crear</ButtonFormStyled>
    </FormStyled>
  );
};

export default FormCreateRoom;
