import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAHwYW8FkKbKWiLhy8rfU4rQIsiS00XZUc",
    authDomain: "project-71-9d030.firebaseapp.com",
    projectId: "project-71-9d030",
    storageBucket: "project-71-9d030.appspot.com",
    messagingSenderId: "91662083498",
    appId: "1:91662083498:web:178144167862be192bf7d3"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
