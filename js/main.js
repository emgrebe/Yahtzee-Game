/*----- constants -----*/ 
let checkBtn = document.createElement('input')
const rollBtn = document.getElementById('rollButton')
let dice = [1, 1, 1, 1]
const currentRound = 1
const maxRounds = 12
let currentRoll = 0
const MAXROLLS = 3
let newDice = []
// make an array of objects
//change names to be more descriptive
//display round number
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
// console.log(faceImg)
// console.log(faceImg[2].isHolding)
const ones = [
    [1, 1 ], // 2
    [1, 1, 1],//3
    [1, 1, 1, 1] // 4
]
    
const twos = [
    [2, 2], // 4
    [2, 2, 2], // 6
    [2, 2, 2, 2] // 8
]
        
const threes = [
    [3, 3], //  6
    [3, 3, 3], // 9
    [3, 3, 3, 3] //12
]
            
const fours = [
    [4, 4], // 8
    [4, 4, 4], // 12
    [4, 4, 4, 4] // 16
]
                
const fives = [
    [5, 5], // 10
    [5, 5, 5], // 15
    [5, 5, 5, 5] // 20
]
                    
const sixes = [
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

/*----- cached element references -----*/
const resultEls = {
    
}

/*----- event listeners -----*/ 
// checkBtn.addEventListener('click', check)
// checkBtn.addEventListener('change', (event) => {
//     if(event.target.checked) {
//         console.log('checked')


/*----- functions -----*/
function rollDice() {
    dice.forEach((el, idx) => {
        let num =  Math.floor(Math.random() * 6) + 1
        let imgValue = faceImg[idx].face
        dice[idx] = num
        imgValue = num
        newDice.push(imgValue)
    })
    check()
    sumArray()
    render()
};

rollBtn.onclick = function() {
    rollDice()
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
            checkBtn = document.createElement('input')
            checkBtn.setAttribute('type', 'checkbox')
            checkBtn.setAttribute('class', 'chck')
            checkBtn.setAttribute('id', `c-${idx}`)
            checkBtn.setAttribute('value', `${el}`)
            document.querySelector('.die').appendChild(checkBtn)
        })
    } else {
        dice.forEach((el, idx) => {
            let indv = document.getElementById(`${idx}`)
            indv.setAttribute('src', `images/dice${el}.png`)
            indv.setAttribute('value', `${el}`)
            let checkBtn = document.getElementById(`c-${idx}`)
            checkBtn.setAttribute('value', `${el}`)
        })
    }  
 };

function sumArray() {
    for(let i = 0; i < dice.length; i ++) {
        sum += dice[i]
    }
    document.getElementById('sub-result').innerText = sum
    sum = 0;
};

render()

function activeDice() {
    let activeDice = document.querySelectorAll('dice')
        currentDice = []
        if(activeDice) {
            for(var i = 0; i < hold.length; i++) {
                currentDice.push(hold[i].getAttribute('value'))
            }
            return currentDice
        } else {
            return currentDice
        }
};

function currentDice() {
    let currentDice = document.querySelectorAll('dice')
    return currentDice
}

function check() {
    dice.forEach((el, idx) => {
        for(var i = 0; i < 4; i++) {
            held[i] = document.getElementsByClassName('chck').checked
            let checkbox = document.getElementById(`c-${idx}`)
            checkbox.addEventListener('click', event)
            checkbox.addEventListener('change', (event) => {
                if(event.target.checked) {
                    event.preventDefault()
                }
            })
        }
    })
};        
//reference rock paper scissors
//add border to dice when clicked
//click dice toggle it and call render
//event.target.onclick
//tagname property 
//remove checkboxes