import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/storage"
import "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyByKXXd5tGtQqTI-lBzje9a8NVHGeABlkw",
  authDomain: "medium-clone-ceda4.firebaseapp.com",
  projectId: "medium-clone-ceda4",
  storageBucket: "medium-clone-ceda4.appspot.com",
  messagingSenderId: "830201065185",
  appId: "1:830201065185:web:faca4a6dd6629cc57f51a0"
};

//init firebase

firebase.initializeApp(firebaseConfig)

//init services

const projectFireStore = firebase.firestore()
const projectStorage = firebase.storage();

const timeStamp = firebase.firestore.Timestamp


//init firebase auth

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { projectFireStore , projectStorage  , timeStamp }

export default firebase