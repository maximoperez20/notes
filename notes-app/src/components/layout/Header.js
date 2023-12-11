import React from "react";
import "./layout.css";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavDropdown,
  Container,
} from "react-bootstrap";
import AddNote from "../add-note/AddNote";

function Header() {
  return (
    <div className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <img src="./img/notes-logo.png" alt="" height="80px" width="80px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
