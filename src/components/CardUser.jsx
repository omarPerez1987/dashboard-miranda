import React, { useState } from "react";
import { CardUserStyled } from "../componentsStyle/CardUserStyled";
import { useNavigate } from "react-router-dom";

const CardUser = () => {
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "test@test.com" && formData.password === "9999") {
      localStorage.setItem("formData", JSON.stringify(formData));
      navigate("/dashboard");
    } else {
      alert("Escribe correctamente los datos");
      setFormData(initialState);
    }
  };

  return (
    <>
      <CardUserStyled>
        <img src="../../public/cardUser/bxs-user.svg" alt="" />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="submit">Entrar</button>
        </form>
      </CardUserStyled>
    </>
  );
};

export default CardUser;
