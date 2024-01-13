// when 1 is encounted in dice when a player is playing, the current score of that player is reset to 0, while total score is not changed and the turn is given to other player
// when hold button is clicked, the player's current score is passed to player's total score and gets added to 0
//roll dice gives 6 outcomes - 1 to 6 with equal probability
// new game resets the total score and current score of both the players
// if score of a player exceeds 100, then he wins and bg is changed to black
const holdBtn = document.querySelector('.button3');
const diceImg = document.querySelector('.dice');
const rollDice = document.querySelector('.button2');
const newBtn = document.querySelector('.button1');
const currScore1 = document.querySelector('.current-score-1');
const currScore2 = document.querySelector('.current-score-2');

const totalScore1 = document.querySelector('.total-score-1');
const totalScore2 = document.querySelector('.total-score-2');

const player1 = document.querySelector('.left');
const player2 = document.querySelector('.right');


console.log( holdBtn, diceImg, rollDice, newBtn, currScore1, currScore2);

rollDice.addEventListener('click', function() {
    if( Number(totalScore1.textContent) < 100 && Number(totalScore2.textContent) < 100  ){
        let random = Math.trunc(Math.random() * 6 ) + 1;
        // console.log( random );
        diceImg.src = 'dice-' + random + '.png';
        // console.log( diceImg.src );
        diceImg.classList.remove('hidden');
        // if( random == 1 ) {
        //     reset();
        // }
        // else {
            
        if( player1.classList.contains('active') ) {
            if( Number(random) == 1 ) {
                currScore1.textContent = '0';
                changePlayer();
            }
            else {
                currScore1.textContent = Number(currScore1.textContent) + Number( random );
                
            }
        }
        else {
            if( Number(random) == 1 ) {
                currScore2.textContent = '0';
                changePlayer();
            }
            else {
                currScore2.textContent = Number(currScore2.textContent) + Number( random );
            }
        }
        
    }
});
const changePlayer = function() {
    if( player1.classList.contains('active') ) {
        player1.classList.remove('active');
        player1.classList.add('inactive');
        player2.classList.add('active');
        player2.classList.remove('inactive'); 
    }
    else  {
        player2.classList.remove('active');
        player2.classList.add('inactive');
        player1.classList.add('active');
        player1.classList.remove('inactive');
    }
}

holdBtn.addEventListener('click', function( ) {
    if( Number(totalScore1.textContent) < 100 && Number(totalScore2.textContent) < 100 ) {
        if( player1.classList.contains('active') ) {
            totalScore1.textContent = Number(currScore1.textContent) + Number( totalScore1.textContent );
            if( Number( totalScore1.textContent ) >= 100 ) {
                player1.classList.add('win');
                diceImg.add('hidden');
                player2.classList.add('lost');
            }
            currScore1.textContent = '0';
        }
        else {
            totalScore2.textContent = Number(currScore2.textContent) + Number( totalScore2.textContent );
            if( Number( totalScore2.textContent ) >= 100 ) {
                player2.classList.add('win');
                player1.classList.add('lost');
                diceImg.add('hidden');
            }
            currScore2.textContent = '0';
            
        }
        changePlayer();
    }
});
newBtn.addEventListener('click', function() {
    currScore1.textContent = '0';
    currScore2.textContent = '0';
    totalScore1.textContent = '0';
    totalScore2.textContent = '0';
    diceImg.classList.add('hidden');
    if( player1.classList.contains('inactive') ) {
        player1.classList.add('active');
        player2.classList.add('inactive');
        player1.classList.remove('inactive');
        player2.classList.remove('active');
    }
    if( player1.classList.contains('win') ) {
        player1.classList.remove('win');
        player2.classList.remove('lost');
    }
    else if( player1.classList.contains('lost') ) {
        player2.classList.remove('win');
        player1.classList.remove('lost');
    }
});
