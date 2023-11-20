import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import BokkingsPage from "./pages/BokkingsPage";
import RoomsPage from "./pages/RoomsPage";
import UsersPage from "./pages/UsersPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setData(JSON.parse(savedFormData));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {data ? (
            <>
              <Route path="/dashboard" element={<DashboardPage />} />

              <Route path="bookings" element={<BokkingsPage />}>
                <Route path=":id"></Route>
              </Route>
              <Route path="rooms" element={<RoomsPage />}>
                <Route path=":id"></Route>
              </Route>
              <Route path="users" element={<UsersPage />}>
                <Route path=":id"></Route>
              </Route>
              <Route path="contact" element={<ContactPage />}>
                <Route path=":id"></Route>
              </Route>
            </>
          ) : null}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
