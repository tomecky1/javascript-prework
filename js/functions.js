const stone = 'kamień';
const paper = 'papier';
const scissors = 'nożyce';
function printMessage(msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}
function clearMessage(){
    document.getElementById('messages').innerHTML = '';
}
function displayResult(argComputerMove, argPlayerMove){
    printMessage('Ja zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if(argComputerMove == stone && argPlayerMove == paper){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == paper && argPlayerMove == stone){
        printMessage('Komputer wygrywa.');
    } else if(argComputerMove == scissors && argPlayerMove == paper){
        printMessage('Komputer wygrywa.');
    } else if(argComputerMove == paper && argPlayerMove == scissors){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == scissors && argPlayerMove == stone){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == stone && argPlayerMove == scissors){
        printMessage('Komputer wygrywa.');
    } else if(argComputerMove == stone && argPlayerMove == stone){
        printMessage('Remis!');
    } else if(argComputerMove == paper && argPlayerMove == paper){
        printMessage('Remis!');
    } else if(argComputerMove == scissors && argPlayerMove == scissors){
        printMessage('Remis!');
    } else if(argPlayerMove == 'nieznany ruch'){
        printMessage('nieznany ruch gracza');
        } else printMessage('nieznany błąd');    
}
