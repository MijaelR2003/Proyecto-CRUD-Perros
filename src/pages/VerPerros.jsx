import React, { useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Button, Form, InputGroup } from "react-bootstrap";
import useForm from "./useForm";
import Boton from "../components/Boton";
import Formulario from "../components/Formulario";

function VerPerros({ apiUrl }) {
  const params = useParams();
  const { formulario, obtenerFormulario, setFormulario } = useForm({
    name: "",
    breed: "",
    image: "",
    color: "",
    age: "",
    favoriteToy: "",
    personality: "",
    bio: "",
  });

  useEffect(() => {
    const urlId = apiUrl + "/" + params.id;
    axios
      .get(urlId)
      .then((res) => {
        setFormulario(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Formulario disabled={true} formulario={formulario}/>
      <Boton to={"/"} size="">
        Volver
      </Boton>
    </Container>
    /* <>
      <Container className="mt-4">
        <InputGroup className="mb-3">
          <Form.Label className="mx-2 mt-1">Nombre:</Form.Label>
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="name"
            value={formulario.name}
            placeholder="Nombre de Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            disabled
          />
          <Form.Label className="mx-5 mt-1">Raza:</Form.Label>
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="breed"
            value={formulario.breed}
            placeholder="Raza del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            disabled
          />
        </InputGroup>
        <Form.Label className="mx-2 mt-1">Imagen del Perro</Form.Label>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="image"
            value={formulario.image}
            placeholder="Imagen del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            disabled
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Label className="mx-3 mt-1">Color:</Form.Label>
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="color"
            value={formulario.color}
            placeholder="Color del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            disabled
          />

          <Form.Label className="mx-5 mt-1">Edad:</Form.Label>
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="age"
            value={formulario.age}
            placeholder="Edad del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            disabled
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Label className="mx-2 mt-1">Juguete:</Form.Label>
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="favoriteToy"
            value={formulario.favoriteToy}
            placeholder="Juguete favorito del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            disabled
          />
          <Form.Label className="mx-4 mt-1">Personalidad:</Form.Label>
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="personality"
            value={formulario.personality}
            placeholder="Personalidad del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            disabled
          />
        </InputGroup>
        <Form.Label className="mx-2 mt-1">Biografia del Perro:</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => {
              obtenerFormulario(e);
            }}
            name="bio"
            value={formulario.bio}
            placeholder="Biografia del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            disabled
          />
        </InputGroup>
        <Boton to={"/"} size="">
          Volver
        </Boton>
      </Container>
    </>*/
  );
}

export default VerPerros;
