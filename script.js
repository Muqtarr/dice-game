const totalScore0 = document.querySelector('#score--0')
const totalScore1 = document.querySelector('#score--1')
const currentScore0 = document.querySelector('#current--0')
const currentScore1 = document.querySelector('#current--1')

const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const diceImg = document.querySelector('.dice')

const btnNew = document.querySelector('.btn--new')
const rollDiceBtn = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let currentScore, activePlayer, isPlayon, totalScores

const initGame = () =>{
    currentScore = 0
    isPlayon = true
    activePlayer = 0

    totalScores = [0,0] 
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')

    player0.classList.add('player--active')
    player1.classList.remove('player--active')

    totalScore0.textContent = 0
    totalScore1.textContent = 0
    currentScore0.textContent = 0
    currentScore1.textContent = 0
    diceImg.classList.add('hide')
}

initGame()

const changeActiveplayer = function(){
    // change active player
    document.querySelector(`#current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 1 ? 0 : 1
    // document.querySelector(`player--${activePlayer}`).classList.remove('player--active')
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}

rollDiceBtn.addEventListener('click', function(){

    


    if (!!isPlayon){
        // 1) generate random number 1-6
    const random = Math.trunc(Math.random()*6) + 1

    diceImg.src = `dice-${random}.png`
    diceImg.classList.remove('hide')
    console.log('random', random)

    // 2) if generated number === 1
    if (random !== 1){
        // add score
        currentScore += random
        // currentScore0.textContent = currentScore
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    } else {
        changeActiveplayer();
    }
    }

})

holdScoreBtn.addEventListener('click', function(){

    
    if (!!isPlayon){
        //1) Add points to active player
    totalScores[activePlayer] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = totalScores[activePlayer]

    //1.2) if active player took more than 20 points
    if(totalScores[activePlayer]>=20){
        //active player won 
        
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`#current--${activePlayer}`).textContent = 0
        diceImg.classList.add('.hide')
        isPlayon = false
    } else {
        //change active player
        changeActiveplayer();
    }

    //2) Change active player
    changeActiveplayer();
    }
    
})

btnNew.addEventListener('click', initGame)