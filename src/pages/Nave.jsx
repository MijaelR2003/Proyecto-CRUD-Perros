import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Nave() {
  const navigate = useNavigate()

  const volver = ()=>{
    navigate(-1)
  }

  const home = ()=>{
    navigate("/")
  }

  const ver = ()=>{
    navigate(-1)
  }
  
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mb-3">
      <Container>
        <Navbar.Brand onClick={home}>Aplicacion de Perros</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={ver}>Crear Perros</Nav.Link>
            <Nav.Link onClick={volver}>Volver</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nave