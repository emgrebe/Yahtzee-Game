/*----- constants -----*/ 
const faceDie = [
    {
        face: 1,
        dieImage: 'images/dice1.png'   
    },
    {
        face: 2,
        dieImage: 'images/dice2.png'
    },
    {
        face: 3,
        dieImage: 'images/dice3.png'
    },
    {
        face: 4,
        dieImage: 'images/dice4.png'
    },
    {
        face: 5,
        dieImage: 'images/dice5.png'
    },
    {
        face: 6,
        dieImage: 'images/dice6.png'
    }
]

const ones = [
    [1, 1 ],
    [1, 1, 1],
    [1, 1, 1, 1]
]

const twos = [
    [2, 2],
    [2, 2, 2],
    [2, 2, 2]
]

const threes = [
    [3, 3],
    [3, 3, 3],
    [3, 3, 3, 3]
]

const fours = [
    [4, 4],
    [4, 4, 4],
    [4, 4, 4, 4]
]
const fives = [
    [5, 5],
    [5, 5, 5],
    [5, 5, 5, 5]
]
const sixes = [
    [6, 6],
    [6, 6, 6],
    [6, 6, 6, 6]
]

const threeOfAKind = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 4],
    [5, 5, 5],
    [6, 6, 6],
]

const largeStraight = [
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

// Yahtzee = {
		
//     launch : 0,
//     die : [],
//     Combinations : [],
//     pair : false,
//     three_of_a_kind : false,
//     yahtzee : false,
//     large_straight : false,
//     straight : 0,

//     keptCombinations: [],

/*----- app's state (variables) -----*/
var min = 1;
var max = 6;
var turns = 3;




/*----- cached element references -----*/


/*----- event listeners -----*/ 
rollDieButton.addEventListener('click', rollDie);

/*----- functions -----*/
var createBoard = function() {
	for (var i = 0; i < dice.length; i++) {
		var diceElement = document.createElement('img');
		diceElement.setAttribute('src', 'images/dice1.png');
		diceElement.setAttribute('data-id', i);
		diceElement.addEventListener('click', rollDice);
		document.getElementById('game-board').appendChild(cardElement);
    }
}

var checkForMatch = function() {
    if (dieInPlay.length ===2) {
        if(dieInPlay[0] === dieInPlay[1]) {

        }
    }
}

var rollDice = function () {
    var dieId = this.getAttribute('data-id');
    this.setAttribute('src', faceDie[dieId].dieImage);
    console.log('Player Rolled ' + faceDie[dieId].face)
    console.log(faceDie[dieId].dieImage);
    dieInPlay.push(faceDie[dieId].face);
    checkForMatch();
    rollCount++;
}

function findCombinations() {
    for(var i = 0; i < 4; i++) {
        Yahtzee.Combinations[Yahtzee.die[i]]++;
        Yahtzee.straight = Yahtzee.straight | (1 << Yahtzee.die[i]);
    }
    for(var i = 0; i < 6; i++) {
        var value = Yahtzee.Combinations[i];
        switch(value) {

        }
    }
}

function roll(die) {
    var rando = getRandom(max, min);
    var spins = gteRandom(max, min);
}

function getRandom(max, min) {
    return Math.floor(Math.random() * (max-min)) + min;
}