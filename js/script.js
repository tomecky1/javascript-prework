let randomFraction = Math.random();
printMessage('Wylosowany ułamek to: '+ randomFraction);
let calculation = randomFraction * 3 + 1;
printMessage('Wylosowany ułamek pomnożony przez 3 i dodany 1: ' + calculation);
let roundNumber = Math.floor(calculation);
printMessage('Zaokrąglona liczba to: ' + roundNumber);
let randomNumber1 = Math.floor(Math.random()*11+9);
printMessage('losowanie 11 -19 -> ' + randomNumber1);
printMessage('<hr>');
function playGame(playerInput){
    let score = displayResult;
    clearMessage();
    let randomNumber = Math.floor(Math.random()*3+1);
    console.log('Wylosowana liczba to: '+ randomNumber);
    function getMoveName(argMoveID){
        if(argMoveID == 1){
            return stone;
        } else if(argMoveID == 2){
            return paper;
        } else if(argMoveID == 3){
            return scissors;
        } else {
            printMessage('Nie znam ruchu o ID ' + argMoveID + '.');
            return 'nieznany ruch';
        }
    }
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    // let playerInput = prompt('Wybierz swój ruch: 1-kamień, 2-papier, 3-nożyce');
    console.log('Gracz wybrał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch: ' + playerMove);
    score(computerMove, playerMove);
    console.log('Ruchy graczy: ', computerMove, playerMove);
    printMessage('<hr>');
}
let playButton1 = document.getElementById('play-stone');
playButton1.addEventListener('click', function(){playGame(1)('Guzik Kamień został kliknięty')});
let playButton2 = document.getElementById('play-paper');
playButton2.addEventListener('click', function(){playGame(2)('Guzik Papier został kliknięty')});
let playButton3 = document.getElementById('play-scissors');
playButton3.addEventListener('click', function(){playGame(3)('Guzik Nożyce został kliknięty')});