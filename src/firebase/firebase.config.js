// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzS3Ejy_9DQ48ld2obrzeM5ZZx_x_P-Is",
  authDomain: "gethost-83085.firebaseapp.com",
  projectId: "gethost-83085",
  storageBucket: "gethost-83085.appspot.com",
  messagingSenderId: "942813872488",
  appId: "1:942813872488:web:3fc88a97e1a5bbad4056dd",
  /* apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId, */
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
