import React from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
// import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand className="fw-bolder fs-4" href="#home">
          Travel Mania
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="navbar">Home</NavLink>
            <NavLink>Destinations</NavLink>
            <NavLink>About Us</NavLink>
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
            <NavLink>My Orders</NavLink>

            <NavLink>Log In</NavLink>
            <NavLink>Sign Up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
