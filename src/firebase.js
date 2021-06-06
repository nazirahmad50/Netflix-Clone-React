import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJYL3RqqUQ7GjvEaoaF8PkvxilkmFYZAg",
  authDomain: "netflix-clone-df32d.firebaseapp.com",
  projectId: "netflix-clone-df32d",
  storageBucket: "netflix-clone-df32d.appspot.com",
  messagingSenderId: "436293948215",
  appId: "1:436293948215:web:eeebc862f3298fa0a000b2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
