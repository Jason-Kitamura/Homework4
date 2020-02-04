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

    
function correctF(){
    console.log('correct');
    questionNumber++;
    if (questionNumber===2){
        questionTwo();
    }
    if (questionNumber===3){
        questionThree();
    }
    if (questionNumber===4){
        questionFour();
    }
    if (questionNumber===5){
        questionFive();
    }
    if (questionNumber===6){
        questionSix();
    }
}
function incorrectF() {
    console.log('incorrect');
    questionNumber++;
    if (questionNumber===2){
        questionTwo();
    }
    if (questionNumber===3){
        questionThree();
    }
    if (questionNumber===4){
        questionFour();
    }
    if (questionNumber===5){
        questionFive();
    }
    if (questionNumber===6){
        questionSix();
    }
   }

function startQuiz()  {

    questionNumber++;

    console.log('you clicked start');

    if (questionNumber === 1) {
        questionOne();
    }

}

document.getElementById('start').addEventListener('click', startQuiz);

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


function questionOne (){
    
    startBox.classList.add('hide');
    
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
    




