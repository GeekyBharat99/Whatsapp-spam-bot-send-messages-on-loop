
### Steps to send whatsapp messages on loop: -

1. Open Whatsapp web.
1. Click on the person you want to send messages on loop.
1. then open the browser console.
1. copy the complete code from below and edit the message variable.
1. paste the code in browser console.
1. Hit enter and done.

```javascript
var message = "😎😎😎😎😎";
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("_3FRCZ")[1];
setInterval(function () {
  textbox.innerHTML = message;
  textbox.dispatchEvent(event);
  document.getElementsByClassName("_1U1xa")[0].click();
}, 1000);
```

## Dont forget to close the browser when you think it is enough. otherwise it will keep on sending messsages.
