import  firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAwtr0IgPfUXddMWKdDr8uCdap1p7SzhzY",
  authDomain: "amazo-clone-8d0a6.firebaseapp.com",
  projectId: "amazo-clone-8d0a6",
  storageBucket: "amazo-clone-8d0a6.appspot.com",
  messagingSenderId: "892333649803",
  appId: "1:892333649803:web:09fc22ff00aa89f912498e"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
