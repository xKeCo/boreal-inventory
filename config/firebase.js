import { initializeApp } from "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDXNpeIdtm3Tz6bllbdsCcsS5VbBXffRI",
  authDomain: "boreal-inventory.firebaseapp.com",
  projectId: "boreal-inventory",
  storageBucket: "boreal-inventory.appspot.com",
  messagingSenderId: "716093184431",
  appId: "1:716093184431:web:c6348ebd0d10139e7d775a",
  measurementId: "G-WE96HGW0WB",
};

export const app = initializeApp(firebaseConfig);
