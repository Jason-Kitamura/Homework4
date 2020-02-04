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
function correctfunction(num) {
    option+num.addEventListener('click', correctF);
}
function incorrectfunction(num) {
    option+num.addEventListener('click', incorrectF);
}


function questionOne (){
    
    startBox.classList.add('hide');
    
    questFun(0);

    optionA(0);
    correctfunction(0);
    
    optionB(0);
    incorrectfunction(1);

    optionC(0);
    incorrectfunction(2);

    optionD(3);
    incorrectfunction(3);
}
function questionTwo() {
    
    removeListener();

    questFun(1);

    optionA(1);
    incorrectfunction(0);
    
    optionB(1);
    incorrectfunction(1);

    optionC(1);
    incorrectfunction(2);

    optionD(1);
    correctfunction(3);
}

    
function questionThree() {

    removeListener();
    
    questFun(2);

    optionA(2);
    incorrectfunction(0);
    
    optionB(2);
    correctfunction(1);

    optionC(2);
    incorrectfunction(2);

    optionD(2);
    incorrectfunction(3);
}
    
function questionFour() {

    removeListener();

    questFun(3);

    optionA(3);
    incorrectfunction(0);
    
    optionB(3);
    incorrectfunction(1);

    optionC(3);
    incorrectfunction(2);

    optionD(3);
    correctfunction(3);
}
    
function questionFive() {

    removeListener();

    questFun(4);

    optionA(4);
    incorrectfunction(0);
    
    optionB(4);
    incorrectfunction(1);

    optionC(4);
    correctfunction(2);

    optionD(4);
    incorrectfunction(3);
}
    
function questionSix() {

    removeListener();
   
    questFun(5);

    optionA(5);
    correctfunction(0);
    
    optionB(5);
    incorrectfunction(2);

    optionC(5);
    correctfunction(3);

    optionD(5);
    incorrectfunction(4);
}
    




