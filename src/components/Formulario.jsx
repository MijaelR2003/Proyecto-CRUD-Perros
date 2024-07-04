import React, { useEffect } from "react";
import Label from "./Label";
import Input from "./Input";
import FormControl from "./FormControl";
import { Container } from "react-bootstrap";

function Formulario({ disabled, formulario, obtenerFormulario }, props) {
  return (
    <Container className="mt-4">
      <Input>
        <Label className="mx-2 mt-1">Nombre:</Label>
        <FormControl
          name="name"
          placeholder="Nombre del Perro"
          disabled={disabled}
          value={formulario.name}
          {...props}
        />
        <Label className="mx-5 mt-1">Raza:</Label>
        <FormControl
          name="breed"
          placeholder="Raza del Perro"
          disabled={disabled}
          value={formulario.breed}
          onChange={obtenerFormulario}
        />
      </Input>
      <Label className="mx-2 mt-1">Imagen del Perro:</Label>
      <Input>
        <FormControl
          name="image"
          placeholder="Imagen del Perro"
          disabled={disabled}
          value={formulario.image}
          onChange={obtenerFormulario}
        />
      </Input>
      <Input>
        <Label className="mx-3 mt-1">Color:</Label>
        <FormControl
          name="color"
          placeholder="Color del Perro"
          disabled={disabled}
          value={formulario.color}
        />
        <Label className="mx-5 mt-1">Edad:</Label>
        <FormControl
          name="age"
          placeholder="Edad del Perro"
          disabled={disabled}
          value={formulario.age}
          onChange={obtenerFormulario}
        />
      </Input>
      <Input>
        <Label className="mx-2 mt-1">Juguete:</Label>
        <FormControl
          name="favoriteToy"
          placeholder="Juguete del Perro"
          disabled={disabled}
          value={formulario.favoriteToy}
          onChange={obtenerFormulario}
        />
        <Label className="mx-4 mt-1">Personalidad:</Label>
        <FormControl
          name="personality"
          placeholder="Personalidad del Perro"
          disabled={disabled}
          value={formulario.personality}
          onChange={obtenerFormulario}
        />
      </Input>
      <Label className="mx-2 mt-1">Biografia del Perro:</Label>
      <Input>
        <FormControl
          name="bio"
          placeholder="Biografia del Perro"
          disabled={disabled}
          value={formulario.bio}
          onChange={obtenerFormulario}
        />
      </Input>
    </Container>
  );
}

export default Formulario;
