"use strict"

console.log('hello')

const recipeList = document.querySelector('.recipe-list')
const loader = document.querySelector('.loader') 


// let loading = true

const createRecipeList = async () => {
    let uList = document.createElement('ul')
    console.log(uList)

    for (let i = 0; i < 10; i++) {
        let recipe = await getRecipeItem()
        const markup = `<li>${recipe.strMeal}</li>`
        uList.insertAdjacentHTML('beforeend', markup)
    }

    loader.remove()
    recipeList.appendChild(uList)
    // await getRecipeItem()

}

const getRecipeItem = async () => {
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/http://www.themealdb.com/api/json/v1/1/random.php')
        const data = await response.json()

        console.log(data.meals[0])

        return (data.meals[0])

        // fetch('https://cors-anywhere.herokuapp.com/http://www.themealdb.com/api/json/v1/1/random.php')
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data.meals[0])
        //         // createRecipeList(data.meals[0])    
        //         recipe = data.meals[0]        
        //     })

    } catch(err) {
        console.log(err)
    }
}

createRecipeList()
// getRecipeItem()