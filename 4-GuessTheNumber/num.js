let randomnum= (parseInt(Math.random()*100 + 1)); 

// const submit = document.querySelector('subt');
const submit = document.querySelector('#subt');

console.log("Submit ", submit);
const userInput  = document.querySelector('#guessField');
console.log("input ", userInput);
const guessesslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');



const p = document.createElement('p')

let prevGuess = []
console.log("prev guess", prevGuess);
let numguess = 1

let playgame = true
if (playgame) {
    submit.addEventListener('click', function (e) {
     e.preventDefault()
    const guess =  parseInt(userInput.value)
     console.log(guess);
    validtheguess(guess) ;
 }
    
)}

function validtheguess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number ");
        } else if (guess < 1) {
            alert("please enter a  number more than 1") ;
        }else if (guess > 100) {
            alert("please enter a  number less than 100 ") ; 
        } else{
            prevGuess.push(guess)
            console.log("push", prevGuess)
            console.log("guess check ", guess); 
            if (numguess === 11) {
                displayguess(guess)
                displayMessage(`Gameover. Random number was ${randomnum} `)
                endgame()
                } else {
                    displayguess(guess);
                    checktheguess(guess);
                }
        }
        }

function checktheguess(guess) {
    if (guess === randomnum) {
        displayMessage('you guess it right') ;
        endgame() ;
        } else if (guess < randomnum) {
            displayMessage('Number is Too low') ;
            
        } else if (guess > randomnum) {
            displayMessage('Number is Too high') ;
            
        }

    
}
function displayguess(guess) {
    userInput.value = ''      // for update the value
    guessesslot.innerHTML += `${guess}, `;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
    console.log(message);

    
} 
function endgame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h1>start new game</h2>`
    startover.appendChild(p)
    playgame = false
    newgame();
}
function newgame() {
   const newgamebutton =  document.querySelector('#newgame')
   newgamebutton.addEventListener('click', function (e) {
    randomnum = (parseInt(Math.random()*100 + 1)); 
    prevGuess = []
    numguess = 1
    guessesslot.innerHTML = ''
    remaining.innerHTML = `${11 - numguess}`;
    userInput.removeAttribute('disabled')
    startover.removeChild(p)
    playgame = true 
    
   })
    
}
