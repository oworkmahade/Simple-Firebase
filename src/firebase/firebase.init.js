// do not store config on the client side

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3tv4v2Zok9eRRv8Lwnx2yqZ1cupYRxMc",
  authDomain: "simple-firebase-212bf.firebaseapp.com",
  projectId: "simple-firebase-212bf",
  storageBucket: "simple-firebase-212bf.firebasestorage.app",
  messagingSenderId: "969050791268",
  appId: "1:969050791268:web:e1eed8a2bb20df1bcf2e71",
  measurementId: "G-F5VGCWCEZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// const analytics = getAnalytics(app);

// export default app;
export default auth;
