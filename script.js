// Creating an array of Questions to ask
let questions = [
    "What is the Capital of France?",
    "What is YOUR favorite color?",
    'How far away is the Earth from the sun?',
    'The answer is not a, b, or c,', 
    'What leaf is on the Canadian Flag?', 
    'Did you enjoy this quiz?'
];

// Creating an Array of objects- made up of answers
let answers = [
    {
        AnswerA: "Paris", AnswerB: "Amsterdam", AnswerC: "France", AnswerD: "baguette",
    },
    {
        AnswerA: "Red", AnswerB: "Blue", AnswerC: "Green", AnswerD: "Maybe one of the above but I really don't know",
    },
    {
        AnswerA: "1 meter", AnswerB: "93 million miles", AnswerC: "93 million killometers", AnswerD: "the earth is flat and the sun is fake",
    },
    {
        AnswerA: "a)", AnswerB: "b)", AnswerC: "c)", AnswerD: "d)",
    },
    {
        AnswerA: "Pine", AnswerB: "elm", AnswerC: "Maple", AnswerD: "Basil",
    },
    {
        AnswerA: "yes", AnswerB: "no", AnswerC: "ofcourse", AnswerD: "god no!",
    },
];

// creating variable that will call a different question for every value (see correctF and incorrectF)
let questionNumber = 0

// function to show highscores lits when pressed highscores button. First click= show scores, second click= hide scores
let viewScores=false;

function showScores() {

    console.log=('hs button');

    viewScores = !viewScores;

    if (viewScores==true){
    document.getElementById('highScores').classList.remove('hide');
    } else {
    document.getElementById('highScores').classList.add('hide');
}}
document.getElementById('HS-Btn').addEventListener('click', showScores);

// creative variables for timer outside of function so tha they can be accessed globally
var count;
var interval;

function startTimer(){
    count = 60;
    interval = setInterval(function(){
        document.getElementById('count').innerHTML=count;
        count--;
    if (count <= 0){
        
        endQuiz();

    }}, 1000);}

 //  variables to shorten repetitiveness in 'question functions'
let startBox = document.querySelector('#startDiv');
let question = document.querySelector('#question');
let option0 = document.querySelector('#option0');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');

function questFun(i) {question.innerHTML=questions[i];};
function optionA(j) {option0.innerHTML=answers[j].AnswerA;};
function optionB(k) {option1.innerHTML=answers[k].AnswerB;};
function optionC(l) {option2.innerHTML=answers[l].AnswerC;};
function optionD(n) {option3.innerHTML=answers[n].AnswerD;};

// function to remove the questions and answers
function removeOptions(){
    question.innerHTML= "";
    option0.innerHTML= "";
    option1.innerHTML= "";
    option2.innerHTML= "";
    option3.innerHTML= "";
}
// function to remove listeners from question answers, so that new ones can be added for next question (so questions don't call both correct and incorrect)
function removeListener() {
    option0.removeEventListener('click', correctF);
    option0.removeEventListener('click', incorrectF);
    option1.removeEventListener('click', correctF);
    option1.removeEventListener('click', incorrectF);
    option2.removeEventListener('click', correctF);
    option2.removeEventListener('click', incorrectF);
    option3.removeEventListener('click', correctF);
    option3.removeEventListener('click', incorrectF);
}

// function to remove dialogue
function removeDialogue() {
    document.querySelector('#dialogue').innerHTML=""
}

// object to hold username and score
let scoreInput = {
    name: "",
    score: ""};
// function to store name and score in local storage when score-Btn is clicked.
function submitScore() {

    scoreInput.name = document.getElementById('textBox').value;
    scoreInput.score = count

    console.log(scoreInput.score);
    console.log(scoreInput.name);

    localStorage.setItem(count, JSON.stringify(scoreInput));
}
document.getElementById('score-Btn').addEventListener('click', submitScore);

// function to call if user selects correct answer. Shows 'correct' dialogue, increases question number, calls function for next question
function correctF(){
    console.log('correct');
    questionNumber++;
    removeListener();
    document.querySelector('#dialogue').innerHTML="CORRECT!"
    document.querySelector('#dialogue').style.color="green";

    setTimeout(function() {        
    if (questionNumber===2){
        questionTwo();}
    if (questionNumber===3){
        questionThree(); }
    if (questionNumber===4){
        questionFour();}
    if (questionNumber===5){
        questionFive();}
    if (questionNumber===6){
        questionSix();}
    if (questionNumber===7){
        endQuiz();}
    }, 1000);
}
// similar to correctF but also decreases timer by 10 seconds
function incorrectF() {
    console.log('incorrect');
    questionNumber++;
    count = count-10;
    removeListener();
    document.querySelector('#dialogue').innerHTML="WRONG!"
    document.querySelector('#dialogue').style.color="red";

    setTimeout(function(){
    if (questionNumber===2){
        questionTwo();}
    if (questionNumber===3){
        questionThree();}
    if (questionNumber===4){
        questionFour();}
    if (questionNumber===5){
        questionFive();}
    if (questionNumber===6){
        questionSix();}
    if (questionNumber===7){
        endQuiz();}
    },1000);
}

// start quiz function, called when user presses start button
function startQuiz()  {
    startTimer();
    console.log('you clicked start');
    questionNumber++;
    if (questionNumber === 1) {
        questionOne();}
}

document.getElementById('start').addEventListener('click', startQuiz);

// question functions, each one edits the html through DOM to change the question, options, and event listeners 
function questionOne (){
    
    startBox.classList.add('hide');

    removeDialogue();
    
    questFun(0);

    optionA(0);
    option0.addEventListener('click', correctF);
    
    optionB(0);
    option1.addEventListener('click', incorrectF);

    optionC(0);
    option2.addEventListener('click', incorrectF);

    optionD(0);
    option3.addEventListener('click', incorrectF);
}
function questionTwo() {
    
    removeDialogue();

    questFun(1);

    optionA(1);
    option0.addEventListener('click', incorrectF);
    
    optionB(1);
    option1.addEventListener('click', incorrectF);

    optionC(1);
    option2.addEventListener('click', incorrectF);

    optionD(1);
    option3.addEventListener('click', correctF);
}

    function questionThree() {

    removeDialogue();
    
    questFun(2);

    optionA(2);
    option0.addEventListener('click', incorrectF);
    
    optionB(2);
    option1.addEventListener('click', correctF);

    optionC(2);
    option2.addEventListener('click', incorrectF);

    optionD(2);
    option3.addEventListener('click', incorrectF);
}
    
function questionFour() {

    removeDialogue();
    
    questFun(3);

    optionA(3);
    option0.addEventListener('click', incorrectF);
    
    optionB(3);
    option1.addEventListener('click', incorrectF);

    optionC(3);
    option2.addEventListener('click', incorrectF);

    optionD(3);
    option3.addEventListener('click', correctF);
}
    
function questionFive() {

    removeDialogue();
    
    questFun(4);

    optionA(4);
    option0.addEventListener('click', incorrectF);
    
    optionB(4);
    option1.addEventListener('click', incorrectF);

    optionC(4);
    option2.addEventListener('click', correctF);

    optionD(4);
    option3.addEventListener('click', incorrectF);
}
    
function questionSix() {

    removeDialogue();
    
    questFun(5);

    optionA(5);
    option0.addEventListener('click', correctF);
    
    optionB(5);
    option1.addEventListener('click', incorrectF);

    optionC(5);
    option2.addEventListener('click', correctF);

    optionD(5);
    option3.addEventListener('click', incorrectF);
}

// endQuiz function, called when questionnumber=7
// removes questions and options, pauses timer, shows score as time left, un-hides submit box, and adds a button to reeresh page(play again),
function endQuiz() {

    console.log('done quiz!')

    clearInterval(interval);

    removeDialogue();
    removeOptions();

    document.querySelector('#finalScore').innerHTML=  `Compelete! your final score is ${count}!`;

    document.querySelector('.submitBox').classList.remove('hide');

    var playButton=document.createElement('Button');
    playButton.innerHTML="Play Again!";
    document.getElementById('buttons').appendChild(playButton);

    function pageRefresh() {
        location.reload();
        console.log('page refresh');
    }
    document.getElementById('buttons').addEventListener('click', pageRefresh);

}




