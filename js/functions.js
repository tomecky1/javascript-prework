const stone = 'kamień';
const paper = 'papier';
const scissors = 'nożyce';

function printMessage(msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessage() {
    document.getElementById('messages').innerHTML = '';
}

function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Ja zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
    } else if ((argComputerMove === paper && argPlayerMove === stone) || (argComputerMove === stone && argPlayerMove === scissors) || (argComputerMove === scissors && argPlayerMove === paper)) {
        printMessage('Komputer wygrywa.');
    } else printMessage('Graczu wygrywasz! :)');
}
