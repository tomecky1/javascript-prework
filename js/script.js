// let playerMove = 'papier';
// printMessage('Player one zagrał ' + playerMove + ' Jeśli ruch komputera to nożyce, player one przegrał!');
let randomFraction = Math.random();
printMessage('Wylosowany ułamek to: '+ randomFraction);
let calculation = randomFraction * 3 + 1;
printMessage('Wylosowany ułamek pomnożony przez 3 i dodany 1: ' + calculation);
let roundNumber = Math.floor(calculation);
printMessage('Zaokrąglona liczba to: ' + roundNumber);
let randomNumber1 = Math.floor(Math.random()*11+9);
printMessage('losowanie 11 -19 -> ' + randomNumber1);

let randomNumber = Math.floor(Math.random()*3+1);
console.log('Wylosowana liczba to: '+ randomNumber);

let computerMove = 'nieznany ruch';
if(randomNumber == 1){
    computerMove = '<strong>kamień</strong>';
}
    else if(randomNumber == 2){
        computerMove = '<strong>papier</strong>';
    }
    else if(randomNumber == 3){
        computerMove == '<strong>nożyce</strong>';
    }

printMessage('Mój ruch to :' + computerMove);

let playerInput = prompt('Wybierz swój ruch: 1-kamień, 2-papier, 3-nożyce');
console.log('Gracz wybrał...: ' + playerInput);
let playerMove = 'nieznany ruch';
if(playerInput == 1){
    playerMove = '<strong>kamień</strong>';
} else if(playerInput == 2){
    playerMove = '<strong>papier</strong>'
    } else if(playerInput == 3){
        playerMove = '<strong>nożyce</strong>'
    } 

printMessage('Twój ruch: ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa.');
} else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa.');
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Komputer wygrywa.');
} else if(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
} else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
} else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
} else if(playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch gracza');
} else printMessage('nieznany błąd');