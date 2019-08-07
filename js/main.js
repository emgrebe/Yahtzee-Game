/*----- constants -----*/ 
let inptBtn = document.createElement('input');
const button = document.getElementById('rollButton');
let die = [1, 1, 1, 1];
const maxRounds = 12;
let currentRoll = 0;
const MAXROLLS = 3;
let arr = [];
let sum = 0;
let held = [false, false, false, false];
const faceImg = [
    {
        face: '1',
        dieImage: 'images/dice1.png',
        isHolding: false  //on click flip to true
    },
    {
        face: '2',
        dieImage: 'images/dice2.png',
        isHolding: false
    },
    {
        face: '3',
        dieImage: 'images/dice3.png',
        isHolding: false
    },
    {
        face: '4',
        dieImage: 'images/dice4.png',
        isHolding: false
    },
    {
        face: '5',
        dieImage: 'images/dice5.png',
        isHolding: false
    },
    {
        face: '6',
        dieImage: 'images/dice6.png',
        isHolding: false
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


/*----- event listeners -----*/ 


// let checkBox0 = document.getElementById('c-0')
// let checkBox1 = document.getElementById('c-1')
// let checkBox2 = document.getElementById('c-2')
// let checkBox3 = document.getElementById('c-3')
// console.log(checkBox1)

// let allEl = document.querySelectorAll('input')
// console.log(inptBtn)

/*----- functions -----*/
function rollDice() {
    die.forEach((el, idx) => {
        if(currentRoll < 3) {
			for(var i = 0; i<4; i++) {
				if(held[i] === false || currentRoll === 0) {
					die[i].innerHTML = Math.floor(Math.random() * 6) + 1;
				}
			}
			currentRoll++;
		}
        let num =  Math.floor(Math.random() * 6) + 1;
        let imgValue = faceImg[idx].face
        die[idx] = num
        imgValue = num
        arr.push(imgValue)
    })
    sumArray()
    render()
};

button.onclick = function() {
    rollDice()
};

function render() {
    let dieContainer = document.querySelectorAll('.dice')
    if(dieContainer.length === 0){
        die.forEach((el, idx) => {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', `images/dice${el}.png`)
            imgElement.setAttribute('id', `${idx}`)
            imgElement.setAttribute('class', 'dice')
            imgElement.addEventListener('click', rollDice)
            document.querySelector('.die').appendChild(imgElement)
            inptBtn = document.createElement('input')
            inptBtn.setAttribute('type', 'checkbox')
            inptBtn.setAttribute('class', 'chck')
            inptBtn.setAttribute('id', `c-${idx}`)
            inptBtn.setAttribute('value', `${el}`)
            document.querySelector('.die').appendChild(inptBtn)
        })
    } else {
        die.forEach((el, idx) => {
            let indv = document.getElementById(`${idx}`)
            indv.setAttribute('src', `images/dice${el}.png`)
            indv.setAttribute('value', `${el}`)
            let checkBtn = document.getElementById(`c-${idx}`)
            checkBtn.setAttribute('value', `${el}`)
        })
    }  
 };

function updateHold() {
    for(var i = 0; i < 4; i++) {
        held[i] = document.getElementById(`c-${idx}`).checked
    }
};

function sumArray() {
    for(let i = 0; i < die.length; i ++) {
        sum += die[i]
    }
    document.getElementById('sub-result').innerText = sum
    sum = 0;
    updateHold()
};

render()

let isHolding = document.querySelectorAll('input')
isHolding.onclick =  function() {
}

function check() {
    if(isHolding = true) {       
    }
};

function uncheck() {
    if(isHolding = false) {
    }
};

// function upperScore (value) {
//     let accumlator = 0;
//     for(var i = 0 ; i < 5; i++) {
//         if(Number(die[i].innerHTML) === value) {
//             accumulator = accumlator + value
//         }
//         return accumlator
//     }
// }

// getElm('one').onclick = upperScore('one', 1)
// getElm('two').onclick = upperScore('two', 2)
// getElm('three').onclick = upperScore('three', 3)
// getElm('four').onclick = upperScore('ones', 4)
// getElm('five').onclick = upperScore('ones', 5)
// getElm('six').onclick = upperScore('ones', 6)