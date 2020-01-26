/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// Initial Variables
var scores, roundScore, lastRollDice1, lastRollDice2, activePlayer, gamePlaying, maxScore, setMaxScore;

// Initiation Function
init();

// Initiation Function Definition and Values
function init(){
    scores = [0,0]
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    maxScore = 100;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');    
}

// Button ROLL Function **
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying){
         var dice = Math.floor(Math.random() * 6) + 1;
         var diceTwo = Math.floor(Math.random() * 6) + 1;
         var diceDOM = document.querySelector('.dice');
         var diceDOM2 = document.querySelector('.dice2');
         diceDOM.style.display = 'block';
         diceDOM2.style.display = 'block';
         diceDOM.src = 'dice-' + dice + '.png';
         diceDOM2.src = 'dice-' + diceTwo + '.png';
         if ((lastRollDice1 == 6 && dice == 6) || (lastRollDice2 == 6 && diceTwo == 6)) {
             scores[activePlayer] = 0;
             document.getElementById('score-' + activePlayer).textContent = 0;
             nextPlayer()
         } else if (dice !== 1 || diceTwo !== 1) {    
            roundScore += dice + diceTwo;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;  
         } else {
             nextPlayer()
         }
    }   lastRollDice1 = dice;
        lastRollDice2 = diceTwo;          
});

// HOLD Score button Function
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= maxScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

// New Game button Function
document.querySelector('.btn-new').addEventListener('click', init);

// Next Player Function
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

}

// Set the MAX GAME SCORE Function
function setMaxScore(num) {
    if (gamePlaying){
        maxScore = num
        return num;
    } 
}

// Set the MAX GAME SCORE ENTER Button
document.querySelector('.final-score').addEventListener('input', function () {
    if (gamePlaying) {
        maxScore = setMaxScore(parseInt(document.querySelector('.final-score').value));
    }
});
