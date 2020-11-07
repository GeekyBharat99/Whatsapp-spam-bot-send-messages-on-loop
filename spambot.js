var message = "😎😎😎😎😎";
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent('input', {bubbles: true});
var textbox = document.getElementsByClassName("_3FRCZ")[1];
setInterval(function(){ 
    textbox.innerHTML = message;
textbox.dispatchEvent(event);
document.getElementsByClassName("_1U1xa")[0].click(); }, 1000);