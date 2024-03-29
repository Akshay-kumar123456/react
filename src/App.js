import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./component/Auth/login";
import Signup from "./component/Customer/components/home/signup";
import Home from "./component/Customer/components/home/home";
//import AirlineDashboard from "./component/Airline/dashboard";
import ExecutiveDashboard from "./component/Executive/dashboard";
import GetFlights from "./component/Customer/components/search flights/search";
import FlightSearch from "./component/Customer/components/search flights/searchflight";
import AboutUs from "./component/Customer/components/Aboutus/aboutus";

import BookTicket from "./component/Customer/components/book";
import AllAirline from "./component/Executive/classcomponents/allairlines";
import PreviousBookings from "./component/Customer/components/Contactus/bookings";
import AirlineDashboard from "./component/Airline/airlinedashboard";
import AirlineHome from "./component/Airline/airlinhome";
import About from "./component/Airline/about";
import Allflights from "./component/Airline/Allflights";
import ADDflights from "./component/Airline/Addflights";
import Aboutexe from "./component/Executive/aboutourweb";
import ExeHome from "./component/Executive/exehome";
import addairline from "./component/Executive/addairline";
import Addairline from "./component/Executive/addairline";
import AddRoute from "./component/Airline/components/addroute";
import AllRoute from "./component/Airline/allroutes";
//import FlightSearch from "./component/Customer/components/search flights/demo";

// import Home from "./component/Customer/home";
// import Navbarcomponent from "./component/Customer/navbar";

function App() {
  return (
    <div className="App">
      {/* <AllRoute/> */}
      {/* <AirlineDashboard/> */}
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/Customer/signup" element={<Signup />} />

        <Route path="/component/Customer/home" element={<Home />} />
        <Route path="/get/flights" element={<GetFlights />} />
        <Route path="/search/flights/:customerId" element={<FlightSearch />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/Bookings/:customerId" element={<PreviousBookings/>} />
        <Route path="/bookticket/:customerId/:flightId" element={<BookTicket />} />
        
        <Route path="/component/Airline/dashboard" element={<AirlineDashboard />} />
        <Route path="/airline/home/:aid" element={<AirlineHome />} />
        <Route path="/airline/about" element={<About />} />
        <Route path="/airline/addflights/:aid" element={<ADDflights />} />
        <Route path="/airline/allflights/:aid" element={<Allflights />} />
        <Route path="/airline/dashboard" element={<AirlineDashboard />} />
        <Route path="/airline/addroute" element={<AddRoute />} />
        <Route path="/airline/allroute" element={<AllRoute/>} />
        
       
   
        <Route path="/Executive/dashboard" element={<ExecutiveDashboard />} />
        <Route path="/executive/about" element={<Aboutexe />} />
        <Route path="/executive/addairlines" element={< Addairline />} />
        <Route path="/executive/home" element={<ExeHome />} />

      </Routes>
      {/* <Home/> */}
      {/* <Demo/> */}
      {/* <TicketBookingPage/> */}
     {/* <AllAirline/> */}
    </div>
  );
}

export default App;
