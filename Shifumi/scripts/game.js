const playerSpan = document.querySelector(".player-choice");
const resultSpan = document.querySelector(".game-choice");
const winnerSpan = document.querySelector(".winner-name");

const myButtons = document.querySelectorAll(".game-buttons");

myButtons.forEach(button => {
    button.addEventListener('click', function(event) {play(button.id)});
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function play(pressed_button_id){
    let choice = getRandomInt(30);
    if(choice < 10) {
        playerSpan.textContent = document.getElementById(pressed_button_id).textContent;
        resultSpan.textContent = "Pierre"; 
        check_winner(pressed_button_id, "stone");
    }
    else if(choice < 20) {
        playerSpan.textContent = document.getElementById(pressed_button_id).textContent;
        resultSpan.textContent = "Feuille";
        check_winner(pressed_button_id, "paper");
    }
    else {
        playerSpan.textContent = document.getElementById(pressed_button_id).textContent;
        resultSpan.textContent = "Ciseaux";
        check_winner(pressed_button_id, "scissors");
    }
}

function check_winner(pressed_button_id, choice){
    if( pressed_button_id == "paper" && choice == "paper" || 
        pressed_button_id == "stone" && choice == "stone" || 
        pressed_button_id == "scissors" && choice == "scissors") 
    {
        winnerSpan.textContent = "Égalité !";
    }
    else if (pressed_button_id == "paper" && choice == "stone" || 
             pressed_button_id == "scissors" && choice == "paper" || 
             pressed_button_id == "stone" && choice == "scissors")
    {
        winnerSpan.textContent = "Toi ! Bravo";
    }
    else{
        winnerSpan.textContent = "Moi ! Je t'ai battu :)";
    }
}