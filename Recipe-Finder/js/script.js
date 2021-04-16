import {elements} from "./base.js"

console.log('hello')

// const displayBreweryList = async () => {
//     let uList = document.createElement('ul')
//     console.log(uList)

//     for (let i = 0; i < 10; i++) {
//         let recipe = await getRecipeItem()
//         const markup = `<li>${recipe.strMeal}</li>`
//         uList.insertAdjacentHTML('beforeend', markup)
//     }

//     elements.loader.remove()
//     elements.recipeList.appendChild(uList)

// }

const createListItem = (item) => {
    const markup = `<ul class="brewery-item">${item.name}</ul>`
    elements.breweryList.insertAdjacentHTML("beforeend", markup)
}

const getBreweryList = async (state) => {

    try {
        const response = await fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=10`)
        const data = await response.json()
        console.log(data)

        data.forEach(item => {
            createListItem(item)            
        })

    } catch(err) {
        console.log(err)
    }
}


getBreweryList('california')

console.log(elements.breweryList)

elements.breweryForm.addEventListener("submit", event => {
    event.preventDefault()
    let state = elements.breweryInput.value

    elements.breweryList.innerHTML = ''
    getBreweryList(state)
})

elements.breweryList.addEventListener("click", event => {
    console.log(event.target)
})

/* For next time
    create an array of brewery objects that populates every time a list is generated
    when brewery is clicked, take id (or some other identifier) match that with brewery in object to generate a display card for it. 
*/