import React from "react";
import Table from "react-bootstrap/Table";
import Input from "react-bootstrap/InputGroup";
import data from "../constantes/Data";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {
  desglozaItems,
  valorSubtotalArticulo,
  cantidadArticulo,
} from "./funciones";
import Button from "react-bootstrap/Button";
import VentanaE from "./VentanaE";

const Carrito = ({ seleccion, setSeleccion, totalL, setTotalL }) => {
  let soloArticulosPrueba = desglozaItems(data);
  function handleClickAgregar(articuloId, precio) {
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
  function handleClickEliminar(articuloId, precio) {
    const actualizaCantidad = [...totalL]; /// solo agregar cantidad y aumentar el valor por el precio actual
    const articuloCantidadActualizar = actualizaCantidad.find(
      (a) => a.cproId === articuloId
    );
    if (articuloCantidadActualizar.cantidad === 1) {
    } else {
      articuloCantidadActualizar.cantidad =
        articuloCantidadActualizar.cantidad - 1;
      articuloCantidadActualizar.valor =
        Number(articuloCantidadActualizar.cantidad) * precio;
      setTotalL(actualizaCantidad);
    }
  }
  const handleOnChange = (e) =>{
   


  }
  return (
    <Table striped>
      <thead></thead>
      <tbody>
        {seleccion.map((item, index) => {
          return (
            <tr key={index}>
              <td>
               {/* <VentanaE/> */}
             
              <Button>{item.cproNombre}</Button>
              </td>
              <td>
                <input type='number' value={cantidadArticulo(item.cproId, totalL) }  onChange={(e)=>
                handleOnChange(e)
             }>
                </input>
              </td>
              <td>Cantidad: {cantidadArticulo(item.cproId, totalL)}</td>
              <td>precio: {item.caprId}</td>
              <td>Subtotal: {valorSubtotalArticulo(item.cproId, totalL)}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleClickAgregar(item.cproId, item.caprId)}
                >
                  Agregar
                </Button>
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleClickEliminar(item.cproId, item.caprId)}
                >
                  Disminuir
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    setTotalL(
                      totalL.filter(
                        (articulo) => articulo.cproId !== item.cproId
                      )
                    );
                  }}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default Carrito;

// descripcion={item.cproNombre}
// precio={item.caprId}
// key={item.cproId}
// articuloId={item.cproId}
// codigo={item.cproCodigoint}
