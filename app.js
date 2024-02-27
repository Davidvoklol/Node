import { app, db, dataRef, getData, setData, addData }
from "./Firebase.js"

function getElement(id) {
  return document.getElementById(id)
}

const dataBG = getElement("showdata")
const dataBH = getElement("hidedata")
const dataP = getElement("data")
const dataBS = getElement("setdata")
const dataBA = getElement("adddata")
const input = getElement("input")
var hide = false

function showData() {
  hide = false
}
function hideData() {
  hide = true
}
function SetData() {
  setData(input.value)
  input.value = null
}
function AddData() {
  addData(input.value)
  input.value = null
}

dataBG.addEventListener("click", showData)
dataBH.addEventListener("click", hideData)
dataBS.addEventListener("click", SetData)
dataBA.addEventListener("click", AddData)

async function outputData() {
  dataP.innerHTML = await getData()
}





function loop() {
  if(!hide) { outputData() }
  else { dataP.innerHTML = null }

  requestAnimationFrame(loop)
}

loop()