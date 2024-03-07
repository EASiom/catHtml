// Create a new Audio object
var clickSound = new Audio('./resources/yippee-tbh.mp3');

clickSound.volume = 0.5;

// Get the button element
var yippieButton = document.getElementById('yippieButton');


function playSound() {
    clickSound.play();
}


