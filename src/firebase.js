import firebase from "firebase";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "netflix-clone-95e92.firebaseapp.com",
  projectId: "netflix-clone-95e92",
  storageBucket: "netflix-clone-95e92.appspot.com",
  messagingSenderId: "158853040575",
  appId: "1:158853040575:web:0f04baca751cd6a4def90a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
