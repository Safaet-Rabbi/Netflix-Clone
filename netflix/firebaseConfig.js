// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMy4UIBIavTSVnOHpy7-fiQVU_iwVvxLg",
  authDomain: "netflix-clone-c499a.firebaseapp.com",
  projectId: "netflix-clone-c499a",
  storageBucket: "netflix-clone-c499a.appspot.com",
  messagingSenderId: "851392253286",
  appId: "1:851392253286:web:e56d4274495874faf88ca7",
  measurementId: "G-BC20RX74WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
