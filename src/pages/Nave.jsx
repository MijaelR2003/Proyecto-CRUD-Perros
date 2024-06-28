import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Nave() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mb-3">
      <Container>
        <Navbar.Brand href="/">Aplicacion de Perros</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/crear-perro">Crear Perros</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nave