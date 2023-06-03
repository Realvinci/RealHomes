// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9ex7y8YiyX2JU4HGG7RxS7O7lHTTMspE",
  authDomain: "homes-3371b.firebaseapp.com",
  projectId: "homes-3371b",
  storageBucket: "homes-3371b.appspot.com",
  messagingSenderId: "283318026240",
  appId: "1:283318026240:web:e8731b48354ec3328958e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);