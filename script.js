//TODO Feedback, welche Frage ist richtig, wenn falsch ausgewählt

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

const quiz_model = document.getElementById('fade');
const answer_model = document.getElementsByClassName('answer-group');

const BUTTON_ROW_AB = 0;
const BUTTON_ROW_CD = 1;
const BUTTON_COL_AC = 1;
const BUTTON_COL_BD = 3;
const buttons = [ answer_model[BUTTON_ROW_AB].childNodes[BUTTON_COL_AC],
                    answer_model[BUTTON_ROW_AB].childNodes[BUTTON_COL_BD],
                    answer_model[BUTTON_ROW_CD].childNodes[BUTTON_COL_AC],
                    answer_model[BUTTON_ROW_CD].childNodes[BUTTON_COL_BD]];
let questionSectionHeight;
let intervalIDFadeOut;
let questionCnt = 0;
let rightAnswerCnt = 0;
let questionWordFeedback = document.getElementById('quiz-word-evaluation');
let questionEvaluation_model = document.getElementById('quiz-evaluation');

renderNewQuestionSection(questionCnt);
for(const but of buttons)
{
    but.onclick = buttonClicked;
}