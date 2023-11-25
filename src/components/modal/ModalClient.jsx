import React, { useState } from "react";
import {
  ModalFormStyle,
  ModalStyled,
} from "../../componentsStyle/modal/ModalStyled";
import { ButtonFormStyled } from "../../componentsStyle/forms/FormStyled";
import { CiCircleRemove } from "react-icons/ci";

const ModalClient = ({ setOpenModal }) => {
  const initialStateForm = {
    id: ``,
    image: null,
    name: "",
    lastName: "",
    email: "test@test.com",
    password: "9999",
  };
  const [formData, setFormData] = useState(initialStateForm);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos del formulario:", formData); //aki el dispatch
    // setFormData(initialStateForm)
  };
  return (
    <ModalStyled onSubmit={handleSubmit}>
      <ModalFormStyle>
        <CiCircleRemove onClick={() => setOpenModal(false)} />
        <h1>EDIT YOURSELF</h1>
        <div>
          <img src="" alt="" />
        </div>
        <label>Photo</label>
        <input type="file" />
        <label>Name</label>
        <input
          placeholder="name..."
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Last Name</label>
        <input
          placeholder="lastname..."
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          placeholder="email..."
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled
          readOnly
        />
        <label>Password</label>
        <input
          placeholder="password..."
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          disabled
          readOnly
        />
        <ButtonFormStyled type="submit">Edit</ButtonFormStyled>
      </ModalFormStyle>
    </ModalStyled>
  );
};

export default ModalClient;
