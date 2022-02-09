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

const quiz_model = document.getElementById('content-quiz');
const answer_model = document.getElementsByClassName('answer-group');
//console.log(quiz_data);
//console.log(quiz_model);
//console.log(quiz_model.firstElementChild);

quiz_model.firstElementChild.textContent = quiz_data[0]["question"];
console.log(answer_model[0].childNodes[1].innerText);
answer_model[0].childNodes[1].innerText = quiz_data[0]["answer_1"];
answer_model[0].childNodes[3].innerText = quiz_data[0]["answer_2"];
answer_model[1].childNodes[1].innerText = quiz_data[0]["answer_3"];
answer_model[1].childNodes[3].innerText = quiz_data[0]["answer_4"];