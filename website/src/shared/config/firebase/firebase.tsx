import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: `AIzaSyCCC3gAvf6QV97FGx820_bv_v7soEWAPR4`,
  authDomain: `visul-ursului.firebaseapp.com`,
  projectId: `visul-ursului`,
  storageBucket: `visul-ursului.appspot.com`,
  messagingSenderId: `815947355220`,
  appId: `1:815947355220:web:6c40225cd64f64f865c9c1`
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);