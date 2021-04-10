const displayJoke = document.querySelector('.display__joke')
const randomButton = document.querySelector('.display__random button')
let obj

const getRandomJoke = () => {

    fetch("http://api.icndb.com/jokes/random")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayJoke.textContent = data.value.joke
        })
        

    // console.log(joke)
}

getRandomJoke()

randomButton.addEventListener('click', function() {
    console.log('working')
    getRandomJoke()
})