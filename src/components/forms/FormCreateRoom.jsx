import React, { useState } from "react";
import {
  ButtonFormStyled,
  ContainerFormImage,
  FormStyled,
  InputFormStyled,
  LabelFormStyled,
  SelectFormStyled,
  TextAreaFormStyled,
} from "../../componentsStyle/forms/FormStyled";

const FormCreateRoom = () => {
  const random1 = Math.floor(Math.random() * 999);
  const random2 = Math.floor(Math.random() * 999);
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
    price: "",
    discount: "",
    cancellation: "",
    amenities: [],
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState(initialStateForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos del formulario:", formData);
    // setFormData(initialStateForm);
  };

  const handleImageChange = (event, imageKey) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [imageKey]: imageUrl,
      }));
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <ContainerFormImage>
        {selectedImage ? (
          <img src={selectedImage} alt="" />
        ) : (
          <h1>Select an images</h1>
        )}
      </ContainerFormImage>

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
        type="text"
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
        type="text"
        name="cancellation"
        value={formData.cancellation}
        onChange={handleChange}
        required
      />

      <LabelFormStyled>
        Amenities
        <SelectFormStyled
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
          multiple
          required
        >
          <option value="" disabled>
            Select amenities
          </option>
          <option value="Air">Air Conditioned</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Grocery">Grocery</option>
          <option value="Shop">Shop near</option>
          <option value="Online">24/7 Online Support</option>
          <option value="security">Smart Security</option>
          <option value="wifi">High speed WiFi</option>
          <option value="kitchen">Kitchen</option>
          <option value="shower">Shower relax</option>
          <option value="single">Single bed</option>
          <option value="locker">Strong Locker</option>
        </SelectFormStyled>
      </LabelFormStyled>

      <ButtonFormStyled type="submit">Crear</ButtonFormStyled>
    </FormStyled>
  );
};

export default FormCreateRoom;
