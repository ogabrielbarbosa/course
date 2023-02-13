import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCsk48Zjd8vIZsWnqfOqDGXv17Rx1lbj8U",
    authDomain: "plataforma-curso-508b4.firebaseapp.com",
    projectId: "plataforma-curso-508b4",
    storageBucket: "plataforma-curso-508b4.appspot.com",
    messagingSenderId: "782366434291",
    appId: "1:782366434291:web:3469b4c92fa19317d96886",
    measurementId: "G-RY3Y2V55JJ"
});

const db = firebase.firestore();

const storage = firebase.storage();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db, storage };