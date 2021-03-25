"use strict"

console.log("hello there")

const form = document.querySelector("#converter")
const input = document.querySelector("#dollar-input")
const coinList = document.querySelectorAll(".coin-list p")

let centsArray = []

const formatDollarsToCents = value => {
    return value ? Math.round(value * 100) : 0;
}

const formatCentsToCoins = cents => {
    let currentCents = cents
    let coinTypes = [25, 10, 5, 1]

    for (const coin of coinTypes) {
        centsArray.push(Math.trunc(currentCents / coin))
        currentCents = cents % coin
    }

    return centsArray
}

const displayCoins = coinArray => {
    // for (let i = 0; i < coinList.length; i++) {
    //     coinList[i].firstChild.textContent = coinArray[i]
    // }
    for (const [i, elem] of coinArray.entries()) {
        coinList[i].firstChild.textContent = elem
    }
}

const clearCents = () => {
    centsArray = []
    for (const index of coinList) {
        index.firstChild.textContent = ''
    }
}

form.addEventListener("submit", event => {
    event.preventDefault()
    console.log("submitted!")
    clearCents()
    
    const dollarAmount = input.value 
    
    if (isFinite(dollarAmount)) {
        const totalCents = formatDollarsToCents(dollarAmount)
        const coins = formatCentsToCoins(totalCents)
        console.log(`Here are your total cents! ${coins}`)
        displayCoins(centsArray)
        input.value = ''
        
    } else {
        alert(`Please input a correct dollar amount! ${dollarAmount}`)
        clearCents()
    }
})



