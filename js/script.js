{
  printMessage('<hr>');
  const playGame = function(playerInput){
  const score = displayResult;
  clearMessage();
  const randomNumber = Math.floor(Math.random()*3+1);
  console.log('Wylosowana liczba to: '+ randomNumber);
  const getMoveName = function(argMoveID){
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
  const computerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + computerMove);
  console.log('Gracz wybrał: ' + playerInput);
  const playerMove = getMoveName(playerInput);
  printMessage('Twój ruch: ' + playerMove);
  score(computerMove, playerMove);
  console.log('Ruchy graczy: ', computerMove, playerMove);
  printMessage('<hr>');
  }
    const playButton1 = document.getElementById('play-stone');
    playButton1.addEventListener('click', function(){playGame(1)});
    const playButton2 = document.getElementById('play-paper');
    playButton2.addEventListener('click', function(){playGame(2)});
    const playButton3 = document.getElementById('play-scissors');
    playButton3.addEventListener('click', function(){playGame(3)});
}