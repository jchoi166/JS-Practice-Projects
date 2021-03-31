'use strict';

// Callback functions

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase()
  
  }
  
  const upperFirstWord = function(str) {
    const [first, ...other]= str.split(' ')
    return[first.toUpperCase(), ...other].join(' ')
  }
  
  // Higer order function
  const transformer = function(str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)
  
    console.log(`Transformed by: ${fn.name}`)
  }
  
  transformer('Javascript is the best!', upperFirstWord)
  transformer('Javascript is the best!', oneWord)
  
  
  // Functions returning other functions 
  
  const greet = greeting => name => console.log( `${greeting} ${name}`)
  
  const greeterHey = greet('Hey')
  
  greeterHey("Jin")
  // greeterHey("steve")
  
  // 133. Challenge at the end of video
  
  // const addTax = function(rate) {
  //   return function (value) {
  //     return value + value * rate 
  //   }
  // }
  const addTax = rate => {
    return value => {
      return value + value * rate 
    }
  }
  
  const calcVat = addTax(.23)
  console.log(calcVat(100))
  console.log(calcVat(1000))
  
  // Coding Challenge #1
  const answerPollButton = document.querySelector(".poll")

  const poll = {
      question: "What is your favorite programming language?",
      options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
      replies: [0,0,0,0],

      registerNewAnswer: function () {
        const answer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
            )

        if (answer && answer >= 0 && answer <=3 ) {
            this.replies[answer] = this.replies[answer] + 1
            this.displayResults()
        } else {
            console.log("Please choose a number between 0 - 3")
        }
      },

      displayResults: function (type){
          type === "string" ? console.log(`Poll results are ${this.replies}`) : console.log(this.replies)
      }
  }

  answerPollButton.addEventListener('click', poll.registerNewAnswer.bind(poll))

  poll.registerNewAnswer()
  console.log('hello1')

  // Closures 

  