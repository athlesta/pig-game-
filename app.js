/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var activePlayer, roundScore,score;
activePlayer=0;
roundScore=0;
score=[0,0];
//dice=Math.floor(Math.random()*6)+1;
//document.querySelector('#current-'+ activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';


document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function(){
   
    var dice=Math.floor(Math.random()*6)+1;
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src= 'dice-'+dice+'.png';
    
    if(dice !== 1)
        {
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }
    else
        {
            nextPlayer();
//            activePlayer === 0? activePlayer=1 : activePlayer=0;
//            roundScore=0;
//            document.getElementById('current-0').textContent='0';
//            document.getElementById('current-1').textContent='0';
////            if(activePlayer)
////                {
////                    document.querySelector('.player-0-panel').classList.remove('active');
////                    document.querySelector('.player-1-panel').classList.add('active');
////        
////                }
////            else{
////                    document.querySelector('.player-0-panel').classList.add('active');
////                    document.querySelector('.player-1-panel').classList.remove('active');    
////            }
//            document.querySelector('.player-0-panel').classList.toggle('active');
//            document.querySelector('.player-1-panel').classList.toggle('active');
//            diceDOM.style.display='none';     
        }
    
});
document.querySelector('.btn-hold').addEventListener('click', function(){
/**********************************************
                OUR TRY
*************************************************/    
//   score[activePlayer]+=roundScore;
//    document.getElementById('score-'+activePlayer).textContent=score[activePlayer];
//    roundScore=0;
//    activePlayer === 0? activePlayer=1 : activePlayer=0;
//    document.getElementById('current-0').textContent='0';
//    document.getElementById('current-1').textContent='0';
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');
/**************************************************
            ACTUAL CODE IS BELOW
***************************************************/

//add current score in global score array
    score[activePlayer]+=roundScore;

//update the UI 
    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];

// check if the player won
    if(score[activePlayer]>=20)
        {
            document.getElementById('name-'+activePlayer).textContent="WINNER !!! ";
        }
    else {
        nextPlayer();    
    }
    
//next player
    
    
});

function nextPlayer()
{
    activePlayer==0?activePlayer=1: activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}

















