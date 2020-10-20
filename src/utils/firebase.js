import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBlSeVHUj2Zd_J_aZeoXQ8OAgQS52UE5GU",
    authDomain: "telegram-app-abcf2.firebaseapp.com",
    databaseURL: "https://telegram-app-abcf2.firebaseio.com",
    projectId: "telegram-app-abcf2",
    storageBucket: "telegram-app-abcf2.appspot.com",
    messagingSenderId: "468884544679",
    appId: "1:468884544679:web:18f09f302e48b4fa680f82",
    measurementId: "G-GEB9ETDKYY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;