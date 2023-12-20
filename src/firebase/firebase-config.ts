import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


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

export const storage = getStorage();
