import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAvtk_5NpvswQyK1HyzxAIlFkio6KNQOLA",
  authDomain: "discord-clone-c854e.firebaseapp.com",
  databaseURL: "https://discord-clone-c854e.firebaseio.com",
  projectId: "discord-clone-c854e",
  storageBucket: "discord-clone-c854e.appspot.com",
  messagingSenderId: "131530634243",
  appId: "1:131530634243:web:269fbe1424be7275bcca36",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;