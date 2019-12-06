let randomFraction = Math.random();
printMessage('Wylosowany ułamek to: '+ randomFraction);
let calculation = randomFraction * 3 + 1;
printMessage('Wylosowany ułamek pomnożony przez 3 i dodany 1: ' + calculation);
let roundNumber = Math.floor(calculation);
printMessage('Zaokrąglona liczba to: ' + roundNumber);
let randomNumber1 = Math.floor(Math.random()*11+9);
printMessage('losowanie 11 -19 -> ' + randomNumber1);
printMessage('<hr>');
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
// if(randomNumber == 1){
//     computerMove = '<strong>kamień</strong>';
// }
//     else if(randomNumber == 2){
//         computerMove = '<strong>papier</strong>';
//     }
//     else if(randomNumber == 3){
//         computerMove == '<strong>nożyce</strong>';
//     }
printMessage('Mój ruch to: ' + computerMove);
let playerInput = prompt('Wybierz swój ruch: 1-kamień, 2-papier, 3-nożyce');
console.log('Gracz wybrał: ' + playerInput);
let playerMove = getMoveName(playerInput);
// if(playerInput == 1){
//     playerMove = '<strong>kamień</strong>';
// } else if(playerInput == 2){
//     playerMove = '<strong>papier</strong>'
//     } else if(playerInput == 3){
//         playerMove = '<strong>nożyce</strong>'
//     } 
printMessage('Twój ruch: ' + playerMove);
printMessage('Wynik gry: ' + displayResult(computerMove, playerMove));
console.log('Ruchy graczy: ', computerMove, playerMove);
printMessage('<hr>');
let testButton = document.getElementById('test-button');
testButton.addEventListener('click', buttonClicked);