// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSuBwsgONd9SapqjjgIoj7QH_M8wvPLks",
  authDomain: "kmplus2025admin.firebaseapp.com",
  databaseURL: "https://kmplus2025admin-default-rtdb.firebaseio.com",
  projectId: "kmplus2025admin",
  storageBucket: "kmplus2025admin.firebasestorage.app",
  messagingSenderId: "976720543194",
  appId: "1:976720543194:web:8392068cd94c3d4b0494e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and export
export const db = getDatabase(app);
