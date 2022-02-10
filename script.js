const quiz_data = [
    {
        "question": "Frage",
        "answer_1": "A: Aaal",
        "answer_2": "B: Brot",
        "answer_3": "C: Chris",
        "answer_4": "D: Draußen",
        "rightAnswer": "answer_2"
    }
]

function setQuestion() {
    quiz_model.firstElementChild.textContent = quiz_data[questionNumber]["question"];

    answer_model[BUTTON_ROW_AB].childNodes[BUTTON_COL_AC].innerText = quiz_data[questionNumber]["answer_1"];
    answer_model[BUTTON_ROW_AB].childNodes[BUTTON_COL_BD].innerText = quiz_data[questionNumber]["answer_2"];
    answer_model[BUTTON_ROW_CD].childNodes[BUTTON_COL_AC].innerText = quiz_data[questionNumber]["answer_3"];
    answer_model[BUTTON_ROW_CD].childNodes[BUTTON_COL_BD].innerText = quiz_data[questionNumber]["answer_4"];
}

const quiz_model = document.getElementById('content-quiz');
const answer_model = document.getElementsByClassName('answer-group');

const BUTTON_ROW_AB = 0;
const BUTTON_ROW_CD = 1;
const BUTTON_COL_AC = 1;
const BUTTON_COL_BD = 3;
let questionNumber = 0;

setQuestion();