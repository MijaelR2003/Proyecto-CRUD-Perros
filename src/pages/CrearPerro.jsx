import React, { useState } from "react";
import { Container, Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";

const apiUrl =
  "https://experimental-dogs-experimental-org.koyeb.app/api/v1/dogs";

function CrearPerro() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");
  const [favoriteToy, setFavoriteToy] = useState("");
  const [personality, setPersonality] = useState("");
  const [bio, setBio] = useState("");

  const nuevoPerro = {
    name: name,
    breed: breed,
    image: image,
    color: color,
    age: age,
    favoriteToy: favoriteToy,
    personality: personality,
    bio: bio,
  };

  const valorName = (evento)=>{setName(evento.target.value)}  
  const valorBreed = (evento)=>{setBreed(evento.target.value)}
  const valorImage = (evento)=>{setImage(evento.target.value)}
  const valorColor = (evento)=>{setColor(evento.target.value)}
  const valorAge = (evento)=>{setAge(evento.target.value)}
  const valorFavoriteToy = (evento)=>{setFavoriteToy(evento.target.value)}
  const valorPersonality = (evento)=>{setPersonality(evento.target.value)}
  const valorBio = (evento)=>{setBio(evento.target.value)}

  const enviarDatos = ()=>{
    if (name && breed && image && color && age && favoriteToy && personality && bio != "") {
        crearPerro();
      } else {
        alert("Completa los datos");
      }
  }

  function crearPerro() {
    axios
      .post(apiUrl, nuevoPerro)
      .then((res) => {
        console.log("Creado con exito", res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Container>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={valorName}
            placeholder="Nombre de Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={valorBreed}
            placeholder="Raza del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={valorImage}
            placeholder="Imagen del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={valorColor}
            placeholder="Color del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={valorAge}
            placeholder="Edad del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={valorFavoriteToy}
            placeholder="Juguete favorito del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={valorPersonality}
            placeholder="Personalidad del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            onChange={valorBio}
            placeholder="Biografia del Perro"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <Button onClick={enviarDatos}>Crear Unicornio</Button>
      </Container>
    </>
  );
}

export default CrearPerro;
