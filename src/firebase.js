import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAoozTJrPlBAgZS3Vbf4K-fvrAlMuB14l8",
    authDomain: "vplex-f645a.firebaseapp.com",
    projectId: "vplex-f645a",
    storageBucket: "vplex-f645a.appspot.com",
    messagingSenderId: "137123721941",
    appId: "1:137123721941:web:8524cf52b51a18c248e85c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;