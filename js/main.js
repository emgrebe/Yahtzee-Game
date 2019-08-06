/*----- constants -----*/ 
const button = document.getElementById('rollButton');
let die = [1, 1, 1, 1];
const maxRounds = 12;
let currentRoll = 0;
const MAXROLLS = 3;
let arr = [];
let sum = 0;

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


/*----- functions -----*/
function rollDice() {
    die.forEach((el, idx) => {
        let num =  Math.floor(Math.random() * 6) + 1;
        let imgValue = faceImg[idx].face
        die[idx] = num
        imgValue = num
        arr.push(imgValue)
    })

    // let savedValues = die.map(faceImg => {
    //     if(faceImg.isHolding === true) {
    //         let imgval = faceImg[savedValues].face    
    //         arr.push(face) = savedValues
    //         arr = savedValues
    //         return imgval
    //     } else {
    //         return;
    //     }
    // })
    // console.log(savedValues)
   
    sumArray()
    render()
};

button.onclick = function() {
    rollDice();
};

function render() {
    let dieContainer = document.querySelectorAll('.dice')
    if(dieContainer.length === 0){
        die.forEach((el, idx) => {
            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', `images/dice${el}.png`);
            imgElement.setAttribute('id', `${idx}`);
            imgElement.setAttribute('class', 'dice');
            imgElement.addEventListener('click', die);
            document.querySelector('.die').appendChild(imgElement);
            let inptBtn = document.createElement('input');
            inptBtn.setAttribute('type', 'checkbox')
            inptBtn.setAttribute('id', 'chck')
            inptBtn.setAttribute('value', `${el}`)
            document.querySelector('.die').appendChild(inptBtn)
        })
    } else {
        die.forEach((el, idx) => {
            let indv = document.getElementById(`${idx}`);   
            indv.setAttribute('src', `images/dice${el}.png`)
            indv.setAttribute('value', `${el}`)

        //     let inputContainer = document.getElementById('input')
        // inputContainer[el] = indv[el, idx]
    console.log('hi')
        })
    }  
 };

function sumArray() {
    for(let i = 0; i < die.length; i ++) {
        sum += die[i];
    }
    document.getElementById('sub-result').innerText = sum;
    sum = 0;
};

render();

let isHolding = document.querySelector('input')
isHolding.addEventListener('click', function() {
    toggleCheckbox()
})

function toggleCheckbox() {
    if(isHolding === false) {
        console.log('hit')
    }
}