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
import { addUser } from "../../features/users/usersSlices";
import { useDispatch } from "react-redux";

const FormCreateUser = () => {
  const dispatch = useDispatch();
  const random1 = Math.floor(Math.random() * 999);
  const random2 = Math.floor(Math.random() * 999);
  const idUnique = `EMPL${random1}-${random2}`;
  const initialStateForm = {
    image: null,
    name: "",
    id: `${idUnique}`,
    lastName: "",
    position: "",
    email: "",
    phone: "",
    startDate: "",
    description: "",
    status: "",
    password: "",
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState(initialStateForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(formData))
    // console.log("Datos del formulario:", formData); //aki el dispatch
    setFormData(initialStateForm)
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFormData((prevFormData) => ({ ...prevFormData, image: imageUrl }));
    }
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <ContainerFormImage>
        {selectedImage ? (
          <img src={selectedImage} alt="" />
        ) : (
          <h1>Select an image</h1>
        )}
      </ContainerFormImage>

      <LabelFormStyled>
        Image
        <InputFormStyled
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Id
        <InputFormStyled
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Name
        <InputFormStyled
          placeholder="name..."
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Last name
        <InputFormStyled
          placeholder="last name..."
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Position
        <SelectFormStyled
          name="position"
          id=""
          value={formData.position}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a position
          </option>
          <option value="Manager">MANAGER</option>
          <option value="Reception">RECEPTION</option>
          <option value="Service">SERVICE</option>
        </SelectFormStyled>
      </LabelFormStyled>

      <LabelFormStyled>
        Email
        <InputFormStyled
          placeholder="email..."
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Phone number
        <InputFormStyled
          placeholder="phone..."
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Start Date
        <InputFormStyled
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>Functions description</LabelFormStyled>
      <TextAreaFormStyled
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <LabelFormStyled>
        Status
        <SelectFormStyled
          name="status"
          //   defaultValue='true'
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a status
          </option>
          <option value={true}>ACTIVE</option>
          <option value={false}>INACTIVE</option>
        </SelectFormStyled>
      </LabelFormStyled>

      <LabelFormStyled>
        Password
        <InputFormStyled
          placeholder="password..."
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <ButtonFormStyled type="submit">Crear</ButtonFormStyled>
    </FormStyled>
  );
};

export default FormCreateUser;
