import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.BASEURL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase

const bootstrap = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    firebase.auth();
  }
};

export default { bootstrap };
