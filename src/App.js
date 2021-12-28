import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Booking from "./Pages/Booking/Booking";
import Header from "./Pages/Shared/Header/Header";
// import Banner from "./Pages/Home/Banner/Banner";
import Destinations from "./Pages/Home/Destinations/Destinations";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
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
                <MyOrders />
              </PrivateRoute>
            }
          />
          <Route
            path="/manageorders"
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
          <Route path="/about" element={<About />} />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <Booking />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
