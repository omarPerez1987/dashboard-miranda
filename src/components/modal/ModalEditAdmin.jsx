import React, { useState } from "react";
import {
  ModalFormStyled,
  ModalStyled,
} from "../../componentsStyle/modal/ModalStyled";
import { ButtonFormStyled } from "../../componentsStyle/forms/FormStyled";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { updateAdmin } from "../../features/admin/adminSlice";
import { toast } from "react-toastify";

const ModalEditAdmin = ({ setOpenModal }) => {
  const dispatch = useDispatch();

  const initialStateForm = {
    name: "",
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
    localStorage.setItem("formData", JSON.stringify(formData));
    dispatch(updateAdmin(formData));
    toast.success("Editado con éxito");
    setOpenModal(false);
  };
  return (
    <ModalStyled onSubmit={handleSubmit}>
      <ModalFormStyled>
        <CiCircleRemove onClick={() => setOpenModal(false)} />
        <h1>EDIT YOURSELF</h1>

        <label>Name and Surname</label>
        <input
          placeholder="name..."
          type="text"
          name="name"
          value={formData.name}
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
      </ModalFormStyled>
    </ModalStyled>
  );
};

export default ModalEditAdmin;
