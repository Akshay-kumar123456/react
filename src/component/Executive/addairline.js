import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import NavExecutive from "./navexe";
import axios from "axios";
import { useNavigate } from "react-router";

function Addairline() {
    const navigate=useNavigate();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAddAirlineClick = async () => {
    try {
      const response = await axios.post("http://localhost:8081/airline/add", {
        name,
        code,
        user: {
          username,
          password,
        },
      });

      // Handle success, if needed
      console.log("Airline added successfully:", response.data);
      navigate('/executive/home')
      // Clear the form after successful submission, if needed
      setName("");
      setCode("");
      setUsername("");
      setPassword("");
    } catch (error) {
      // Handle errors
      console.error("Error adding airline:", error);

      // You can set an error state here if you want to display an error message to the user
    }
  };

  return (
    <div>
      <NavExecutive />

      <div
        className="card mx-auto"
        style={{
          width: 400,
          alignContent: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <center>
          <br />
          <h5> ADD AIRLINE</h5>
          <hr />
        </center>
        <Row className="justify-content-center">
          <Col md="6" className="d-flex flex-column align-items-center">
            <Form.Group className="mb-2" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                style={{ width: 330, display: "flex" }}
                placeholder="Enter Airline Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="contact">
              <Form.Label className="text-left">Code</Form.Label>
              <Form.Control
                style={{ width: 330, display: "flex" }}
                type="tel"
                className="mx-auto"
                placeholder="Enter Airline code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={username}
                style={{ width: 330, display: "flex" }}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                style={{ width: 330, display: "flex" }}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              style={{ paddingBottom: 10 }}
              onClick={handleAddAirlineClick}
            >
              Add Airline
            </Button>
          </Col>
        </Row>
        <br />
      </div>
    </div>
  );
}

export default Addairline;
