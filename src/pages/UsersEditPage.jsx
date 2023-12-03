import React, { useEffect, useState } from "react";
import {
  ButtonModalStyled,
  EditStyled,
  ContainerModalFlexStyled,
  ModalFormStyled,
  ContainerModalImageStyled,
} from "../componentsStyle/modal/ModalStyled";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getUsersData,
  updateUser,
} from "../features/users/usersSlices";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UsersEditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersListData = useSelector(getUsersData);
  const { id } = useParams();

  const [user, setUser] = useState({
    id: "",
    photo: "",
    name: "",
    email: "",
    startDate: "",
    description: "",
    phone: "",
    status: "",
  });

  useEffect(() => {
    const searchUser = usersListData.find((user) => user.id.toString() === id);
    setUser(searchUser);
  }, [usersListData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event, user) => {
    event.preventDefault();
    dispatch(updateUser(user));
    toast.success("Usuario editado con exito!");
    navigate("/home/users");
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast.warn("Usuario eliminado con exito!");
    navigate("/home/users");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUser((prevUser) => ({ ...prevUser, image: file }));
  };

  return (
    <EditStyled onSubmit={(event) => handleSubmit(event, user)}>
      <ModalFormStyled>
        <CiCircleRemove onClick={() => navigate("/home/users")} />
        <h1>EDIT USER</h1>
        <ContainerModalImageStyled>
          <img src={user.photo} alt="" />
        </ContainerModalImageStyled>

        <label>Photo</label>
        <input type="file" name="image" onChange={(e) => handleFileChange(e)} />

        <label>Full Name</label>
        <input
          placeholder="..."
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          placeholder="..."
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <label>Start Date</label>
        <input
          placeholder="..."
          type="text"
          name="startDate"
          value={user.startDate}
          onChange={handleChange}
          required
        />
        <label>Description</label>
        <textarea
          placeholder="..."
          type="text"
          name="description"
          value={user.description}
          onChange={handleChange}
          required
        />
        <label>Contact</label>
        <input
          placeholder="..."
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          required
        />

        <label>Status</label>

        <select
          type="text"
          name="status"
          value={user.status}
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

        <ContainerModalFlexStyled>
          <ButtonModalStyled type="submit" color="edit">
            Edit
          </ButtonModalStyled>
          <ButtonModalStyled
            type="button"
            onClick={() => {
              handleDelete(user.id);
            }}
          >
            Delete
          </ButtonModalStyled>
        </ContainerModalFlexStyled>
      </ModalFormStyled>
    </EditStyled>
  );
};

export default UsersEditPage;
