import React from "react";
import Articulo from "./Articulo1";
import data from "../constantes/Data";
import { desglozaItems } from "./funciones";

const ListadoArticulos = ({ seleccion, setSeleccion, totalL, setTotalL }) => {
  let soloArticulos = desglozaItems(data);
  // console.log("antes log")
  console.log(soloArticulos);
  // console.log("luego log")
  // console.log(data.map((item) => item));
  return (
    <>
      {soloArticulos.map((item) => (
        <Articulo
          descripcion={item.cproNombre}
          precio={item.caprId}
          key={item.cproId}
          articuloId={item.cproId}
          codigo={item.cproCodigoint}
          seleccion={seleccion}
          setSeleccion={setSeleccion}
          totalL={totalL}
          setTotalL={setTotalL}
          imgaenUrl={item.cproUbicacion}
          //detalles={item.catalogoProd}
        />
      ))}
    </>
  );
};
export default ListadoArticulos;
