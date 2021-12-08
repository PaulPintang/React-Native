
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxey9CIgrwHPGT_T--dlya5ZjqwvnADHc",
  authDomain: "fir-auth-79d17.firebaseapp.com",
  projectId: "fir-auth-79d17",
  storageBucket: "fir-auth-79d17.appspot.com",
  messagingSenderId: "348833395254",
  appId: "1:348833395254:web:4e86f2f445781e0c3ede97",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };
