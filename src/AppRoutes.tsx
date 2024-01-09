import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
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
import EditRoomPage from "./pages/EditRoomPage";
import NewBookingPage from "./pages/NewBookingPage";
import EditBookingPage from "./pages/EditBookingPage";
import EditUsersPage from "./pages/EditUsersPage";

function AppRoutes() {
  const [data, setData] = useState<string | undefined>();

  useEffect(() => {
    const saveToken = localStorage.getItem("adminToken");
    if (saveToken) {
      setData(saveToken);
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
                <Route path="new-booking" element={<NewBookingPage />} />
                <Route path="edit-booking/:id" element={<EditBookingPage />} />
                <Route
                  path="bookings-details/:id"
                  element={<BookingDetailsPage />}
                />

                <Route path="rooms" element={<RoomsPage />} />
                <Route path="new-room" element={<NewRoomPage />} />
                <Route path="edit-room/:id" element={<EditRoomPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="edit-user/:id" element={<EditUsersPage />} />
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

export default AppRoutes;
