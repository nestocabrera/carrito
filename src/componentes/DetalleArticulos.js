import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import data from "../constantes/Data";
import { desglozaItems } from "./funciones";

const DetalleArticulos = ({
  codigo,
  precio,
  articuloId,
  seleccion,
  setSeleccion,
  totalL,
  setTotalL,
}) => {
  let soloArticulosAgregar = desglozaItems(data); //articulos para verificar id

  const indiceArticuloActual = totalL.findIndex((t) => t.cproId === articuloId); // indice de articulo actual para verificar 0 en caso de no haber

  //   console.log("antes");
  //   console.log(indiceArticuloActual);
  //   console.log("despues");
  function handleClick(articuloId) {
    if (indiceArticuloActual < 0) {
      const articuloAgregado = soloArticulosAgregar.filter(
        (a) => a.cproId === articuloId
      );
      setSeleccion([...seleccion, ...articuloAgregado]); // toca actualizar subtotalLinea para la primera vez q es cuando no encuentra agergar este idarticulo, cantidad y precio
      console.log(indiceArticuloActual);

      const proximoTotalLinea = [
        // Items before the insertion point:
        ...totalL.slice(0, totalL.length),
        // New item:
        { id: totalL.length++, cproId: articuloId, valor: precio, cantidad: 1 },
        // Items after the insertion point:
        ...totalL.slice(totalL.length),
      ];
      setTotalL(proximoTotalLinea);
    } else {
      const actualizaCantidad = [...totalL]; /// solo agregar cantidad y aumentar el valor por el precio actual
      const articuloCantidadActualizar = actualizaCantidad.find(
        (a) => a.cproId === articuloId
      );
      articuloCantidadActualizar.cantidad =
        articuloCantidadActualizar.cantidad + 1;
      articuloCantidadActualizar.valor =
        Number(articuloCantidadActualizar.cantidad) * precio;
      setTotalL(actualizaCantidad);
    }
  }
  return (
    <Row>
      <ListGroup.Item>
        COD: {codigo} P:{precio}$
      </ListGroup.Item>
      <Button variant="primary" onClick={() => handleClick(articuloId)}>
        Agregar
      </Button>
    </Row>
  );
};
export default DetalleArticulos;
