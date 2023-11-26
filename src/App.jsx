import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import BokkingsPage from "./pages/BokkingsPage";
import RoomsPage from "./pages/RoomsPage";
import UsersPage from "./pages/UsersPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import NewUserPage from "./pages/NewUserPage";
import { useEffect, useState } from "react";
import BookingDetailsPage from "./pages/BookingDetailsPage";
import NewRoomPage from "./pages/NewRoomPage";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setData(JSON.parse(savedFormData));
      //pasar estos datos a redux
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {data ? (
            <>
              <Route path="/home" element={<HomePage />}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="bookings" element={<BokkingsPage />} />
                <Route
                  path="bookings-details/:id"
                  element={<BookingDetailsPage />}
                />

                <Route path="rooms" element={<RoomsPage />} />
                <Route path="new-room" element={<NewRoomPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="new-user" element={<NewUserPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>
            </>
          ) : null}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
