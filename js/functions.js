function printMessage(msg){
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}
function clearMessage(){
    document.getElementById('messages').innerHTML = '';
}
function displayResult(argComputerMove, argPlayerMove){
    printMessage('Ja zagrałem, ' + argComputerMove + ', a Ty ' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Komputer wygrywa.');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrywa.');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Komputer wygrywa.');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
    } else if(argPlayerMove == 'nieznany ruch'){
        printMessage('nieznany ruch gracza');
    } else printMessage('nieznany błąd');    
}