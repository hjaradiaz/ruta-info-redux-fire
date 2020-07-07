import axios from "axios";

import {db} from '../firebase/firebaseConfig';

/**Accion */
export const obtenerProductos = () => {
  return async (dispatch) => {
    try {
      // console.log("ejecutando el obtener productos");
      // const resultado = await axios.get("http://localhost:4000/restaurant");
      // dispatch(setProductos(resultado.data));

      const doc = await db.collection("productos").get();
      const productos = [];
      doc.forEach(item => productos.push({
        id: item.id,
        ...item.data()
      }))
      dispatch(setProductos(productos));
    } catch (error) {
      console.log(error);
    }
  };
};

export const eliminarProducto = (id) => {
  return async (dispatch) => {
    try {
      // await axios.delete("http://localhost:4000/restaurant/" + id);

      const doc = await db.collection("productos").doc(id).delete();
      dispatch(deletProductosOk());
    } catch (error) {
      console.log(error);
    }
  };
};

export const agregarProducto = (producto) => {
  console.log("entroo");
  return async (dispatch) => {
    try {

      const doc = await db.collection("productos").add(producto);
      console.log("AGREGANDO PRDUCTO")
      console.log(doc)
      // await axios.post("http://localhost:4000/restaurant", {
      //   ...producto,
      // });
      dispatch(addProductoOk());
    } catch (error) { console.log(error)}
  };
};

export const obtenerProducto = (id) => {
  return async (dispatch) => {
    try {
      // const resultado = await axios.get(
      //   "http://localhost:4000/restaurant/?id=" + id
      // );
      const doc = await db.collection("productos").doc(id).get();
      let producto = {
        id: id,
        ...doc.data()
      }
      dispatch(getProducto(producto));
    } catch (error) {
      console.log(error);
    }
  };
};

export const editarProducto = (producto) => {
  return async (dispatch) => {
    try {
      // await axios.put("http://localhost:4000/restaurant/" + producto.id, {
      //   ...producto,
      // });
      const productoUpdate = {...producto};
      delete productoUpdate.id;
      const doc = await db.collection("productos").doc(producto.id).update(productoUpdate);
      dispatch(editProductoOk());
    } catch (error) {
      console.log(error);
    }
  };
};

const setProductos = (data) => {
  return {
    payload: data,
    type: "OBTENER_PRODUCTOS",
  };
};

const deletProductosOk = () => {
  return {
    payload: true,
    type: "ELIMINAR_PRODUCTO",
  };
};

const addProductoOk = () => {
  return {
    payload: true,
    type: "AGREGAR_PRODUCTO",
  };
};

const getProducto = (data) => {
  return {
    payload: data,
    type: "OBTENER_PRODUCTO",
  };
};

const editProductoOk = () => {
  return {
    payload: true,
    type: "EDITAR_PRODUCTO",
  };
};
