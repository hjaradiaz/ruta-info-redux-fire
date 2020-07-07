export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        uid: action.payload.uid,
        email: action.payload.email,
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
