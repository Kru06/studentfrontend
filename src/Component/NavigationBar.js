import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export default function NavigationBar() {
  return (              
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Student Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/addStudent" className='nav-link'>Add Student</Link>
          <Link to="/viewStudents" className='nav-link'>View Student</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
