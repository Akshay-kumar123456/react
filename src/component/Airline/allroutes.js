import axios from "axios";
import { useEffect, useState } from "react";
import Navairline from "./navairline";

function AllRoute() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/route/getall")
      .then((response) => {
        const routesData = response.data;
        console.log('Routes:', routesData);
        setRoutes(routesData);
      })
      .catch((error) => {
        console.error("Error fetching routes:", error);
      });
  }, []);

  return (
    
    <div className="container">
        <Navairline/>
      <h2>Route Information</h2>
      <br/>
      <table className="table table-bordered border-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Departure City</th>
            <th>Arrival City</th>
            <th>Distance (km)</th>
            <th>Duration (hours)</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{route.departureCity}</td>
              <td>{route.arrivalCity}</td>
              <td>{route.distance}</td>
              <td>{route.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllRoute;
