/*----- constants -----*/ 
var button = document.getElementById('rollButton');
var totalGames = 0;
let die = [1, 1, 1, 1];
const faces = 6; //min: 0; max:6;
const min = 1; // min of the value of the faces
const max = 6; // max of the value of the faces
const heldValues = [false, false, false, false];
const currentTurn = 0;
const maxTurn = 12;
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
let board, turn;

/*----- cached element references -----*/


/*----- event listeners -----*/ 



/*----- functions -----*/

function dice() {
    die.forEach((el, idx) => {
        let num =  Math.floor(Math.random() * 6) + 1;
        die[idx] = num
      })
   render()
}

button.onclick = function() {
    dice()
}

function render() {
    for(var i = 0; i < die.length; i++) {
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', 'images/dice1.png');
        imgElement.setAttribute('data-id', i);
        imgElement.addEventListener('click', die);
        document.querySelector('.die').appendChild(imgElement);
    }
}

render();


function rollDice() {
    var dieId = this.getAttribute('data-id');
    this.setAttribute('src', die[dieId].dieImage);
    console.log(die[dieId].dieImage)
    rollCount++;
}

// function createScoreBoard()
// function createDice()
// function rollDice() // at random // disabled after second turn//
// function rollRemaining()
// function holdDice()
// function sumDice() // sum of dice value
// function updateScore() //updates top score, bottom score and total
// function selectScore() // using radio button// return 0 if select category isn't satisfied// once category 
// //selected, it can't be used again. rule realized by disabling the previously selected radio buttons
// function resetGame()

// function displayImage(number) {
//     var die = document.getElementsByClassName('die');
//     die.innerHTML = number;
// }

// var button = document.getElementsByClassName('button');

// button.onClick = function () {
//     var result = faceDie.roll();
//     displayImage(result);
// };

//<div id="divScore13" style="DISPLAY: inline; WIDTH: 132px; 
//COLOR: #dcdcdc; HEIGHT: 22px"
//
//onclick="return divScore_onclick(13)"
//
//ondblclick="return divScore_ondblclick()" 
//
//onmouseover="return divScore_onmouseover(13)"
//
//onmouseout="return divScore_onmouseout(13)">
//     Chance
//</div>

//var score;
//var message="GAME OVER: <br />Your score was ";
//try {
//score = window.opener.document.getElementById("txtTotal").value;
//  document.getElementById("divMessage").innerHTML=message+score;
//}

//function component(width, height, color, x, y, type) {
//    this.type = type;
//    this.width = width;
//    this.height = height;
//    this.speedX = 0;
//    this.speedY = 0; 
//    this.x = x;
//    this.y = y; 
//    this.update = function() {
//      ctx = myGameArea.context;
//      if (this.type == "text") {
//        ctx.font = this.width + " " + this.height;
//        ctx.fillStyle = color;
//        ctx.fillText(this.text, this.x, this.y);
//      } else {
//        ctx.fillStyle = color;
//        ctx.fillRect(this.x, this.y, this.width, this.height);
//      }
//    }
//  ...
//  }
  

//function component(width, height, color, x, y, type) {
   // this.type = type;
   // if (type == "image") {
   //   this.image = new Image();
   //   this.image.src = color;
   // }
   // this.width = width;
   // this.height = height;
   // this.speedX = 0;
   // this.speedY = 0; 
   // this.x = x;
   // this.y = y; 
   // this.update = function() {
   //   ctx = myGameArea.context;
   //   if (type == "image") {
   //     ctx.drawImage(this.image, 
   //       this.x, 
   //       this.y,
   //       this.width, this.height);
   //   } else {
   //     ctx.fillStyle = color;
   //     ctx.fillRect(this.x, this.y, this.width, this.height);
   //   }
   // }
  //}

//function die() {
//    var diceimg = ["","Die1.png", "Die2.png", "Die3.png", "Die4.png", "Die5.png", "Die6.png"]
//    var selected = false;
//    var firstroll = false;
//    var turns = 0;
//    this.value = 0;
//    this.dom = null;
//    this.roll = function() {
//      if(!selected) { this.value = Math.floor(Math.random() * 6) + 1; }
//      this.dom = $('<img class="die" src="'+diceimg[this.value]+'" height="150x" width="150px">');
//      this.dom.click(function() { selected = !selected;
//      });
//    }
//  }
//
//  var dice = [];
//  dice.push(new die());
//  dice.push(new die());
//  dice.push(new die());
//  dice.push(new die());
//  dice.push(new die());
//
//  for(var i = 0; i < 5; i++) {
//    if(die.firstroll === true) {
//      dice[i].roll();
//      $('#dice-container').append(dice[i].dom);
//    }
//  }
//
//  $('#rollbutt').click(function() {
//    die.firstroll = true;
//    $('#dice-container').empty();
//    for(var i = 0; i < 5; i++) {
//      dice[i].roll();
//      $('#dice-container').append(dice[i].dom);
//    }
//  });
//
//  $('.scoreboard').click(function() {
//    console.log(dice[1].value);
//    console.log(dice[1].selected);
//    $(this).append(dice[1].value);
//  });
//});

//var dice = {
 //   sides: 6,
 //   roll: function () {
 //     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
 //     return randomNumber;
 //   }
 // } Prints dice roll to page