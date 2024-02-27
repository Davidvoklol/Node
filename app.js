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

async function showData() {
  const content = await getData()
  dataP.innerHTML = content
  console.log(content)
}
function hideData() {
  dataP.innerHTML = null
}
function SetData() {
  setData(input.value)
  input.value = null
}

dataBG.addEventListener("click", showData)
dataBH.addEventListener("click", hideData)
dataBS.addEventListener("click", SetData)