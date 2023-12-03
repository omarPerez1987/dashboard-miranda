import React, { useState } from "react";
import { CardUserStyled } from "../../componentsStyle/general/CardUserStyled";
import { useNavigate } from "react-router-dom";
import User from "../../../public/cardUser/bxs-user.svg";

const CardAdmin = () => {
  const navigate = useNavigate();
  const random1 = Math.floor(Math.random() * 999);
  const random2 = Math.floor(Math.random() * 999);
  const idUnique = `CL${random1}-${random2}`;

  const initialState = {
    id: `${idUnique}`,
    name: "",
    lastName: "",
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
      navigate("/home/dashboard");
    } else {
      alert("Escribe correctamente los datos");
      setFormData(initialState);
    }
  };

  return (
    <>
      <CardUserStyled>
        <img className="card-img" src={User} alt="" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
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

export default CardAdmin;
