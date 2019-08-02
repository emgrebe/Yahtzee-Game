/*----- constants -----*/ 
const button = document.getElementById('rollButton');
let die = [1, 1, 1, 1];
const maxRounds = 12;
const currentRoll = 0;
const MAXROLLS = 3;
const faceImg = [
    {
        face: '1',
        dieImage: 'images/dice1.png'   
    },
    {
        face: '2',
        dieImage: 'images/dice2.png'
    },
    {
        face: '3',
        dieImage: 'images/dice3.png'
    },
    {
        face: '4',
        dieImage: 'images/dice4.png'
    },
    {
        face: '5',
        dieImage: 'images/dice5.png'
    },
    {
        face: '6',
        dieImage: 'images/dice6.png'
    }
]

// const ones = [
//     [1, 1 ], // 2
//     [1, 1, 1],//3
//     [1, 1, 1, 1] // 4
// ]
    
// const twos = [
//     [2, 2], // 4
//     [2, 2, 2], // 6
//     [2, 2, 2, 2] // 8
// ]
        
// const threes = [
//     [3, 3], //  6
//     [3, 3, 3], // 9
//     [3, 3, 3, 3] //12
// ]
            
// const fours = [
//     [4, 4], // 8
//     [4, 4, 4], // 12
//     [4, 4, 4, 4] // 16
// ]
                
// const fives = [
//     [5, 5], // 10
//     [5, 5, 5], // 15
//     [5, 5, 5, 5] // 20
// ]
                    
// const sixes = [
//     [6, 6], // 12
//     [6, 6, 6],// 18
//     [6, 6, 6, 6] // 24
// ]
                        
// const threeOfAKind = [
//     [1, 1, 1], // 3
//     [2, 2, 2], // 6
//     [3, 3, 3], // 9
//     [4, 4, 4], // 12
//     [5, 5, 5], //15
//     [6, 6, 6], // 18
// ]

// const largeStraight = [
//     [1, 2, 3, 4],
//     [2, 3, 4, 5],
//     [3, 4, 5, 6]
// ] // score = 30
    
// const yahtzee = [
//     [1, 1, 1, 1],
//     [2, 2, 2, 2],
//     [3, 3, 3, 3],
//     [4, 4, 4, 4],
//     [5, 5, 5, 5],
//     [6, 6, 6, 6]
// ] // score = 50
        
/*----- app's state (variables) -----*/
let board, scores;

/*----- cached element references -----*/


/*----- event listeners -----*/ 


/*----- functions -----*/
function rollDice() {
    die.forEach((el, idx) => {
        let num =  Math.floor(Math.random() * 6) + 1;
        die[idx] = num
        console.log(num);

    })
    render()
}

button.onclick = function() {
    rollDice();
}

function render() {
let dieContainer = document.querySelectorAll('.dice')
if(dieContainer.length === 0){
    for(var i = 0; i < die.length; i++) {
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', 'images/dice1.png');
        imgElement.setAttribute('id', i);
        imgElement.setAttribute('class', 'dice')
        imgElement.addEventListener('click', die);
        document.querySelector('.die').appendChild(imgElement);
        } 
    } else {
        for(var i = 0; i < die.length; i++) {

        }  
        console.log(dieContainer)
        // imgElement.setAttribute('src', 'images/dice1.png')
        }
    }

render()