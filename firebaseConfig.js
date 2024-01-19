// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhyqFqNG7hINT5hqFbXiDlE4GT9bS2Ig8",
  authDomain: "ai-saas-3feea.firebaseapp.com",
  projectId: "ai-saas-3feea",
  storageBucket: "ai-saas-3feea.appspot.com",
  messagingSenderId: "342561513500",
  appId: "1:342561513500:web:a7263647e425f6cdd83fd9"
};
// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app;


