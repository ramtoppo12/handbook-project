// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCY_CnNX5zCIoO2xyPi0uOhmHTUo9aD5tg",
  authDomain: "handbook-21f1d.firebaseapp.com",
  projectId: "handbook-21f1d",
  storageBucket: "handbook-21f1d.appspot.com",
  messagingSenderId: "318639763525",
  appId: "1:318639763525:web:77482ff1d1b620413db32c",
  measurementId: "G-ZTJ9WYQESW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;