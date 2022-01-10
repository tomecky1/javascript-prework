let randomFraction = Math.random();
printMessage("Wylosowany ułamek to: " + randomFraction);
let calculation = randomFraction * 3 + 1;
printMessage("Wylosowany ułamek pomnożony przez 3 i dodane 1 = " + calculation);
let roundNumber = Math.floor(calculation);
printMessage("Wylosowana liczba z zakresu 1 do 3 to: " + roundNumber);

printMessage('<hr>');
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("Wylosowana liczba to: " + randomNumber);
function getMoveName(argMoveId){
    if (argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
        return "papier";
    } else if (argMoveId == 3){
        return "nożyce";
    }
    else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
    }
  }

let computerMove = getMoveName(randomNumber);
// if (randomNumber == 1) {
//     computerMove = "kamień";
// } else if (randomNumber == 2){
//     computerMove = "papier";
// } else if (randomNumber == 3){
//     computerMove = "nożyce";
// }
printMessage("Mój ruch to " + computerMove);
let playerInput = prompt("Drogi graczu wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce");
console.log("Gracz wpisał: " + playerInput);
let playerMove = getMoveName(randomNumber);

// if (playerInput == 1){
//     playerMove = "kamień"
// } else if (playerInput == 2){
//     playerMove = "papier";
// } else if (playerInput == 3){
//     playerMove = "nożyce";
// }
printMessage("Twój ruch graczu to: " + playerMove);
displayResult(computerMove, playerMove);
