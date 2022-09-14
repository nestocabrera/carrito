export function desglozaItems(data) {
  let soloGrupo = data.map((grupo) => grupo.catalogoProd);
  let soloArticulos = [];
  soloGrupo = soloGrupo.filter((grupo) => grupo.length > 0);
  soloGrupo.forEach((grupo) => {
    grupo.map((g) => {
      soloArticulos.push(g);
    });
  });

  return soloArticulos;
}
export function valorSubtotalArticulo(idArticulo, arregloArticulos) {
  const articuloParaValor = arregloArticulos.filter(
    (articulos) => articulos.cproId === idArticulo
  );
  return articuloParaValor[0].valor;
}
export function cantidadArticulo(idArticulo, arregloArticulos) {
  const articuloParaValor = arregloArticulos.filter(
    (articulos) => articulos.cproId === idArticulo
  );
  return articuloParaValor[0].cantidad;
}
export function totalCarritoValor(arregloArticulos) {
  let total = 0;
  const articuloParaValor = arregloArticulos.map(
    (articulos) => (total += articulos.valor)
  );

  return total;
}
export function totalCarritoCantidad(arregloArticulos) {
  let totalCantidades = 0;
  const articuloParaValor = arregloArticulos.map(
    (articulos) => (totalCantidades += articulos.cantidad)
  );

  return totalCantidades;
}
