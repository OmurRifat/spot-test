// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAs68tFJMSUdyWoU-XPX8sQpnXjI04NLdA",
    authDomain: "spot-test-d5172.firebaseapp.com",
    projectId: "spot-test-d5172",
    storageBucket: "spot-test-d5172.appspot.com",
    messagingSenderId: "702586243871",
    appId: "1:702586243871:web:b3c3c1c728b7041fad7e2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;