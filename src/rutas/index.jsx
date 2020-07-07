import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import {firebase} from '../firebase/firebaseConfig';
/** Views */
import Productos from "../views/Productos";
import AgregarProducto from "../views/Productos/Agregar";
import EditarProducto from "../views/Productos/Editar";
import BuscarProducto from "../views/Productos/Buscar";
import DetalleProducto from "../views/Productos/Detalle";

import Login from "../views/Login";

import RutaPrivada from "./RutaPrivada";
import RutaPublica from "./RutaPublica";

import {login} from '../actions/auth'
import {useDispatch} from 'react-redux'

function App() {

    const [revisando, setRevisando] = useState(true);
    const [estaAutenticado, setEstaAutenticado] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            console.log("el usuario en rutas");
            console.log(user);
            if(user?.uid){
                dispatch(login(user.uid, user.email));
                setEstaAutenticado(true);
            } else {
                setEstaAutenticado(false);
            }
            setRevisando(false);
        })
    }, [])

    if(revisando) return <h1>Cargando ....</h1>
  return (
    <BrowserRouter>
      <Switch>
        <RutaPublica estaAutenticado={estaAutenticado} exact path="/" component={Login} />
        <RutaPrivada
          estaAutenticado={estaAutenticado}
          exact
          path="/productos"
          component={Productos}
        />
        <RutaPrivada
          estaAutenticado={estaAutenticado}
          exact
          path="/producto/nuevo"
          component={AgregarProducto}
        />
        <RutaPrivada
          estaAutenticado={estaAutenticado}
          exact
          path="/producto/editar/:id"
          component={EditarProducto}
        />
        <RutaPrivada
          estaAutenticado={estaAutenticado}
          exact
          path="/producto/detalle/:id"
          component={DetalleProducto}
        />
        <RutaPrivada
          estaAutenticado={estaAutenticado}
          exact
          path="/producto/buscar"
          component={BuscarProducto}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
