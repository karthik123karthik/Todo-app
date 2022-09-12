import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyDFQ_bUc393XsKn63BoX8iSDrb489O30m4",
  authDomain: "todo-app-7d0e8.firebaseapp.com",
  projectId: "todo-app-7d0e8",
  storageBucket: "todo-app-7d0e8.appspot.com",
  messagingSenderId: "787127992846",
  appId: "1:787127992846:web:1df82d6544737de016b25f"
});

const db = getFirestore(firebaseApp);
export {db};

