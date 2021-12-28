import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
// import { NavHashLink } from "react-router-hash-link";
import "./Header.css";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { user, logOut } = useAuth();
  const [selected, setSelected] = useState("home");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleOrders = () => {
    navigate("/orders");
  };
  const handleHome = () => {
    navigate("/home");
    setSelected("home");
  };
  const handleDestinations = () => {
    navigate("/destinations");
    setSelected("destination");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // fixed="top"
      sticky="top"
      background="light"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand onClick={() => handleHome()} className="fw-bolder fs-4">
          Travel Mania
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fs-5 fw-bold">
            <NavLink
              onClick={() => {
                handleHome();
                // setSelected("home");
                // navigate("/");
              }}
              className={selected === "home" ? "selected navbar" : "navbar"}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => {
                handleDestinations();
              }}
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
          <Nav className="fw-bold">
            {user?.email ? (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <NavLink>Manage All Orders</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <NavLink>Add New Destination</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              ""
            )}
            {user?.email ? (
              <NavLink
                onClick={() => {
                  setSelected("orders");
                  handleOrders();
                }}
                className={selected === "orders" ? "selected" : ""}
              >
                My Orders
              </NavLink>
            ) : (
              ""
            )}

            {user?.email ? (
              <NavLink>{user.displayName}</NavLink>
            ) : (
              <NavLink onClick={handleLogin}>Log In</NavLink>
            )}
            {/* <NavLink>Log In</NavLink> */}
            {user?.email ? (
              <NavLink onClick={logOut}>Log out</NavLink>
            ) : (
              <NavLink>Sign Up</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
