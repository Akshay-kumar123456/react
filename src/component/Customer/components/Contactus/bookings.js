import React, { useEffect, useState } from "react";
import NavbarcomponentWL from "../home/navbarf";
import { Container, Row, Col, Card, Table, Pagination } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

function PreviousBookings() {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(3); // Number of bookings per page

  const { customerId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8081/customerflight/bookings/${customerId}`)
    .then(response => setBookings(response.data));
  }, [customerId]);

  // Get current bookings
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <NavbarcomponentWL />

      <div>
        <h4>Previous Bookings</h4>
        <br/>
        <br/>
        <Pagination className="justify-content-center">
          {Array.from({ length: Math.ceil(bookings.length / bookingsPerPage) }).map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
              style={{  color: "grey" }}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
        <Container>
          <Row>
            <Col sm={12}></Col>
          </Row>
          {currentBookings.map((booking) => (
            <Card
              key={booking.id}
              className="mb-3"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}
            >
              <Card.Header>
                <Row>
                  <Col sm={6}>
                    <h4>Booking ID: {booking.id}</h4>
                  </Col>
                  <Col sm={6} className="text-right">
                    <p>Date: {booking.date}</p>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
              <Row>
              <Col sm={6}>
                <h5>Passenger Details</h5>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>Passenger name:</td>
                      <td>{booking.name}</td>
                    </tr>
                    <tr>
                      <td>seatno:</td>
                      <td>{booking.seat.seatNo}</td>
                    </tr>
                    <tr>
                      <td>Seat Class:</td>
                      <td>{booking.seat.seatclass}</td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Col>
              <Col sm={6}>
                <h5>Flight Details</h5>
                <Table borderless>
                  <tbody>
                    <tr>
                      <td>Flight Code:</td>
                      <td>{booking.flight.code}</td>
                    </tr>
                    <tr>
                      <td>Airline:</td>
                      <td>{booking.flight.airline.name}</td>
                    </tr>
                    <tr>
                      <td>Departure - Arrival:</td>
                      <td>
                        {booking.flight.route.departureCity} - {booking.flight.route.arrivalCity}
                      </td>
                    </tr>
                    <tr>
                      <td>Date:</td>
                      <td>{booking.flight.departureDate}</td>
                    </tr>
                    
                    
                  </tbody>
                </Table>
              </Col>
            </Row>
              </Card.Body>
              <Card.Footer className="text-right">
                <p>Price: ₹{booking.price}</p>
              </Card.Footer>
            </Card>
          ))}
        </Container>

        
      </div>
    </div>
  );
}

export default PreviousBookings;
