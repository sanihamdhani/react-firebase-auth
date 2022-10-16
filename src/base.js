import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC0qqNArcEuNOvgmhUoAKRUbEZc3Rhcyfk",
  authDomain: "fir-react-82bc3.firebaseapp.com",
  projectId: "fir-react-82bc3",
  storageBucket: "fir-react-82bc3.appspot.com",
  messagingSenderId: "204556926835",
  appId: "1:204556926835:web:736b31daee920c29c44f06",
};
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
