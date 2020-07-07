import React, { useEffect, useState, useContext } from "react";
import Formulario from "../../components/Formulario";
import { withRouter } from "react-router-dom";

import {obtenerProducto, editarProducto} from '../../actions/productos';
import {useDispatch, useSelector } from "react-redux";

// import ProductosContext from "../../context/Productos/ProductoContext";

const Detalle = (props) => {

  const dispatch = useDispatch();
  const state = useSelector((state)=>state);
  const {producto} = state.producto;

  // const productosContext = useContext(ProductosContext);
  // const {
  //   obtenerProducto,
  //   editarProducto,
  //   editOk,
  //   producto,
  // } = productosContext;

  useEffect(() => {
    dispatch(obtenerProducto(props.match.params.id));
  }, []);


  return (
    <div>
      <h1>Detalle del Producto</h1>
      {Object.keys(producto).length > 0 && (
        <Formulario
          producto={producto}
          detalle={true}
        />
      )}
    </div>
  );
};

export default withRouter(Detalle);
// export default withApi(Editar);
