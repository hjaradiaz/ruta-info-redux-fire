import { firebase } from "../firebase/firebaseConfig";

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(login(user.uid, user.email));
    } catch (error) {}
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    try {
      firebase.auth().signOut();
      dispatch(logout());
    } catch (error) {}
  };
};

export const login = (uid, email) => {
  return {
    type: "LOGIN",
    payload: {
      uid,
      email,
    },
  };
};

const logout = () => {
    return {
        type: "LOGOUT",
      }; 
}
