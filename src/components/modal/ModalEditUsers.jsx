import React, { useState } from "react";
import {
  ModalFormStyle,
  ModalStyled,
  ContainerModalFlexStyle,
  ContainerModalImageStyle,
  ButtonModalStyled,
} from "../../componentsStyle/modal/ModalStyled";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/users/usersSlices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ModalEditUsers = ({ user, setOpenModal}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let initialStateForm = {
    photo: user.photo,
    id: user.id,
    name: user.name,
    email: user.email,
    startDate: user.startDate,
    description: user.description,
    phone: user.phone,
    status: user.status,
  };

  const [formData, setFormData] = useState(initialStateForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(formData));
    setOpenModal(false);
    toast.success('Usuario editado con exito!')
  };

  const handleDelete = () => {}; //eliminar la room

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({ ...prevFormData, image: file }));
  };

  return (
    <ModalStyled onSubmit={handleSubmit}>
      <ModalFormStyle>
        <CiCircleRemove onClick={() => setOpenModal(false)} />
        <h1>EDIT USER</h1>
        <ContainerModalImageStyle>
          <img src={formData.photo} alt="" />
        </ContainerModalImageStyle>

        <label>Photo</label>
        <input type="file" name="image" onChange={(e) => handleFileChange(e)} />

        <label>Full Name</label>
        <input
          placeholder="..."
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          placeholder="..."
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Start Date</label>
        <input
          placeholder="..."
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <textarea
          placeholder="..."
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <label>Contact</label>
        <input
          placeholder="..."
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Status</label>

        <select
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          {" "}
          <option value="" disabled>
            Select a status
          </option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>

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

export default ModalEditUsers;
