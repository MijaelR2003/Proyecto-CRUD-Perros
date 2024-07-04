import React, { useState } from "react";
import { Container, Button, Form, InputGroup, FloatingLabel } from "react-bootstrap";
import axios from "axios";
import useForm from "./useForm";
import { useNavigate } from "react-router-dom";

function CrearPerro({ apiUrl }) {
  const navigate = useNavigate()

  const { formulario, obtenerFormulario } = useForm({
    name: "",
    breed: "",
    image: "",
    color: "",
    age: "",
    favoriteToy: "",
    personality: "",
    bio: "",
  });

  const enviarDatos = () => {
    if (
      formulario.name &&
      formulario.breed &&
      formulario.image &&
      formulario.color &&
      formulario.age &&
      formulario.favoriteToy &&
      formulario.personality &&
      formulario.bio !== ""
    ) {
      crearPerro();
    } else {
      alert("Completa los datos");
    }
  };

  function crearPerro() {
    const data = {
      name: formulario.name,
      breed: formulario.breed,
      image: formulario.image,
      color: formulario.color,
      age: formulario.age,
      favoriteToy: formulario.favoriteToy,
      personality: formulario.personality,
      bio: formulario.bio,
    };
    axios
      .post(apiUrl, data)
      .then((res) => {
        console.log("Creado con exito", res);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        alert("Algo salio mal");
      });
  }

  return (
    <>
      <Container>
        <InputGroup className="mb-3">
        <FloatingLabel
        controlId="floatingInput"
        label="Nombre del Perro"
        className="m-0"
        >
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="name"
            placeholder="Nombre del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          </FloatingLabel>

          <FloatingLabel
        controlId="floatingInput"
        label="Raza del Perro"
        className="m-0"
        >
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="breed"
            placeholder="Raza del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          </FloatingLabel>
          
        </InputGroup>

        <InputGroup className="mb-3">
        <FloatingLabel
        controlId="floatingInput"
        label="Imagen del Perro"
        className="m-0"
        >
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="image"
            placeholder="Imagen del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          </FloatingLabel>
        </InputGroup>

        <InputGroup className="mb-3">
        <FloatingLabel
        controlId="floatingInput"
        label="Color del Perro"
        className="m-0"
        >
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="color"
            placeholder="Color del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          </FloatingLabel>
<FloatingLabel
        controlId="floatingInput"
        label="Edad del Perro"
        className="m-0"
        >
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="age"
            placeholder="Edad del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          </FloatingLabel>
        </InputGroup>

        <InputGroup className="mb-3">
        <FloatingLabel
        controlId="floatingInput"
        label="Juguete favorito del Perro"
        className="m-0"
        >
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="favoriteToy"
            placeholder="Juguete favorito del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          </FloatingLabel>
<FloatingLabel
        controlId="floatingInput"
        label="Personalidad del Perro"
        className="m-0"
        >
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="personality"
            placeholder="Personalidad del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          </FloatingLabel>
        </InputGroup>

        <InputGroup className="mb-3">
        <FloatingLabel
        controlId="floatingInput"
        label="Biografia del Perro"
        >
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="bio"
            placeholder="Biografia del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          </FloatingLabel>
        </InputGroup>
        <Button onClick={enviarDatos}>Crear Perro</Button>
      </Container>
    </>
  );
}

export default CrearPerro;
