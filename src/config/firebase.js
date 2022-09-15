import * as firebase from 'firebase/app'
import 'firebase/database'
//Ya jo b service hme use karni expamle agar hme firebase auth use karna ho to
import 'firebase/auth'
//or connection string ko b copy paste kr dn ge

const firebaseConfig = {
    apiKey: "AIzaSyBlJRGTxANMrZ1NVD00_2dlnZBpex8wrCU",
    authDomain: "socialauth-82a2d.firebaseapp.com",
    projectId: "socialauth-82a2d",
    storageBucket: "socialauth-82a2d.appspot.com",
    messagingSenderId: "161150821521",
    appId: "1:161150821521:web:02ebeb04881da3b2768b30",
    measurementId: "G-H4K86ZJZ3W"
  };
  
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig)