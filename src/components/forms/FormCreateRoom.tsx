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
import { addRoom } from "../../features/rooms/roomsSlices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { RoomFormInterface } from "../../interfaces/rooms/roomFormInterface";

const FormCreateRoom = () => {
  const dispatch: AppDispatch = useDispatch();
  const random1: number = Math.floor(Math.random() * 999);
  const random2: number = Math.floor(Math.random() * 999);
  const idUnique = `ROOM${random1}-${random2}`;

  const initialStateForm = {
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    id: `${idUnique}`,
    roomType: "",
    roomNumber: "",
    description: "",
    offer: "",
    price: 0,
    discount: 0,
    cancellation: "",
    facilities: [],
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addRoom(formData));
    toast.success("Creado exitosamente");

    setFormData(initialStateForm);
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
          <img src={selectedImage} alt="" />
        ) : (
          <h1>Select an images</h1>
        )}
      </ContainerFormImageStyled>

      <LabelFormStyled>Images</LabelFormStyled>
      <InputFormStyled
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, "image1")}
        required
      />
      <InputFormStyled
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
      />
      <LabelFormStyled>
        Id
        <InputFormStyled
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          readOnly
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Room Type
        <SelectFormStyled
          name="roomType"
          value={formData.roomType}
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
          placeholder="Room Number..."
          type="text"
          name="roomNumber"
          value={formData.roomNumber}
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
        Offer
        <SelectFormStyled
          name="offer"
          value={formData.offer}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select an offer
          </option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </SelectFormStyled>
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

      <LabelFormStyled>
        Discount
        <InputFormStyled
          placeholder="Discount percentage..."
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>Cancellation</LabelFormStyled>
      <TextAreaFormStyled
        placeholder="Cancellation policy..."
        name="cancellation"
        value={formData.cancellation}
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

      <ButtonFormStyled type="submit">Crear</ButtonFormStyled>
    </FormStyled>
  );
};

export default FormCreateRoom;
