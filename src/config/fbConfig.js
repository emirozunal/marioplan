import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
  apiKey: "AIzaSyBQbaY0gHhPmvsO7uwJwXTCRqEIAl2yhg8",
  authDomain: "net-ninja-marioplan-7ee32.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-7ee32.firebaseio.com",
  projectId: "net-ninja-marioplan-7ee32",
  storageBucket: "net-ninja-marioplan-7ee32.appspot.com",
  messagingSenderId: "1009100792468",
  appId: "1:1009100792468:web:dcd38f9ca30d87a8ed8a81",
  measurementId: "G-D71T2S5ES4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

  export default firebase