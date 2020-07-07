import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Formulario from "../../components/Formulario";

// import withApi from '../../HOC/withApi';

// import ProductosContext from "../../context/Productos/ProductoContext";

import {agregarProducto} from '../../actions/productos';
import {useDispatch, useSelector} from 'react-redux';

const Agregar = (props) => {
  // const productosContext = useContext(ProductosContext);
  // const { agregarProducto, addOk } = productosContext;

  const dispatch = useDispatch();
  const state = useSelector((state)=> state);
  const {addOk} = state.producto;

  useEffect(() => {
      if(addOk) {
          props.history.push("/");
      }
  }, [addOk]);

  const nuevoProducto = (producto) => {
    dispatch(agregarProducto(producto));
    // props.agregarProducto(newProduct);
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <Formulario agregarNuevoProducto={nuevoProducto} />
    </div>
  );
};

export default withRouter(Agregar);
// export default withApi(Agregar);
