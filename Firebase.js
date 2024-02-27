import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, get, push, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD00nvub_92O_R1uc_JrwThKBH8SIvDCow",
  authDomain: "first-projekt-7d444.firebaseapp.com",
  databaseURL: "https://first-projekt-7d444-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "first-projekt-7d444",
  storageBucket: "first-projekt-7d444.appspot.com",
  messagingSenderId: "344916382383",
  appId: "1:344916382383:web:a59363df5a5ec2c8aa3a5a"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app)

const dataRef = ref(db, "My data")


function getData() {
  return get(dataRef)
    .then(d => d.val())
}

function setData(data) {
  set(dataRef, data)
    .then(console.log("new data set"))
}

function addData(data) {
  push(dataRef, data)
    .then(console.log("new data added"))
}

export { app, db, dataRef, getData, setData, addData }