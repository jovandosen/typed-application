var start = 0;

var finalMessage = '';

var timer;

var messageContainer;

var arrayOfChars = [];

var spanEl;

function blinkingLineAnimation()
{
    if(spanEl.classList.contains('blink')){
        spanEl.classList.remove('blink');
    } else {
        spanEl.classList.add('blink');
    }

    setTimeout(blinkingLineAnimation, 100);
}

function createBlinkingLine()
{
    spanEl = document.createElement("span");
    spanEl.innerText = "|";
    spanEl.className = "blink";
    blinkingLineAnimation();
}

createBlinkingLine();

function createDataArray()
{
    var message = 'htela sam ljetetiiii oooo brapoooo krila mi uzeliii';

    for(var i = 0; i < message.length; i++){
        arrayOfChars.push(message.charAt(i));
    }
}

function deleteText()
{
    if(arrayOfChars.length == 0){
        return false;
    } else {
        arrayOfChars.splice(-1);
    }

    var finalDeleteMessage = '';

    for(var i = 0; i < arrayOfChars.length; i++){
        finalDeleteMessage = finalDeleteMessage + arrayOfChars[i];
    }

    messageContainer = document.getElementById("message-container");

    messageContainer.innerHTML = finalDeleteMessage;

    messageContainer.appendChild(spanEl);

    setTimeout(deleteText, 1);
}

function writeText()
{
    messageContainer = document.getElementById("message-container");

    finalMessage = finalMessage + arrayOfChars[start];

    start = start + 1;

    if(start == arrayOfChars.length){
        clearInterval(timer);
        deleteText();
    }

    messageContainer.innerHTML = finalMessage;

    messageContainer.appendChild(spanEl);
}

createDataArray();

timer = setInterval(function(){
    writeText();
}, 100);