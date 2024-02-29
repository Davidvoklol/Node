import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js"

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyD00nvub_92O_R1uc_JrwThKBH8SIvDCow",
  authDomain: "first-projekt-7d444.firebaseapp.com",
  databaseURL: "https://first-projekt-7d444-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "first-projekt-7d444",
  storageBucket: "first-projekt-7d444.appspot.com",
  messagingSenderId: "344916382383",
  appId: "1:344916382383:web:a59363df5a5ec2c8aa3a5a"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth()

export { app, auth }