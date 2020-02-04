
let questions = [
    "What is the Capital of France?",
    "What is YOUR favorite color?",
    'How far away is the Earth from the sun?',
    'The answer is not a, b, or c,', 
    'What leaf is on the Canadian Flag?', 
    'Did you enjoy this quiz?'
];

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

let questionNumber = 0

let startBox = document.querySelector('#startDiv');
let question = document.querySelector('#question');
let option0 = document.querySelector('#option0');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');

var count;
var interval;

function startTimer(){
    count = 60;
    interval = setInterval(function(){
        document.getElementById('count').innerHTML=count;
        count--;
    if (count === 0){
        
        endQuiz();

    }}, 1000);}


function questFun(i) {question.innerHTML=questions[i];};
function optionA(j) {option0.innerHTML=answers[j].AnswerA;};
function optionB(k) {option1.innerHTML=answers[k].AnswerB;};
function optionC(l) {option2.innerHTML=answers[l].AnswerC;};
function optionD(n) {option3.innerHTML=answers[n].AnswerD;};

function removeOptions(){
    question.innerHTML= "";
    option0.innerHTML= "";
    option1.innerHTML= "";
    option2.innerHTML= "";
    option3.innerHTML= "";
}

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
function removeDialogue() {
    document.querySelector('#dialogue').innerHTML=""
}

    
function correctF(){
    console.log('correct');
    questionNumber++;
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

function incorrectF() {
    console.log('incorrect');
    questionNumber++;
    count = count-10;
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

function startQuiz()  {
    startTimer();
    console.log('you clicked start');
    questionNumber++;
    if (questionNumber === 1) {
        questionOne();}
}

document.getElementById('start').addEventListener('click', startQuiz);


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
    
    removeListener();
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

    removeListener();
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

    removeListener();
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

    removeListener();
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

    removeListener();
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

function endQuiz() {

    console.log('done quiz!')

    clearInterval(interval);

    removeListener();
    removeDialogue();
    removeOptions();



    document.querySelector('#finalScore').innerHTML=  `Compelete! your final score is ${count}!`;
}




