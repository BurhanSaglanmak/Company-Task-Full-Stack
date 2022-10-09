// Import the functions you need from the SDKs you need


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



//--------------------
const firebaseApp = firebase.initializeApp({
  apiKey: "Your ApiKey",
authDomain: "Your authDomain",
projectId: "Your projectId",
storageBucket: "Your storageBucket",
messagingSenderId: "Your messagingSenderId",
appId: "Your appId",
measurementId: "Your measurementId"
});




  
  const database = firebaseApp.firestore();
  
  export default database;