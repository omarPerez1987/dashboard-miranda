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
import { AppDispatch } from "../../app/store";
import { ModalEditAdminProps } from "../../interfaces/propsInterface/propsInterface";
import { faker } from "@faker-js/faker";

const ModalEditAdmin: React.FC<ModalEditAdminProps> = ({ setOpenModal }) => {
  const dispatch: AppDispatch = useDispatch();

  const initialStateForm = {
    photo: faker.image.avatarLegacy(),
    name: "",
    email: "test@test.com",
    password: "9999",
  };
  const [formData, setFormData] = useState(initialStateForm);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("dataAdmin", JSON.stringify(formData));
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
