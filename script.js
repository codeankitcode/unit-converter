const inputEl = document.querySelector("#input-el")
const btn = document.querySelector("#btn")
const lenghtEl = document.querySelector("#length-el")
const volumeEl = document.querySelector("#volume-el")
const massEl = document.querySelector("#mass-el")
console.log(massEl)
// console.log(inputVal)


const meterToFeet = 3.281
const literToGallon = 0.264
const kilosToPound = 2.204

// inputEl.addEventListener("click", function(){
//     lenghtEl.textContent = ""
// })

// can I create another function which calls this on click calls this func and also clear out the earlier text

btn.addEventListener("click", function(){
    const inputVal = inputEl.value 
    lenghtEl.innerHTML += `${inputVal} meters = ${Number(inputVal * meterToFeet).toFixed(3)} feet | ${inputVal} feet = ${Number(inputVal / meterToFeet).toFixed(3)} meters`
    volumeEl.innerHTML += `${inputVal} liters = ${Number(inputVal * literToGallon).toFixed(3)} gallons | ${inputVal} gallons = ${Number(inputVal / literToGallon).toFixed(3)} liters`
    massEl.innerHTML += `${inputVal} kilos = ${Number(inputVal * kilosToPound).toFixed(3)} pounds | ${inputVal} pounds = ${Number(inputVal / kilosToPound).toFixed(3)} kilos`

    
})

