{
    function playGame(playerInput) {
        clearMessage();
        printMessage('<hr>');
        // const playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
        const score = displayResult;
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        const getMoveName = function (argMoveID) {
            if (argMoveID === 1) {
                return stone;
            } else if (argMoveID === 2) {
                return paper;
            } else if (argMoveID === 3) {
                return scissors;
            } else {
                printMessage('Nie znam ruchu o ID ' + argMoveID + '.');
                return 'nieznany ruch';
            }
        }
        const computerMove = getMoveName(randomNumber);
        printMessage('Mój ruch to: ' + computerMove);
        console.log('Gracz wybrał: ' + playerInput);
        const playerMove = getMoveName(playerInput);
        printMessage('Twój ruch: ' + playerMove);
        score(computerMove, playerMove);
        console.log('Ruchy graczy: ', computerMove, playerMove);
        printMessage('<hr>');
    }

    paperBtn = document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });
    stoneBtn = document.getElementById('play-stone').addEventListener('click', function () {
        playGame(1);
    });
    scissorsBtn = document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });
}