// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvMzv45Vep9iC5ZNANk3PwZYZn8SS3Bn4",
  authDomain: "draluminio-11f7b.firebaseapp.com",
  projectId: "draluminio-11f7b",
  storageBucket: "draluminio-11f7b.appspot.com",
  messagingSenderId: "25686448415",
  appId: "1:25686448415:web:3a84c3d489887c4205382a",
  measurementId: "G-160CN8SX5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;