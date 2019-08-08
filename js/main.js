/*----- constants -----*/ 
let holdBtn = document.createElement('input')
const rollBtn = document.getElementById('rollButton')
const resetBtn = document.getElementById('resetButton')
let dice = [1, 1, 1, 1]
const maxRounds = 12
let currentRound = 0
let currentRoll = 0
const MAXROLLS = 3
let newDice = []
let selectedDice = []
let sum = 0
//display round number
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
    [1, 1 ], // 2
    [1, 1, 1],//3
    [1, 1, 1, 1] // 4
]
    
const twos = [
    [2],
    [2, 2], // 4
    [2, 2, 2], // 6
    [2, 2, 2, 2] // 8
]
        
const threes = [
    [3],
    [3, 3], //  6
    [3, 3, 3], // 9
    [3, 3, 3, 3] //12
]
            
const fours = [
    [4],
    [4, 4], // 8
    [4, 4, 4], // 12
    [4, 4, 4, 4] // 16
]
                
const fives = [
    [5],
    [5, 5], // 10
    [5, 5, 5], // 15
    [5, 5, 5, 5] // 20
]
                    
const sixes = [
    [6],
    [6, 6], // 12
    [6, 6, 6],// 18
    [6, 6, 6, 6] // 24
]
                        
const threeOfAKind = [
    [1, 1, 1], // 3
    [2, 2, 2], // 6
    [3, 3, 3], // 9
    [4, 4, 4], // 12
    [5, 5, 5], //15
    [6, 6, 6], // 18
]

const largeStraight = [
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6]
] // score = 30
    
const yahtzee = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
    [5, 5, 5, 5],
    [6, 6, 6, 6]
] // score = 50
        
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
};

function rollReset() {
    currentRoll = 0
    selectedDice = []
    console.log('You started a new round!')
}
resetBtn.onclick = function() {
    rollReset()
    alert('You started a new round')
}

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

function twosScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] == 2) {
            sum += selectedDice[i]
            document.getElementById('two-result').innerHTML = sum
        }
    }
    sum = 0;
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
        
function foursScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] == 4){
            sum += selectedDice[i]
            document.getElementById('four-result').innerHTML = sum
        }
    }
    sum = 0
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

function sixesScore() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] == 6){
            sum += selectedDice[i]
            document.getElementById('six-result').innerHTML = sum
        }
    } 
    sum = 0
};

function sumUpperScore() {

}

function Yahtzee() {
    for(var i = 0; i < selectedDice.length; i++) {
        if(selectedDice[i] == [i]){
            sum += selectedDice[i]
            document.getElementById('total-result').innerHTML = sum
        }
    }
}
