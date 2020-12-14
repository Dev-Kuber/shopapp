import firebase from"firebase/app"
import "firebase/auth"

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAdfZ4HGlUWfGC5EZ1JM3nfMRtY-fVqaTw",
    authDomain: "shop-app-auth.firebaseapp.com",
    projectId: "shop-app-auth",
    storageBucket: "shop-app-auth.appspot.com",
    messagingSenderId: "662357821633",
    appId: "1:662357821633:web:80e1f6f65dc28c4a3aec40"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
