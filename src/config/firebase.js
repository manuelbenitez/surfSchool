import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAtT1sdJAVcpbcoXup8JhNUP3yOHkZPsOc",
  authDomain: "sensei-7ada4.firebaseapp.com",
  databaseURL: "https://sensei-7ada4.firebaseio.com",
  projectId: "sensei-7ada4",
  storageBucket: "sensei-7ada4.appspot.com",
  messagingSenderId: "607582953746",
  appId: "1:607582953746:web:46a3e4cd329e78dbdd93cb",
  measurementId: "G-XXBJM2FLHW"
};

app.initializeApp(firebaseConfig)
app.firestore()

export default firebaseConfig