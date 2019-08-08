/*----- constants -----*/ 
let holdBtn = document.createElement('input')
const rollBtn = document.getElementById('rollButton')
const nextRoundBtn = document.getElementById('nextRoundButton')
const oneBox = document.getElementById('one-result')
const twoBox = document.getElementById('two-result')
const threeBox = document.getElementById('three-result')
const fourBox = document.getElementById('four-result')
const fiveBox = document.getElementById('five-result')
const sixBox = document.getElementById('six-result')
const strtBox = document.getElementById('strt-result')
const yahtzeeBox = document.getElementById('yahtzee-result')

let dice = [1, 1, 1, 1]
const maxRounds = 8
let currentRound = 0
let currentRoll = 0
const MAXROLLS = 3
let newDice = []
let selectedDice = []
let sum = 0
let held = [false, false, false, false]
const faceImg = [
    {
        face: '1',
        dieImage: 'images/dice1.png',
    },
    {
        face: '2',
        dieImage: 'images/dice2.png',
    },
    {
        face: '3',
        dieImage: 'images/dice3.png',
    },
    {
        face: '4',
        dieImage: 'images/dice4.png',
    },
    {
        face: '5',
        dieImage: 'images/dice5.png',
    },
    {
        face: '6',
        dieImage: 'images/dice6.png',
    }
]

const ones = [
    [1],
    [1, 1 ], 
    [1, 1, 1],
    [1, 1, 1, 1]
]
    
const twos = [
    [2],
    [2, 2],
    [2, 2, 2],
    [2, 2, 2, 2]
]
        
const threes = [
    [3],
    [3, 3],
    [3, 3, 3],
    [3, 3, 3, 3]
]
            
const fours = [
    [4],
    [4, 4],
    [4, 4, 4],
    [4, 4, 4, 4]
]
                
const fives = [
    [5],
    [5, 5], 
    [5, 5, 5],
    [5, 5, 5, 5] 
]
                    
const sixes = [
    [6],
    [6, 6],
    [6, 6, 6],
    [6, 6, 6, 6]
]

const strt = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6]
]
    
const yahtzee = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
    [5, 5, 5, 5],
    [6, 6, 6, 6]
]
        
/*----- app's state (variables) -----*/
let board, scores;

/*----- functions -----*/
function rollDice() {
    dice.forEach((el, idx) => {
        let num =  Math.floor(Math.random() * 6) + 1
        let imgValue = faceImg[idx].face
        if(currentRoll < 3) {
        if(held[idx] === false) {
            dice[idx] = num
            imgValue = num
            newDice.push(imgValue)
            }
        }
    })
    currentRoll++
    render()
};

rollBtn.onclick = function() {
    rollDice()
    document.getElementById('rollsLeft').innerHTML = `Current Roll: ${currentRoll}`
};

function nextRound() {
    currentRoll = 0
    held = [false, false, false, false]
    currentRound++
    render()
};

nextRoundBtn.onclick = function() {
    nextRound()
    document.getElementById('currentRound').innerHTML = `Current Round: ${currentRound + 1}`
};

function render() {
    let diceContainer = document.querySelectorAll('.dice')
    if(diceContainer.length === 0){
        dice.forEach((el, idx) => {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', `images/dice${el}.png`)
            imgElement.setAttribute('id', `${idx}`)
            imgElement.setAttribute('class', 'dice')
            document.querySelector('.die').appendChild(imgElement)
            holdBtn = document.createElement('input')
            holdBtn.setAttribute('type', 'button')
            holdBtn.setAttribute('class', 'hold')
            holdBtn.setAttribute('id', `c-${idx}`)
            holdBtn.setAttribute('value', `${el}`)
            holdBtn.addEventListener('click', function(evt) {
                held[evt.target.id.replace('c-', '')] = true
                selectedDice.push(dice[evt.target.id.replace('c-', '')])
            })
            document.querySelector('.die').appendChild(holdBtn)
        })
    } else {
        dice.forEach((el, idx) => {
            let indv = document.getElementById(`${idx}`)
            indv.setAttribute('src', `images/dice${el}.png`)
            indv.setAttribute('value', `${el}`)
            let holdBtn = document.getElementById(`c-${idx}`)
            holdBtn.setAttribute('value', `${el}`)
        })
    }  
 };

function onesScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] == 1) {
            sum += selectedDice[i]
            document.getElementById('one-result').innerHTML = sum
        }
    } 
    sum = 0
};

oneBox.onclick = function() {
    onesScore()
};

function twosScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] == 2) {
            sum += selectedDice[i]
            document.getElementById('two-result').innerHTML = sum
        }
    }
    sum = 0;
};

twoBox.onclick = function() {
    twosScore()
};

function threesScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] == 3){
            sum += selectedDice[i]
            document.getElementById('three-result').innerHTML = sum
        }
    }
    sum = 0
};

threeBox.onclick = function() {
    threesScore()
};
        
function foursScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] == 4){
            sum += selectedDice[i]
            document.getElementById('four-result').innerHTML = sum
        }
    }
    sum = 0
};

fourBox.onclick = function() {
    foursScore()
};

function fivesScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] == 5){
            sum += selectedDice[i]
            document.getElementById('five-result').innerHTML = sum
        }
    }
    sum = 0
};

fiveBox.onclick = function() {
    fivesScore()
};

function sixesScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] == 6){
            sum += selectedDice[i]
            document.getElementById('six-result').innerHTML = sum
        }
    } 
    sum = 0
};

sixBox.onclick = function() {
    sixesScore()
};

function upperTotal() {
     
};

function strtScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] = strt[i]){
            total = 30
            document.getElementById('strt-result').innerHTML = total
        }
    }
};

strtBox.onclick = function() {
    strtScore()
};

function yahtzeeScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] = yahtzee[i]){
            total = 50
            document.getElementById('yahtzee-result').innerHTML = total
        }
    }
};

yahtzeeBox.onclick = function() {
    yahtzeeScore()
};