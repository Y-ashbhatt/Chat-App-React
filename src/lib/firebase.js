// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d9431.firebaseapp.com",
  projectId: "reactchat-d9431",
  storageBucket: "reactchat-d9431.appspot.com",
  messagingSenderId: "293872695413",
  appId: "1:293872695413:web:7a70f87b40d6661f0f603c",
  measurementId: "G-1T9RSV2SQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);