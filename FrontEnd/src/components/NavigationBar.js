import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../index.css";
import "./NavigationBar.css";

const navigationBar = () => (
  <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="/">Tap Waste</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/cart">Add to Cart</Nav.Link>
        <Nav.Link href="/#myServicesRow">Our Services</Nav.Link>
        <Nav.Link href="/login">LOGIN</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navigationBar;
