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
import { useDispatch } from "react-redux";
import { getAllRoomsApiThunk } from "../../features/rooms/roomsThunk";
import { addBooking } from "../../features/bookings/bookingsSlices";
import {
  getRoomsAvailable,
  getRoomsError,
  getRoomsStatus,
} from "../../features/rooms/roomsSlices";
import { SpinnerStyled } from "../../componentsStyle/general/SpinnerStyled";
import { AppDispatch, useAppSelector } from "../../app/store";
import { RoomsInterface } from "../../interfaces/rooms/roomsInterface";
import { createBookingApiThunk } from "../../features/bookings/bookingsThunks";
import { useNavigate } from "react-router-dom";

const FormCreateBooking = () => {

  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch();
  const roomsListDataAvailable =
    useAppSelector<RoomsInterface[]>(getRoomsAvailable);
  const roomsListStatus = useAppSelector<string>(getRoomsStatus);
  const roomslistError = useAppSelector<string | undefined>(getRoomsError);
  const [spinner, setSpinner] = useState<boolean>(true);
  const [availableRooms, setAvailableRooms] = useState<RoomsInterface[]>([]);

  useEffect(() => {
    const fetchData = () => {
      if (roomsListStatus === "idle") {
        dispatch(getAllRoomsApiThunk());
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
      await dispatch(createBookingApiThunk({ body: formData }));
      toast.success("Creado exitosamente");
      navigate("/home/bookings");
    } catch (error) {
      toast.error("Error al crear la reserva");
    }
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
                      <option value={rooms._id} key={rooms._id}>
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
