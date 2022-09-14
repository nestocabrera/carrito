import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import ListadoArticulos from "./ListadoArticulos";
import { useState } from "react";
import Carrito from "./Carrito";
import { totalCarritoValor,totalCarritoCantidad } from "./funciones";

const Home = () => {

  const [seleccion, setSeleccion] = useState([]); //de los buscados los q voy a ir seleccionando para luego usar en el carro
  const [totalL, setTotalL] = useState([
    {
      /// para llevar el subtotal arreglo de objetos
      id: 1,
      cproId: 0, // para q no coincida al buscar el findIndex ya q este quedará vacio
      valor: 0,
      cantidad: 0,
    },
  ]);
  return (
    <Container>
      <Row>
        <ListadoArticulos
          seleccion={seleccion}
          setSeleccion={setSeleccion}
          totalL={totalL}
          setTotalL={setTotalL}
        />
        {/* <h1>Total{totalCarritoValor(totalL)}</h1> */}
      </Row>
      <br></br>
      <Row>
      {/* {totalL.length===0(<p>no hay q mostrar</p>)} */}
        <Carrito
          seleccion={seleccion}
          setSeleccion={setSeleccion}
          totalL={totalL}
          setTotalL={setTotalL}
        />
      </Row>
      <Row><h1>Total: {totalCarritoValor(totalL)}</h1> </Row>
      <Row> <h1> Cantidad Articulos: {totalCarritoCantidad(totalL)}</h1> </Row>
    </Container>
  );
};
export default Home;
