import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCt0mRw78BU78HXZz4n1dKHhypNZfp9Py0",
  authDomain: "productos-nh.firebaseapp.com",
  databaseURL: "https://productos-nh.firebaseio.com",
  projectId: "productos-nh",
  storageBucket: "productos-nh.appspot.com",
  messagingSenderId: "514868057894",
  appId: "1:514868057894:web:2bc91207ecfdec212493e7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
