import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBD7E00I4N4jQqvN3fK6wHmdwpozKz1g04",
  authDomain: "instagram-clone-react-24392.firebaseapp.com",
  projectId: "instagram-clone-react-24392",
  storageBucket: "instagram-clone-react-24392.appspot.com",
  messagingSenderId: "1060153069436",
  appId: "1:1060153069436:web:13c908e77b46b38092def9",
  measurementId: "G-PCKVMCFZY8"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db =firebase.firestore()

export  {firebase, db}