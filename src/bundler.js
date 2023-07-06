// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  Firestore,
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrw45kVsnlA_dIHmpw3Xc9XeFfcQqsXSo",
  authDomain: "fir-web-test-e1dae.firebaseapp.com",
  projectId: "fir-web-test-e1dae",
  storageBucket: "fir-web-test-e1dae.appspot.com",
  messagingSenderId: "166105128949",
  appId: "1:166105128949:web:916e14bd52ccec873c8abc",
  measurementId: "G-8Q59FEE71P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

try {
  const customDocId = "your_custom_id"; // Replace with your desired custom ID
  const docRef = doc(collection(db, "users"), customDocId);
  await setDoc(docRef, {
    first: "Halit",
    middle: "Hamza",
  });
  console.log("Document written with ID:", customDocId);
} catch (e) {
  console.log("Error adding document: ", e);
}
