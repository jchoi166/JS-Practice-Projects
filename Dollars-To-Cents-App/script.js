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
    // for (const index of coinList) {
    //     console.log(index)
    // }
    for (let i = 0; i < coinList.length; i++) {
        // console.log(coinList[i])
        // coinList[i].firstChild.text = coinArray[0]
        coinList[i].firstChild.textContent = coinArray[i]
    }
}

form.addEventListener("submit", event => {
    event.preventDefault()
    console.log("submitted!")
    
    const dollarAmount = input.value 

    if (isFinite(dollarAmount)) {
        const totalCents = formatDollarsToCents(dollarAmount)
        const coins = formatCentsToCoins(totalCents)
        console.log(`Here are your total cents! ${coins}`)
        displayCoins(centsArray)
        
    } else {
        alert(`Please input a correct dollar amount! ${dollarAmount}`)
        input.value = ''
    }

})



