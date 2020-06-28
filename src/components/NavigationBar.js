import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../index.css';
import './NavigationBar.css';


const navigationBar = () => (
  <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="/">Kachra Seth</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/#myServicesRow">Our Services</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="#link2">Add to Cart</Nav.Link>
        <Nav.Link href="#link3">Orders</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default navigationBar;