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
import { AppDispatch, useAppSelector } from "../app/store";
import { UsersInterfaces } from "../interfaces/users/usersInterfaces";
import { getUsersListApiThunk } from "../features/users/usersThunks";

const EditUsersPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const usersListData = useAppSelector<UsersInterfaces[]>(getUsersData);
  const { id } = useParams();
  const token = localStorage.getItem("adminToken") || undefined;

  const [user, setUser] = useState({
    _id: "",
    photo: "",
    name: "",
    email: "",
    startDate: "",
    description: "",
    phone: "",
    status: "",
  });

  useEffect(() => {
    if (Array.isArray(usersListData) && id) {
      const searchUser = usersListData.find((user) => user._id === id);
      if (searchUser) {
        setUser(searchUser);
      }
    }
  }, [usersListData, id]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await dispatch(
        getUsersListApiThunk({ method: "PUT", body: user, token })
      );
      toast.success("Usuario editado con éxito!");
      navigate("/home/users");
    } catch (error) {
      toast.error("Error al editar el usuario");
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
    toast.warn("Usuario eliminado con exito!");
    navigate("/home/users");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUser((prevUser) => ({ ...prevUser, image: file }));
    }
  };

  return (
    <EditStyled onSubmit={handleSubmit}>
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
              handleDelete(user._id);
            }}
          >
            Delete
          </ButtonModalStyled>
        </ContainerModalFlexStyled>
      </ModalFormStyled>
    </EditStyled>
  );
};

export default EditUsersPage;
