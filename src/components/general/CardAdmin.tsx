import React, { useState } from "react";
import logo from "../../../public/navMenu/logo.png";
import { CardAdminStyled } from "../../componentsStyle/general/CardAdminStyled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addAdmin } from "../../features/admin/adminSlice";

const CardAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.email === "test@test.com" && formData.password === "9999") {
      localStorage.setItem("formData", JSON.stringify(formData));
      navigate("/home/dashboard");
      dispatch(addAdmin(formData));
    } else {
      toast.error("Escribe correctamente los datos");
      setFormData(initialState);
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
