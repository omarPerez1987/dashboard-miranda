import React, { useState } from "react";
import {
  ButtonFormStyled,
  ContainerFormImageStyled,
  FormStyled,
  InputFormStyled,
  LabelFormStyled,
  SelectFormStyled,
  TextAreaFormStyled,
} from "../../componentsStyle/forms/FormStyled";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { AppDispatch } from "../../app/store";
// import { UsersInterfaces } from "../../interfaces/users/usersInterfaces";
import { createUserApiThunk } from "../../features/users/usersThunks";
import { useNavigate } from "react-router-dom";

const FormCreateUser = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const token = localStorage.getItem("adminToken") || undefined;

  const initialStateForm = {
    photo: "",
    name: "",
    email: "",
    phone: "",
    description: "",
    status: "",
    startDate: "",
    position: "",
    password: "",
  };
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialStateForm);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await dispatch(createUserApiThunk({ body: formData, token }));
      toast.success("Creado exitosamente");
      navigate("/home/users");
    } catch (error) {
      toast.error("Error al crear el usuario");
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFormData((prevFormData) => ({ ...prevFormData, photo: imageUrl }));
    }
  };
  

  return (
    <FormStyled onSubmit={handleSubmit}>
      <ContainerFormImageStyled>
        {selectedImage ? (
          <img src={selectedImage} alt="" />
        ) : (
          <h1>Select an image</h1>
        )}
      </ContainerFormImageStyled>

      <LabelFormStyled>
        Image
        <InputFormStyled
          type="file"
          accept="photo/*"
          onChange={handleImageChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Name
        <InputFormStyled
          placeholder="name..."
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Position
        <SelectFormStyled
          name="position"
          id=""
          value={formData.position}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a position
          </option>
          <option value="Manager">MANAGER</option>
          <option value="Reception">RECEPTION</option>
          <option value="Service">SERVICE</option>
        </SelectFormStyled>
      </LabelFormStyled>

      <LabelFormStyled>
        Email
        <InputFormStyled
          placeholder="email..."
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Phone number
        <InputFormStyled
          placeholder="phone..."
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>
        Start Date
        <InputFormStyled
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <LabelFormStyled>Functions description</LabelFormStyled>
      <TextAreaFormStyled
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <LabelFormStyled>
        Status
        <SelectFormStyled
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a status
          </option>
          <option value={"active"}>ACTIVE</option>
          <option value={"false"}>INACTIVE</option>
        </SelectFormStyled>
      </LabelFormStyled>

      <LabelFormStyled>
        Password
        <InputFormStyled
          placeholder="password..."
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </LabelFormStyled>

      <ButtonFormStyled type="submit">Crear</ButtonFormStyled>
    </FormStyled>
  );
};

export default FormCreateUser;
