import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPrb31CKw-ccplDVx952U6ozakDA4t7bk",
  authDomain: "travelia-db9f7.firebaseapp.com",
  projectId: "travelia-db9f7",
  storageBucket: "travelia-db9f7.appspot.com",
  messagingSenderId: "523005017356",
  appId: "1:523005017356:web:787c538ba661544b899d29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
