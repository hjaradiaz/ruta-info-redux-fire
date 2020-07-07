const intialState = {
    listaProductos: [],
    addOk: false,
    editOk: false,
    deleteOk: false,
    producto: {},
  };

export const productosReducer = (state={...intialState}, action) => {
    switch (action.type) {
        case "OBTENER_PRODUCTOS":
          return {
            ...state,
            listaProductos: action.payload,
            addOk: false,
            producto: {},
            editOk: false,
            deleteOk: false,
          };
        case "AGREGAR_PRODUCTO":
          return {
            ...state,
            addOk: action.payload,
          };
        case "OBTENER_PRODUCTO":
          return {
            ...state,
            producto: action.payload,
          };
        case "EDITAR_PRODUCTO":
          return {
            ...state,
            editOk: action.payload,
          };
        case "ELIMINAR_PRODUCTO":
          return {
            ...state,
            deleteOk: action.payload,
          };
        default:
          return state;
      }
}