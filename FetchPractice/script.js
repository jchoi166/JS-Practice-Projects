const displayJoke = document.querySelector('.display__joke')
const randomButton = document.querySelector('.display__random button')
const idButton = document.querySelector('.display__specific button')
const idInput = document.querySelector('.display__specific input')

// Random Joke
const getRandomJoke = () => {

    fetch("http://api.icndb.com/jokes/random")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayJoke.textContent = data.value.joke
        })
        

    // console.log(joke)
}

// getRandomJoke()

randomButton.addEventListener('click', function() {
    console.log('working')
    getRandomJoke()
})

// Joke with ID 

const getJokeByID = async (id) => {
    try {
        const response = await fetch(`http://api.icndb.com/jokes/${id}`)
        const joke = await response.json()
        
        if (joke.type !== "success") throw new Error('A joke with that ID does not exist!');

        console.log(response)
        console.log(joke.value.joke)

    } catch(err) {
        console.log(err)
    }
}

getJokeByID(134343434)

idButton.addEventListener('click', function() {
    console.log(idInput.value)
    getJokeByID(idInput.value)
})