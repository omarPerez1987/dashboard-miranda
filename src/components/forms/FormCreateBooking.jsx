import React, { useState } from "react";
import {
  ButtonFacilityForm,
  ButtonFormStyled,
  ContainerFacilitiesForm,
  FormStyled,
  InputFormStyled,
  LabelFormStyled,
  SelectFormStyled,
  TextAreaFormStyled,
} from "../../componentsStyle/forms/FormStyled";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const FormCreateBooking = () => {
    const dispatch = useDispatch();
    const random1 = Math.floor(Math.random() * 999);
    const random2 = Math.floor(Math.random() * 999);
    const idUnique = `BOOK${random1}-${random2}`;
    const initialStateForm = {
      id: `${idUnique}`,
      roomType: "",
      roomNumber: "",
      description: "",
      offer: "",
      price: "",
      discount: "",
      cancellation: "",
      facilities: [],
    };
    const [formData, setFormData] = useState(initialStateForm);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    //   dispatch(addRoom(formData));
      toast.success("Creado exitosamente");
  
      setFormData(initialStateForm);
    };
  
  
    const handleFacilityChange = (facility) => {
      setFormData((prevFormData) => {
        const facilities = [...prevFormData.facilities];
  
        if (facilities.includes(facility)) {
          facilities.splice(facilities.indexOf(facility), 1);
        } else {
          facilities.push(facility);
        }
  
        return { ...prevFormData, facilities };
      });
    };
  
    return (
      <FormStyled onSubmit={handleSubmit}>
        <LabelFormStyled>
          Id
          <InputFormStyled
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            readOnly
          />
        </LabelFormStyled>
  
        <LabelFormStyled>
          Room Type
          <SelectFormStyled
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a room type
            </option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Double Top">Double top</option>
            <option value="Suite">Suite</option>
          </SelectFormStyled>
        </LabelFormStyled>
  
        <LabelFormStyled>
          Room Number
          <InputFormStyled
            placeholder="Room Number..."
            type="text"
            name="roomNumber"
            value={formData.roomNumber}
            onChange={handleChange}
            required
          />
        </LabelFormStyled>
  
        <LabelFormStyled>Description</LabelFormStyled>
        <TextAreaFormStyled
          placeholder="Room description..."
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
  
        <LabelFormStyled>
          Offer
          <SelectFormStyled
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select an offer
            </option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </SelectFormStyled>
        </LabelFormStyled>
  
        <LabelFormStyled>
          Price
          <InputFormStyled
            placeholder="Price per night..."
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </LabelFormStyled>
  
        <LabelFormStyled>
          Discount
          <InputFormStyled
            placeholder="Discount percentage..."
            type="number"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            required
          />
        </LabelFormStyled>
  
        <LabelFormStyled>Cancellation</LabelFormStyled>
        <TextAreaFormStyled
          placeholder="Cancellation policy..."
          type="text"
          name="cancellation"
          value={formData.cancellation}
          onChange={handleChange}
          required
        />
  
        <LabelFormStyled>Facilities</LabelFormStyled>
  
        <ContainerFacilitiesForm>
          {[
            "Swimming Pool",
            "Air Conditioned",
            "Breakfast",
            "Cleaning",
            "Grocery",
            "Shop near",
            "24/7 Online Support",
            "Smart Security",
            "High speed WiFi",
            "Kitchen",
            "Shower relax",
            "Single bed",
            "Strong Locker",
          ].map((facility) => (
            <ButtonFacilityForm
              key={facility}
              type="button"
              label={facility}
              selected={formData.facilities.includes(facility)}
              onClick={() => handleFacilityChange(facility)}
            >
              {facility}
            </ButtonFacilityForm>
          ))}
        </ContainerFacilitiesForm>
  
        <ButtonFormStyled type="submit">Crear</ButtonFormStyled>
      </FormStyled>
    );
}

export default FormCreateBooking