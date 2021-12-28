import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Booking from "./Pages/Booking/Booking";
import Header from "./Pages/Shared/Header/Header";
// import Banner from "./Pages/Home/Banner/Banner";
import Destinations from "./Pages/Home/Destinations/Destinations";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/orders"
            element={
              <PrivateRoute>
                <ManageOrders />
              </PrivateRoute>
            }
          />
          <Route
            path="/booking"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
