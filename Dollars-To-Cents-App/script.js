"use strict"

console.log("hello there")

const form = document.querySelector("#converter")
// const input = document.querySelector("#dollar-input")

form.addEventListener("submit", (event)=> {
    event.preventDefault()
    console.log("submitted!")
    
    const dollarAmount = event.target.querySelector("#dollar-input").value

    if (isFinite(dollarAmount)) {
        console.log(`Its a number! ${dollarAmount}`)
        
    } else {
        console.log(`Its a string! ${dollarAmount}`)
    }

})

