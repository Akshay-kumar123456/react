import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import Navairline from '../navairline';

function AddRoute() {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [msg, setMsg] = useState('');

  const handleAddRouteClick = () => {
    const routeData = {
      departureCity: departureCity,
      arrivalCity: arrivalCity,
      distance: distance,
      duration: duration,
    };

    axios
      .post('http://localhost:8081/route/add', routeData)
      .then((response) => {
        console.log('Route added successfully:', response.data);
        setMsg('Route added successfully');
      })
      .catch((error) => {
        console.error('Error adding route:', error);
        setMsg('Failed to add route. Please try again.');
      });
  };

  const handleCloseAlert = () => {
    setMsg('');
  };

  return (
    <div>
      <Navairline />
      <br />
      <div className="card mx-auto" style={{ width: 400, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <br />
        <center><h5> Add Route</h5>
          <hr /></center>
        {msg && (
          <Alert variant="success" onClose={handleCloseAlert} dismissible>
            {msg}
          </Alert>
        )}
        <Row className="justify-content-center">
          <Col md="6" className="d-flex flex-column align-items-center">
            <Form.Group className="mb-2" controlId="DepartureCity">
              <Form.Label>Departure City</Form.Label>
              <Form.Control
                type="text"
                value={departureCity}
                style={{ width: 330, display: 'flex' }}
                placeholder="Enter Departure City"
                onChange={(e) => setDepartureCity(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="ArrivalCity">
              <Form.Label>Arrival City</Form.Label>
              <Form.Control
                style={{ width: 330, display: 'flex' }}
                type="text"
                placeholder="Enter Arrival City"
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="distance">
              <Form.Label>Distance</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Distance"
                value={distance}
                style={{ width: 330, display: 'flex' }}
                onChange={(e) => setDistance(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Duration"
                value={duration}
                style={{ width: 330, display: 'flex' }}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              style={{ paddingBottom: 10 }}
              onClick={handleAddRouteClick}
            >
              Add Route
            </Button>
          </Col>
        </Row>
        <br />
      </div>
    </div>
  );
}

export default AddRoute;
