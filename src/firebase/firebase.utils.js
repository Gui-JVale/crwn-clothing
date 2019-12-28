import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 



const config = {
    apiKey: "AIzaSyAkYtV77n798QOzjfdj-juE3DYVEKXQ62c",
    authDomain: "crwn-db-37db8.firebaseapp.com",
    databaseURL: "https://crwn-db-37db8.firebaseio.com",
    projectId: "crwn-db-37db8",
    storageBucket: "crwn-db-37db8.appspot.com",
    messagingSenderId: "155859742713",
    appId: "1:155859742713:web:375e95ddc7206f39361728",
    measurementId: "G-N8GWNKNT7K"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
