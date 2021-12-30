import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "./Header.css";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const { user, logOut } = useAuth();
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleSelected = (selection) => {
    setSelected(selection);
  };
  const handleHome = () => {
    navigate("/home");
    setSelected("home");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // fixed="top"
      sticky="top"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand onClick={() => handleHome()} className="fw-bolder fs-4 ">
          Travel Mania
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fs-5 fw-bold">
            <NavLink
              as={HashLink}
              to="/"
              onClick={() => {
                handleSelected("home");
              }}
              className={selected === "home" ? "selected navbar" : "navbar"}
            >
              Home
            </NavLink>
            <NavLink
              as={HashLink}
              to="/destinations"
              onClick={() => {
                handleSelected("destination");
              }}
              className={selected === "destination" ? "selected" : ""}
            >
              Destinations
            </NavLink>
            <NavLink
              as={HashLink}
              to="/about"
              onClick={() => {
                handleSelected("about");
              }}
              className={selected === "about" ? "selected" : ""}
            >
              About Us
            </NavLink>
            {/* <NavLink>Contact Us</NavLink> */}
          </Nav>
          <Nav className="fw-bold">
            {user?.email ? (
              <NavDropdown title="Admin">
                <NavDropdown.Item>
                  <NavLink
                    onClick={() => handleSelected("manage-orders")}
                    as={HashLink}
                    to="/manageorders"
                  >
                    Manage All Orders
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    as={HashLink}
                    to="/addNewDestination"
                    onClick={() => handleSelected("new-destination")}
                  >
                    Add New Destination
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              ""
            )}
            {user?.email ? (
              <NavLink
                as={HashLink}
                to="/orders"
                onClick={() => {
                  handleSelected("my-orders");
                }}
                className={selected === "my-orders" ? "selected" : ""}
              >
                My Orders
              </NavLink>
            ) : (
              ""
            )}

            {user?.email ? (
              <NavLink>{user.displayName}</NavLink>
            ) : (
              <NavLink as={HashLink} to="/login">
                Log In
              </NavLink>
            )}
            {/* <NavLink>Log In</NavLink> */}
            {user?.email ? (
              <NavLink onClick={logOut}>Log out</NavLink>
            ) : (
              <NavLink as={HashLink} to="/register">
                Sign Up
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
