import React, { useState } from "react";
import logo from "../../../public/navMenu/logo.png";
import { CardAdminStyled } from "../../componentsStyle/general/CardAdminStyled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addAdmin, getToken } from "../../features/admin/adminSlice";
import { getAdminTokenThunk } from "../../features/admin/adminThunk";
import { AppDispatch, useAppSelector } from "../../app/store";

const CardAdmin = () => {
  const dispatch: AppDispatch = useDispatch();
  const token = useAppSelector<string | undefined>(getToken);
  const navigate = useNavigate();

  console.log(token);

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = formData;

    try {
      if (!token) {
        await dispatch(
          getAdminTokenThunk({
            method: "POST",
            body: { email, password },
          })
        );
      } else {
        localStorage.setItem("adminToken", token);
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate("/home/dashboard");
        dispatch(addAdmin(formData));
      }
    } catch (error) {
      console.error("Error al obtener el token:", error);
      toast.error("Error al obtener el token");
    }
  };

  return (
    <>
      <CardAdminStyled>
        <img className="logo-login" src={logo} alt="" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name..."
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password..."
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="submit">Entrar</button>
        </form>
      </CardAdminStyled>
    </>
  );
};

export default CardAdmin;
