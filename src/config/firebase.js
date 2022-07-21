import Firebase from 'firebase';


let config = {
   apiKey: "AIzaSyBFyv40LrdeH6gKC8rsqkBqdteYRqitv9M",

  authDomain: "rohaan-9e864.firebaseapp.com",

  databaseURL: "https://rohaan-9e864-default-rtdb.firebaseio.com",

  projectId: "rohaan-9e864",

  storageBucket: "rohaan-9e864.appspot.com",

  messagingSenderId: "465123482645",

  appId: "1:465123482645:web:ac74c2a1817753cc0b021c",

  measurementId: "G-MKPV827ZVY"

};

Firebase.initializeApp(config);
export default Firebase;