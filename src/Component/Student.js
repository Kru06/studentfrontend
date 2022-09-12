import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

export default function Student() {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);

  const { studentId } = useParams();
  const navigate = useNavigate();

  const student = {
    id: id,
    name: name,
    address: address,
  };

  useEffect(() => {
    if (studentId) {
      axios
        .get("http://localhost:8080/student/" + studentId)
        .then((response) => {
          if (response.data != null) {
            setId(response.data.id);
            setName(response.data.name);
            setAddress(response.data.address);
          }
        })
        .catch((error) => alert(error));
    }
  }, []);

  let textChanged = (event) => {
    if (event.target.name === "id") {
      setId(event.target.value);
    } else if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "address") {
      setAddress(event.target.value);
    }
  };

  let addStudent = (event) => {
    event.preventDefault();
    if (studentId === null) {
      axios
        .post("http://localhost:8080/student", Student)
        .then((response) => {
          alert(response.data);
          console.log(Student);
        })
        .catch((error) => alert(error));
    } else {
      axios
        .put("http://localhost:8080/student/" + studentId, Student)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
    setId("");
    setName("");
    setAddress("");
  };

  return (
    <div className="my-3">
      <Card>
        <Card.Header>Add Student Information</Card.Header>
        <Form onSubmit={addStudent}>
          <Card.Body>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                name="id"
                value={id}
                type="text"
                placeholder="Enter Id"
                onChange={textChanged}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                name="name"
                value={name}
                type="text"
                placeholder="Enter Name"
                onChange={textChanged}
              />
            </Form.Group>

            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Student Address</Form.Label>
              <Form.Control
                name="address"
                value={address}
                type="text"
                placeholder="Enter Address"
                onChange={textChanged}
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </div>
  );
}
