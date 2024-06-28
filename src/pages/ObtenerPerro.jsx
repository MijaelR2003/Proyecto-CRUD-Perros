import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row, Container, Spinner, Card } from "react-bootstrap";

function ObtenerPerro({ apiUrl }) {
  const [perros, setPerros] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((perros) => {
        setPerros(perros.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(perros);

  return (
    <>
      <Container>
        <Row>
          {perros ? (
            perros.map((perro) => (
              <Col className="mb-4" key={perro._id}>
                <Card style={{ width: "12rem" }}>
                  <Card.Img variant="top" src={perro.image} />
                  <Card.Body>
                    <Card.Title>Nombre: {perro.name}</Card.Title>
                    <Card.Text>Raza: {perro.breed}</Card.Text>
                    <Card.Text>Color: {perro.color}</Card.Text>
                    <Card.Text>Edad: {perro.age}</Card.Text>
                  </Card.Body>
                  <Button
                    as={Link}
                    to={"/"}
                    variant="success"
                    size="sm"
                  >
                    Ver
                  </Button>
                  <Button
                    as={Link}
                    to={"/actualizar-perro/" + perro._id}
                    variant="primary"
                    size="sm"
                  >
                    Actualizar
                  </Button>{" "}
                  <Button as={Link} to={"/"} variant="danger" size="sm">
                    Eliminar
                  </Button>{" "}
                </Card>
              </Col>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
              }}
            >
              <Spinner animation="grow" />
            </div>
          )}
        </Row>
      </Container>
    </>
  );
}

export default ObtenerPerro;
