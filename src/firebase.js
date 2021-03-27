import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC96SRGYcrVnl8hky53PAIWxUJoklgtdys",
    authDomain: "clone-aeeec.firebaseapp.com",
    projectId: "clone-aeeec",
    storageBucket: "clone-aeeec.appspot.com",
    messagingSenderId: "437930270113",
    appId: "1:437930270113:web:fe13e2cbeaa681ff22ffe0"
  });

  const db= firebase.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export{db, provider, auth}
