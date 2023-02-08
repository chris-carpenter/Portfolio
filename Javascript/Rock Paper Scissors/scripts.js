/*
Title: Rock Paper Scissors
Author: Christopher C.
Date: 02/07/2023
*/

const rock = document.querySelector('.rock'); //Rock Selection Div
const paper = document.querySelector('.paper'); //Paper Selection Div
const scissors = document.querySelector('.scissors'); //Scissors Selection
const submit = document.querySelector('.start-button'); //Submit button to see who won the round
const reset = document.querySelector('.reset-button'); //Resets the score.

const winner_div = document.querySelector('.winner_choice'); //Displays the winner of the latest round.
const user_score_div = document.querySelector('.user_score'); //Displays the user score.
const cpu_score_div = document.querySelector('.cpu_score'); //Displays the cpu score.

let N; //To track the user's selection
let winner; //To track the winner of the round.
let computer_guess; //A number between 1 and 3 that is calculated each round
let choices = ['rock', 'paper', 'scissors']; //A list to reduce some typing later on in the program
let score_tracker = [0, 0]; //Score tracker declared.


//Begin the function declaration section
function is_winner(user, cpu){ //Calculates if user or cpu are the winner. Return 0 for tie. 1 for User. 2 for Cpu.

    if (user == 1){
        if (cpu == 1){return 0;}
        else if (cpu == 2){return 2;}
        else if (cpu == 3){return 1;}
    }

    if (user == 2){
        if (cpu == 1){return 1;}
        else if (cpu == 2){return 0;}
        else if (cpu == 3){return 2;}
    }

    if (user == 3){
        if (cpu == 1){return 2;}
        else if (cpu == 2){return 1;}
        else if (cpu == 3){return 0;}
    }
}

//Functions that listen for clicks on each div of choice and stores that data in the variable (N)

function chooseRock(){
    console.log('Rock chosen');
    rock.classList.add('chosen');
    paper.classList.remove('chosen');
    scissors.classList.remove('chosen');
    N = 1;
}
function choosePaper(){
    console.log('Paper chosen');
    paper.classList.add('chosen');
    rock.classList.remove('chosen');
    scissors.classList.remove('chosen');
    N = 2;
}
function chooseScissors(){
    console.log('Scissors chosen');
    scissors.classList.add('chosen');
    paper.classList.remove('chosen');
    rock.classList.remove('chosen');
    N = 3;
}

function resetScore(){ //A function to reset the score_tracker and start a new game
    score_tracker = [0, 0];
    user_score_div.textContent = score_tracker[0];
    cpu_score_div.textContent = score_tracker[1];
}

function submit_button(){ //Calculates the random cpu choice. Resets the css of the selection divs. Displays the winner of the round.
    computer_guess = Math.floor((Math.random()/3.333333 + .1)*10);
    winner = is_winner(N, computer_guess);
    console.log('You have chosen ' + choices[N-1] + '. The computer has chosen ' + choices[computer_guess - 1] + '.');
    switch (winner) {
        case 0:
            winner_div.textContent = "TIE";
            winner_div.style.backgroundColor = "yellow";
            break;
        case 1:
            winner_div.textContent = "USER";
            winner_div.style.backgroundColor = "green";
            score_tracker[0] += 1;
            break;
        case 2:
            winner_div.textContent = "CPU";
            winner_div.style.backgroundColor = "red";
            score_tracker[1] += 1;
            break;
    }
    paper.classList.remove('chosen');
    rock.classList.remove('chosen');
    scissors.classList.remove('chosen');
    user_score_div.textContent = score_tracker[0];
    cpu_score_div.textContent = score_tracker[1];
}

rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);
submit.addEventListener('click', submit_button);
reset.addEventListener('click', resetScore);
