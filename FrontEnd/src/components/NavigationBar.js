import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../index.css";
import "./NavigationBar.css";
async function check(){
  const response = await fetch("http://localhost:5000/posts/checkVendor", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });
  if (response.status === 200) {
    console.log("vendor login");
    return true;
  } else {
    console.log(response);
    alert("unauthorized");
    return false;
  }
}
const navigationBar = () => (
  <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="/">Tap Waste</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        {!check && <Nav.Link href="/cart">Add to Cart</Nav.Link>}
        {check && <Nav.Link href="/orders">Orders</Nav.Link>}
        <Nav.Link href="/#myServicesRow">Our Services</Nav.Link>
        <Nav.Link href="/login">LOGIN</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navigationBar;
