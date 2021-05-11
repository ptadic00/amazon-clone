import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    /*secret*/
  });

  const db= firebase.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export{db, provider, auth}
