## Whatsapp-spam-bot-send-messages-on-loop

### Steps to send whatsapp messages on loop: -

1. Open Whatsapp web.
1. Click on the person you want to send messages on loop.
1. then open the browser console.
1. copy the code from below.
1. paste the code in browser console.
1. Hit enter then it will ask you to type your message and the number of times you want to send the message.
1. Done. 👍

```javascript
var message = prompt("Enter your message", "‎");
var counter = parseInt(prompt("How many Times ?", 10));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
for (let index = 0; index < counter; index++) {
  textbox.innerHTML = message;
  textbox.dispatchEvent(event);
  document.getElementsByClassName("_4sWnG")[0].click();
}
```
