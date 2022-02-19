const quiz_data = [
    {
        "question": "Welches Gas ist hauptverantwortlich für den Treibhauseffekt?",
        "answer_1": "Wasserstoff",
        "answer_2": "Helium",
        "answer_3": "Kohlenstoffdioxid",
        "answer_4": "Propan",
        "rightAnswer": "answer_3"
    },
    {
        "question": "Welcher Sektor verursacht in Deutschland am Meisten CO2?",
        "answer_1": "Verkehr",
        "answer_2": "Landwirtschaft",
        "answer_3": "Industrie",
        "answer_4": "Energiewirtschaft",
        "rightAnswer": "answer_4"
    },
    {
        "question": "Welches Konsumgut in Kilo verbraucht am wenigsten Wasser?",
        "answer_1": "Milch",
        "answer_2": "Röstkaffee",
        "answer_3": "T-Shirts",
        "answer_4": "Reis",
        "rightAnswer": "answer_1"
    },
    {
        "question": "Wie viele Buchen braucht es um den jährlich durchschnittlichen CO2 Ausstoß eines Deutschen auszugleichen?",
        "answer_1": "40-60",
        "answer_2": "170-220",
        "answer_3": "800-900",
        "answer_4": "560-600",
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