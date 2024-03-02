import { app, auth }
from "./firebase.js"

import { getDatabase, ref, set, push, get, remove }
from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

import { signInAnonymously, onAuthStateChanged, signOut }
from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";


const db = getDatabase(app)

const userUID = document.getElementById("uid")
const userNAME = document.getElementById("name")
const userEMAIL = document.getElementById("e-mail")
const login = document.getElementById("login")
const logout = document.getElementById("logout")

function setData(ref, data) {
    try {
        set(ref, data)
        console.log("setData: Success")
    }
    catch { console.log("setData: Fail") }
}
function addData(ref, data) {
    try {
        push(ref, data)
        console.log("addData: Success")
    }
    catch { console.log("addData: Fail") }
}
async function getData(ref) {
    const data = await get(ref)
    return data.toJSON()
}
function deleteData(ref) {
    try{
        remove(ref)
        if(ref._path.pieces_.length > 0) {
            console.log(ref._path.pieces_[ref._path.pieces_.length - 1] + 
            " was removed")
        } else { console.log("Database has been deleted") }
    }
    catch{ console.log("Remove: Failed") }
}