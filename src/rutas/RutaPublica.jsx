import React from "react";
import { Route, Redirect } from "react-router-dom";

const RutaPublica = ({ estaAutenticado, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        estaAutenticado ? <Redirect to="/productos" /> : <Component {...props} />
      }
    />
  );
};

export default RutaPublica;
