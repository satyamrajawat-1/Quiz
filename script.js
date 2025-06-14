document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choice-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    const Questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Rome"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            correctAnswer: "Mars"
        },
        {
            question: "What is 10 + 5?",
            options: ["12", "13", "15", "20"],
            correctAnswer: "15"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Jane Austen"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "Which language runs in a web browser?",
            options: ["Java", "Python", "C++", "JavaScript"],
            correctAnswer: "JavaScript"
        }
    ];


    let currentQuestion = 0;
    let score = 0;


    questionContainer.classList.add('hidden')
    resultContainer.classList.add('hidden')

    startBtn.addEventListener('click',QuestionDisplay)
    nextBtn.addEventListener('click',()=>{

    })
    function QuestionDisplay(){
        questionContainer.classList.remove('hidden')
        startBtn.classList.add('hidden')
        nextBtn.classList.add('hidden')
        if(currentQuestion>(Questions.length)-1){
            questionContainer.classList.add('hidden')
            resultContainer.classList.remove('hidden')
            scoreDisplay.textContent =`${score} out of / ${Questions.length}`
        }else{
        questionText.textContent = Questions[currentQuestion].question;
        choicesList.innerHTML =""
        Questions[currentQuestion].options.forEach((option)=>{
            
            let li = document.createElement('li')
            li.textContent = option
            choicesList.appendChild(li)
        })
    }
    }


   let selectedAnswer =


    choicesList.addEventListener('click',(e)=>{
        if(e.target.tagName == 'LI'){
           let childern = choicesList.children
           Array.from(childern).forEach((child)=>{
            child.classList.remove('selected')
           })
            e.target.classList.toggle('selected')
            nextBtn.classList.remove('hidden')
            selectedAnswer =JSON.stringify(e.target.textContent)
           
        }
    })


    nextBtn.addEventListener('click',()=>{
        
        if(JSON.stringify(Questions[currentQuestion].correctAnswer) === selectedAnswer){
            console.log("correct")
            score++
        }
        currentQuestion++;
        QuestionDisplay()
    })

    restartBtn.addEventListener('click',()=>{
        score = 0
        currentQuestion = 0
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        QuestionDisplay();
    })

})
