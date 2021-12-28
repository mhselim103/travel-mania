import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
// import { NavHashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  const [selected, setSelected] = useState("home");
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="header">
      <Container>
        <Navbar.Brand
          onClick={() => setSelected("home")}
          className="fw-bolder fs-4"
          href="#home"
        >
          Travel Mania
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fs-5 fw-bold">
            <NavLink
              onClick={() => setSelected("home")}
              className={selected === "home" ? "selected navbar" : "navbar"}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setSelected("destination")}
              className={selected === "destination" ? "selected" : ""}
            >
              Destinations
            </NavLink>
            <NavLink
              onClick={() => setSelected("about")}
              className={selected === "about" ? "selected" : ""}
            >
              About Us
            </NavLink>
            {/* <NavLink>Contact Us</NavLink> */}
          </Nav>
          <Nav>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <NavLink>Manage All Orders</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <NavLink>Add New Destination</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              onClick={() => setSelected("orders")}
              className={selected === "orders" ? "selected" : ""}
            >
              My Orders
            </NavLink>

            <NavLink>Log In</NavLink>
            <NavLink>Sign Up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
