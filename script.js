const inputEl = document.querySelector("#input-el")
const btn = document.querySelector("#btn")
const lenghtEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")
console.log(massEl)
// console.log(inputVal)


// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

btn.addEventListener("click", function(){
    lenghtEl.innerHTML += ""
    const inputVal = inputEl.value 
    lenghtEl.innerHTML += `${inputVal} meters = ${Number(inputVal * 3.281).toFixed(2)} feet | ${inputVal} feet = ${Number(inputVal / 3.281).toFixed(2)} meters`
    volumeEl.innerHTML += `${inputVal} liters = ${Number(inputVal * 0.264).toFixed(2)} gallons | ${inputVal} gallons = ${Number(inputVal / 0.264).toFixed(2)} liters`
    massEl.innerHTML += `${inputVal} kilos = ${Number(inputVal * 2.204).toFixed(2)} pounds | ${inputVal} pounds = ${Number(inputVal / 2.204).toFixed(2)} kilos`

    
})

