import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  ButtonFormStyled,
  FormStyled,
  InputFormStyled,
  LabelFormStyled,
  SelectFormStyled,
  TextAreaFormStyled,
} from "../../componentsStyle/forms/FormStyled";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getRoomsListApiThunk } from "../../features/rooms/roomsThunk";
import { addBooking } from "../../features/bookings/bookingsSlices";
import {
  getRoomsAvailable,
  getRoomsError,
  getRoomsStatus,
} from "../../features/rooms/roomsSlices";
import { SpinnerStyled } from "../../componentsStyle/general/SpinnerStyled";

const FormCreateBooking = () => {
  const random1 = Math.floor(Math.random() * 999);
  const random2 = Math.floor(Math.random() * 999);
  const idUnique = `BOOK${random1}-${random2}`;

  const dispatch = useDispatch();
  const roomsListStatus = useSelector(getRoomsStatus);
  const roomsListDataAvailable = useSelector(getRoomsAvailable);
  const roomslistError = useSelector(getRoomsError);
  const [spinner, setSpinner] = useState(true);
  const [availableRooms, setAvailableRooms] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      if (roomsListStatus === "idle") {
        dispatch(getRoomsListApiThunk());
      } else if (roomsListStatus === "pending") {
        setSpinner(true);
      } else if (roomsListStatus === "fulfilled") {
        setSpinner(false);
        setAvailableRooms(roomsListDataAvailable);
      }
    };

    fetchData();
  }, [dispatch, roomsListStatus]);

  const initialStateForm = {
    id: `${idUnique}`,
    name: "",
    orderDate: `${format(new Date(), "dd-MMM-yyyy")}`,
    orderTime: `${format(new Date(), "hh:mm aa")}`,
    checkin: "",
    checkinTime: "",
    checkout: "",
    checkoutTime: "",
    notes: "",
    idRoom: "",
    check: "",
  };
  const [formData, setFormData] = useState(initialStateForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBooking(formData));
    toast.success("Creado exitosamente");
    setFormData(initialStateForm);
  };

  return (
    <>
      {roomslistError ? (
        <h1>
          Hubo un error al obtener los datos de las habitaciones disponibles
        </h1>
      ) : (
        <>
          {spinner ? (
            <SpinnerStyled />
          ) : (
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
                Name and Surname
                <InputFormStyled
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </LabelFormStyled>

              <LabelFormStyled>
                Order Date
                <InputFormStyled
                  type="text"
                  name="orderDate"
                  value={formData.orderDate}
                  onChange={handleChange}
                  readOnly
                />
              </LabelFormStyled>
              <LabelFormStyled>
                Order Time
                <InputFormStyled
                  type="text"
                  name="orderTime"
                  value={formData.orderTime}
                  onChange={handleChange}
                  readOnly
                />
              </LabelFormStyled>

              <LabelFormStyled>
                Check In
                <InputFormStyled
                  type="date"
                  name="checkin"
                  value={formData.checkin}
                  onChange={handleChange}
                  required
                />
              </LabelFormStyled>

              <LabelFormStyled>
                Check In Time
                <InputFormStyled
                  type="time"
                  name="checkinTime"
                  value={formData.checkinTime}
                  onChange={handleChange}
                  required
                />
              </LabelFormStyled>

              <LabelFormStyled>
                Check Out
                <InputFormStyled
                  type="date"
                  name="checkout"
                  value={formData.checkout}
                  onChange={handleChange}
                  required
                />
              </LabelFormStyled>

              <LabelFormStyled>
                Check Out Time
                <InputFormStyled
                  type="time"
                  name="checkoutTime"
                  value={formData.checkoutTime}
                  onChange={handleChange}
                  required
                />
              </LabelFormStyled>

              <LabelFormStyled>Special Request</LabelFormStyled>
              <TextAreaFormStyled
                placeholder="Special Request..."
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />

              <LabelFormStyled>
                Rooms Available
                <SelectFormStyled
                  name="idRoom"
                  value={formData.idRoom}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a room available
                  </option>
                  {availableRooms &&
                    availableRooms.map((rooms) => (
                      <option value={rooms.id} key={rooms.id}>
                        {rooms.room}, ({rooms.bed})
                      </option>
                    ))}
                </SelectFormStyled>
              </LabelFormStyled>

              <LabelFormStyled>
                Status
                <SelectFormStyled
                  name="check"
                  value={formData.check}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="in">Check In</option>
                  <option value="out">Check Out</option>
                  <option value="pending">Pending</option>
                </SelectFormStyled>
              </LabelFormStyled>

              <ButtonFormStyled type="submit">Crear</ButtonFormStyled>
            </FormStyled>
          )}
        </>
      )}
    </>
  );
};

export default FormCreateBooking;
