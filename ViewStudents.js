import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

export default function ViewStudents() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents();
  }, []);

  let getStudents = () => {
    axios
      .get("http://localhost:8080/listStudents")
      .then((response) => setStudents(response.data))
      .catch((error) => alert(error));
  };

  const deleteStudent = (studentId, event) => {
    event.preventDefault();
    axios
      .delete("http://localhost:8080/student/" + studentId)
      .then((response) => alert(response.data))
      .catch((error) => alert(error));
  };

  return (
    <Card className="my-3">
      <Card.Header>Student List</Card.Header>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Student Address</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.address}</td>
                <td>
                  {" "}
                  <Link to={"/updateStudent/" + student.id}>
                    {" "}
                    <Button variant="primary">
                      <FontAwesomeIcon icon={faEdit}>Edit</FontAwesomeIcon>
                    </Button>
                  </Link>{" "}
                  <Button
                    variant="danger"
                    onClick={deleteStudent.bind(this, student.id)}
                  >
                    <FontAwesomeIcon icon={faTrash}>Delete</FontAwesomeIcon>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Card className="my-3">
        <Card.Footer>This is the information of student</Card.Footer>
      </Card>
    </Card>
  );
}
