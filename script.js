let winMsg="Victory :)";
let loseMsg="Crushing Defeat :(";
let tieMsg="Tie :|";
let moveList=["Rock","Paper","Scissors"];
let statusDisplay= document.querySelector('#status-head');
let moveDisplays=document.querySelectorAll('.move-display h2');
let buttons=document.querySelectorAll('button');
startGame();
function calcResult(move1,move2){
    if(move1 == move2)
        return tieMsg;
    else if(move1==0 && move2==2 || move1==1 && move2==0 || move1==2 && move2==1)
        return winMsg;
    else
        return loseMsg;

}
function randomMove(){
    return Math.floor(Math.random()*3);
}
function startGame(){
    statusDisplay.textContent="Choose!!";
    for(i=0;i<buttons.length;i++){
        buttons[i].textContent=moveList[i];
        buttons[i].style.display="inline-block";
        buttons[i].addEventListener("click",endgame);
    }
    moveDisplays.forEach((move,counter)=>{
        move.style.display="none";
    }
    )

}
function endgame(event){
    let playerMove = moveList.indexOf(event.target.textContent);
    let computerMove = randomMove();
    statusDisplay.textContent=calcResult(playerMove, computerMove);

    for(i=0;i<moveDisplays.length;i++){
        moveDisplays[i].style.display="inline-block";
    }
    moveDisplays[0].textContent='You played '+moveList[playerMove];
    moveDisplays[1].textContent='Computer played '+moveList[computerMove];

    for(i=0;i<buttons.length;i++){
        if(i==1){
            buttons[1].textContent="Play Again";
            buttons[1].removeEventListener("click",endgame);
            buttons[1].addEventListener("click",startGame);
        }
        else
            buttons[i].style.display="none";
    }
}
//startGame();