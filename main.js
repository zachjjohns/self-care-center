var affirmation = document.querySelector("#affirmation");
var mantra = document.querySelector("#mantra");
// var buttonSelected = document.querySelectorAll("input[name="msgtype"]");
var generatedMsg = document.querySelector(".generated-msg");
var meditate = document.querySelector("#meditate");

var receiveMessage = document.querySelector(".receive-message");

receiveMessage.addEventListener("click", makeMessage);

var affirmationList = [
    "I forgive myself and set myself free.",
    "I believe I can be all that I want to be.",
    "I am in the process of becoming the best version of myself.",
    "I have the freedom & power to create the life I desire.",
    "I choose to be kind to myself and love myself unconditionally.",
    "My possibilities are endless.",
    "I am worthy of my dreams.",
    "I am enough.",
    "I deserve to be healthy and feel good.",
    "I am full of energy and vitality and my mind is calm and peaceful.",
    "Every day I am getting healthier and stronger.",
    "I honor my body by trusting the signals that it sends me.",
    "I manifest perfect health by making smart choices.",
    "I be doin' the thing. Big time."
]


var mantraList = [
    "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
    "Don’t let yesterday take up too much of today.",
    "Every day is a second chance.",
    "Tell the truth and love everyone.",
    "I am free from sadness.",
    "I am enough.",
    "In the beginning it is you, in the middle it is you and in the end it is you.",
    "I love myself.",
    "I am present now.",
    "Inhale the future, exhale the past.",
    "This too shall pass.",
    "Yesterday is not today.",
    "The only constant is change.",
    "Onward and upward.",
    "Like Limp Bizkit said: Keep on rollin', baby.",
    "Don't fake the funk on a nasty dunk.",
    "Large quantities of currency correlates to larger quantities of troubles.",
]

function makeMessage() {
    meditate.classList.add("hidden");
    generatedMsg.classList.remove("hidden");
    if (!affirmation.checked && !mantra.checked)
        generatedMsg.innerText = "Message type not selected - please choose"
    if (affirmation.checked==true) {
        var randomAffirmation = affirmationList[getRandomIndex(affirmationList)];
        generatedMsg.innerText = randomAffirmation;
        
    }
    else if (mantra.checked==true) {
        var randomMantra = mantraList[getRandomIndex(mantraList)];
        generatedMsg.innerText = randomMantra;
        // meditate.classList.toggle("hidden");
        // generatedMsg.classList.toggle("hidden");
    }
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

