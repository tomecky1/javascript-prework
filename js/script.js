let randomFraction = Math.random();
printMessage("Wylosowany ułamek to: " + randomFraction);
let calculation = randomFraction * 3 + 1;
printMessage("Wylosowany ułamek pomnożony przez 3 i dodane 1 = " + calculation);
let roundNumber = Math.floor(calculation);
printMessage("Wylosowana liczba z zakresu 1 do 3 to: " + roundNumber);
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("Wylosowana liczba to: " + randomNumber);
let computerMove = "nieznany ruch";
if (randomNumber == 1) {
    computerMove = "kamień";
} else if (randomNumber == 2){
    computerMove = "papier";
} else if (randomNumber == 3){
    computerMove = "nożyce";
}
printMessage("Mój ruch to " + computerMove);
let playerInput = prompt("Drogi graczu wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce");
console.log("Gracz wpisał: " + playerInput);
let playerMove = "nieznany ruch";
if (playerInput == 1){
    playerMove = "kamień"
} else if (playerInput == 2){
    playerMove = "papier";
} else if (playerInput == 3){
    playerMove = "nożyce";
}
printMessage("Twój ruch graczu to: " + playerMove);
if(computerMove == "kamień" && playerMove == "papier"){
    printMessage('Ty wygrywasz!');
} else if(computerMove == "papier" && playerMove == "kamień"){
    printMessage('Komputer wygrywa.');
} else if(computerMove == "nożyce" && playerMove == "papier"){
    printMessage('Komputer wygrywa.');
} else if(computerMove == "papier" && playerMove == "nożyce"){
    printMessage('Ty wygrywasz!');
} else if(computerMove == "nożyce" && playerMove == "kamień"){
    printMessage('Ty wygrywasz!');
} else if(computerMove == "kamień" && playerMove == "nożyce"){
    printMessage('Komputer wygrywa.');
} else if(computerMove == "kamień" && playerMove == "kamień"){
    printMessage('Remis!');
} else if(computerMove == "papier" && playerMove == "papier"){
    printMessage('Remis!');
} else if(computerMove == "nożyce" && playerMove == "nożyce"){
    printMessage('Remis!');
} else if(playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch gracza');
} else printMessage('nieznany błąd');    