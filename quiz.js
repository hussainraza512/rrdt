
const inputMarks=document.getElementById("input")
const result=document.getElementById("result")
const nameInput=document.getElementById("nameInput")


const questions = [


    {

        question: "Which is the largest animal in the world?",
        answers: [

            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Monkey", correct: false },
            { text: "Lion", correct: false }


        ]


    },

    {

        question: "Which is the smallest country in the world?",
        answers: [

            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri-Lanka", correct: false }


        ]

    },




    {

        question: "Which is the largest desser in the world?",
        answers: [

            { text: "Kalahri", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }


        ]





    },

    {

        question: "Which is the smallest continent in the world?",
        answers: [

            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }



        ]

    }



];



console.log(questions)
console.log(questions[0].answers[0].correct)


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;





function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion()
    result.style.display="none";
    nameInput.style.display="none";

    
}


function showQuestion(){

    resetState();
    result.style.display="none";
    nameInput.style.display="none";

    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer=>{

        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)

    })
}





function resetState(){
    result.style.display="none";
    nameInput.style.display="none";
    nextButton.style.display="none";
    while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild)
    }
}



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    // selectedBtn.classList.add("locked");
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });

    nextButton.style.display="block";
    

}


function showScore(){
    resetState();
    result.style.display="block";
    nameInput.style.display="block";
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!!`;
    nextButton.innerHTML="Play Again";
    // nextButton.style.display="none";  // agr ap chahty ky score lock ho jaye aur student play again py click kar ky dubara sa test dy paye
    nextButton.style.display="block";
   
    inputMarks.value=score;

}


function handleNextButton(){
    currentQuestionIndex++;
    
    if(currentQuestionIndex<questions.length){
        showQuestion()
    } else{

        showScore()
        inputMarks.value=score;

    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    } else{startQuiz()}
    
    // is else ko remove kar dain  agr ap chahty ky score lock ho jaye aur student play again py click kar ky dubara sa test dy paye

   
})



startQuiz();





































// let timerInterval;
// function startTimer() {
//   clearInterval(timerInterval);
//   let secondsRemaining = 20;
  
//   displayTime();

//   timerInterval = setInterval(() => {
//     secondsRemaining--;
//     displayTime();
//     if (secondsRemaining <= 0) {
//       clearInterval(timerInterval);
//       document.body.style.backgroundColor = "red";
//       showScore();
//     }
//   }, 1000);

//   function displayTime() {
//     const minutes = Math.floor(secondsRemaining / 60);
//     const seconds = secondsRemaining % 60;
//     document.getElementById('timer').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   }
// }




























