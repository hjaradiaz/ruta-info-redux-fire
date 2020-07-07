import React from "react";

import Rutas from './rutas'

import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
      <Provider store={store}>
        <Rutas/>
      </Provider>
  );
}

export default App;
