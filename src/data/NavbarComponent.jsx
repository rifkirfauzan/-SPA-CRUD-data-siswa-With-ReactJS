import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Aplikasi Data Siswa</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About us</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent;