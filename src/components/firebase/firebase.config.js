// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDYQ5KcemNmP5IZWfBT5DsCa90Ojyp5aQk',
  authDomain: 'electronic-envantory.firebaseapp.com',
  projectId: 'electronic-envantory',
  storageBucket: 'electronic-envantory.appspot.com',
  messagingSenderId: '564864657561',
  appId: '1:564864657561:web:91bf5be64c8bf66326f008',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
