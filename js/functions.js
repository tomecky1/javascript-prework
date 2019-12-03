function printMessage(msg){
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}
function clearMessage(){
    document.getElementById('messages').innerHTML = '';
}