import React from "react";
import { Route, Redirect } from "react-router-dom";

import Header from "../components/Header";

const RutaPrivada = ({ estaAutenticado, component: Component, ...rest }) => {
  return (
    <>
      <Header />
      <main className="container">
        <Route
          {...rest}
          component={(props) =>
            estaAutenticado ? <Component {...props} /> : <Redirect to="/" />
          }
        />
      </main>
    </>
  );
};

export default RutaPrivada;
