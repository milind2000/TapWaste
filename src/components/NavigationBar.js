import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../index.css';
import './NavigationBar.css';


const navigationBar = () => (
<Navbar bg="light" expand="lg" sticky="top">
  <Navbar.Brand href="#top">Kachra Seth</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#top">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <Nav.Link href="../Pages/Login.js">Add to Cart</Nav.Link>
    <Nav.Link href="#services">Our Services</Nav.Link>
	  <Nav.Link href="#link3">Orders</Nav.Link>
	  <Nav.Link href="#link4">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
 
export default navigationBar;