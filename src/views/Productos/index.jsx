import React, { useContext, useEffect } from "react";

import Tabla from "../../components/Tabla";
// import ProductosContext from "../../context/Productos/ProductoContext";

/** importar acciones */
import {obtenerProductos} from '../../actions/productos';
import {useDispatch, useSelector} from 'react-redux';


const Productos = () => {
  // const productosContext = useContext(ProductosContext);
  // const { listaProductos, obtenerProductos, deleteOk } = productosContext;

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {listaProductos, deleteOk} = state.producto

  // console.log("estado de redux");
  // console.log(state);

  useEffect(() => {
    dispatch(obtenerProductos());
  }, []);

  useEffect(() => {
    if (deleteOk) {
      dispatch(obtenerProductos());
    }
  }, [deleteOk]);

  return (
    <div>
      <h1>Listado de productos</h1>
      {listaProductos.length > 0 && <Tabla listaProductos={listaProductos} />}
    </div>
  );
};

export default Productos;
