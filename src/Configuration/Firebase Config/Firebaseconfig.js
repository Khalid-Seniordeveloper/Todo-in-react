 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBgsSCTW-MblX1J7XuLCNrpE6dLNZuaKcA",
   authDomain: "fir-in-react-bdb10.firebaseapp.com",
   projectId: "fir-in-react-bdb10",
   storageBucket: "fir-in-react-bdb10.appspot.com",
   messagingSenderId: "527214568749",
   appId: "1:527214568749:web:aed4c6b10c56c56d1cdfa4",
   measurementId: "G-S9R1V7QL93"
 };

export const app = initializeApp(firebaseConfig);
export  const analytics = getAnalytics(app);
export const db = getFirestore(app);
