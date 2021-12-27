import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Booking from "./Pages/Booking/Booking";
import Header from "./Pages/Shared/Header/Header";
import Banner from "./Pages/Home/Banner/Banner";
import Destinations from "./Pages/Home/Destinations/Destinations";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      {/* <Booking></Booking> */}
      <Destinations></Destinations>
      <ManageOrders></ManageOrders>
    </div>
  );
}

export default App;
