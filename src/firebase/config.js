// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsH-Oona7u5JDs60jMKc4kgvVxeHPaf4M",
  authDomain: "reactcoder-2c836.firebaseapp.com",
  projectId: "reactcoder-2c836",
  storageBucket: "reactcoder-2c836.appspot.com",
  messagingSenderId: "535623982036",
  appId: "1:535623982036:web:e686a2022c66f943835441"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app);
}

