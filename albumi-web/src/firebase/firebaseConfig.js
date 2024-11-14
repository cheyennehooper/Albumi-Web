import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"

function StartFirebase(){
const firebaseConfig = {
  apiKey: "AIzaSyA0wOjPVWo2XO5dGWlIux1RHBsz7qfefMg",
  authDomain: "albumi-web.firebaseapp.com",
  projectId: "albumi-web",
  databaseURL: "https://albumi-web-default-rtdb.firebaseio.com/",
  storageBucket: "albumi-web.firebasestorage.app",
  messagingSenderId: "68639962324",
  appId: "1:68639962324:web:b4ae9edbb1430c4fd2b741"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

return { db, auth };
}
const { db, auth } = StartFirebase();
export { db, auth };
export default StartFirebase;