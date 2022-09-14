import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import ListGroup from "react-bootstrap/ListGroup";
import DetalleArticulos from "./DetalleArticulos";


const Articulo1 = ({
  descripcion,
  precio,
  codigo,
  articuloId,
  seleccion,
  setSeleccion,
  totalL,
  setTotalL,
  imagenUrl
}) => {
    console.log(imagenUrl)
  return (
    <>
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={imagenUrl}/>
        <Card.Body>
          <Card.Title>ART: {descripcion}</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
          <Container>
            <DetalleArticulos
              codigo={codigo}
              precio={precio}
              articuloId={articuloId}
              seleccion={seleccion}
              setSeleccion={setSeleccion}
              totalL={totalL}
              setTotalL={setTotalL}
            />
          </Container>
        </ListGroup>
      </Card>
    </>
  );
};
export default Articulo1;
