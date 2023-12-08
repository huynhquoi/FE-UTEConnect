// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFmilSOcmvUJpv-7s6maDfDZpuhQDYEtk",
  authDomain: "fe-forum.firebaseapp.com",
  projectId: "fe-forum",
  storageBucket: "fe-forum.appspot.com",
  messagingSenderId: "642393150513",
  appId: "1:642393150513:web:ba7f3e6ba3ab3b8b09f110",
  measurementId: "G-6KZVTWNVL8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getStorage(app);
