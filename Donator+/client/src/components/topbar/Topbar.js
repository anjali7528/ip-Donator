import React from 'react'
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap';


const Topbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Donator+</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">HOME</Nav.Link>
      <Nav.Link href="#pricing">ABOUT</Nav.Link>
      <Nav.Link href="#pricing">CONTACT</Nav.Link>
      <Nav.Link href="#pricing">DEVELOPER</Nav.Link>
     
    </Nav>
    <Nav>
    <NavDropdown title="LOGIN" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">HOSPITAL</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">DONER</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Government Hospitals</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Topbar