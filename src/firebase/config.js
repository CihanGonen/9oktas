import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC0lkNMMapqp8N6lFGk4RlK8eeuZlEJEjQ",
  authDomain: "oktas-9d5b3.firebaseapp.com",
  projectId: "oktas-9d5b3",
  storageBucket: "oktas-9d5b3.appspot.com",
  messagingSenderId: "1023751524203",
  appId: "1:1023751524203:web:fc5e605850588d55fd462e"
};

// init firabase
firebase.initializeApp(firebaseConfig);

// init services
const projectAuth = firebase.auth();

export { projectAuth };