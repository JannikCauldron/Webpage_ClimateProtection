const quiz_data = [
    {
        "question": "Frage",
        "answer_1": "A: Aaal",
        "answer_2": "B: Brot",
        "answer_3": "C: Chris",
        "answer_4": "D: Draußen",
        "rightAnswer": "answer_2"
    },
    {
        "question": "FrageFrage",
        "answer_1": "A: Augen",
        "answer_2": "B: Bötchen",
        "answer_3": "C: Claus",
        "answer_4": "D: Drüsen",
        "rightAnswer": "answer_3"
    }
]

function resetAnswerButton(button)
{
    button.style["background-color"] = "rgb(236, 236, 236)";
    button.classList.add("button-hover");
}

function setNewQuestion(questionNumber) 
{
    quiz_model.firstElementChild.textContent = quiz_data[questionNumber]["question"];
    
    answer_model[BUTTON_ROW_AB].childNodes[BUTTON_COL_AC].innerText = quiz_data[questionNumber]["answer_1"];
    answer_model[BUTTON_ROW_AB].childNodes[BUTTON_COL_BD].innerText = quiz_data[questionNumber]["answer_2"];
    answer_model[BUTTON_ROW_CD].childNodes[BUTTON_COL_AC].innerText = quiz_data[questionNumber]["answer_3"];
    answer_model[BUTTON_ROW_CD].childNodes[BUTTON_COL_BD].innerText = quiz_data[questionNumber]["answer_4"];
}

function buttonClicked() 
{
    this.classList.remove("button-hover");

    const correctAnswer = quiz_data[questionCnt]["rightAnswer"];
    if (this.innerText == quiz_data[questionCnt][correctAnswer])
    {
        this.style["background-color"] = "green";
    }
    else
    {
        this.style["background-color"] = "red";
    }
    setTimeout(resetAnswerButton, 1000, this);
    setTimeout(setNewQuestion, 1000, ++questionCnt);
}


const quiz_model = document.getElementById('content-quiz');
const answer_model = document.getElementsByClassName('answer-group');

const BUTTON_ROW_AB = 0;
const BUTTON_ROW_CD = 1;
const BUTTON_COL_AC = 1;
const BUTTON_COL_BD = 3;
let questionCnt = 0;

setNewQuestion(questionCnt);
answer_model[BUTTON_ROW_AB].childNodes[BUTTON_COL_AC].onclick = buttonClicked;
answer_model[BUTTON_ROW_AB].childNodes[BUTTON_COL_BD].onclick = buttonClicked;
answer_model[BUTTON_ROW_CD].childNodes[BUTTON_COL_AC].onclick = buttonClicked;
answer_model[BUTTON_ROW_CD].childNodes[BUTTON_COL_BD].onclick = buttonClicked;