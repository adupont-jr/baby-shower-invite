import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAgh23yCxQd2mO5MRbLCtcZGffugA2ICp8",
  authDomain: "babyshower-invite-a1155.firebaseapp.com",
  projectId: "babyshower-invite-a1155",
  storageBucket: "babyshower-invite-a1155.firebasestorage.app",
  messagingSenderId: "464390825660",
  appId: "1:464390825660:web:65e2f556e24f74356c92b9",
  measurementId: "G-M9Q31T32ST"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { db, analytics };
