//TODO: Code aufraeumen
function resetQuestionSection(button)
{
    for (const but of buttons)
    {
        but.style["background-color"] = "rgb(236, 236, 236)";
    }
    button.classList.add("button-hover");

    fadeOut();
}

function renderNewQuestionSection(questionNumber) 
{
    if (questionNumber < quiz_data.length)
    {
        quiz_model.firstElementChild.textContent = quiz_data[questionNumber]["question"];
        
        resetButtonOpacity();
        setNextButtonText(questionNumber);

        document.getElementById('quiz-progress').innerText = (questionNumber + 1) + "/" + quiz_data.length;
        fadeIn([quiz_model.firstElementChild].concat(buttons));

        updateQuizSectionHeight();
    }
    else
    {
        renderEvaluationSection();
    }
}

function renderEvaluationSection() {
    for (let i = 0; i < 4; i++) {
        quiz_model.children[i].style["display"] = "none";
    }
    
    if (rightAnswerCnt / quiz_data.length >= 0.5)
    {
        document.getElementById('evaluation-header').innerText = "Glückwunsch";
    }
    else
    {
        document.getElementById('evaluation-header').innerText = "Schade";
    }

    document.getElementById('rightAnswerCounter').innerText = rightAnswerCnt;
    document.getElementById('questionCounter').innerText = quiz_data.length;

    questionEvaluation_model.style["display"] = "flex";
    quiz_model.style["justifyContent"] = "center";
    fadeIn([questionEvaluation_model]);
}

function resetButtonOpacity() {
    for (const but of buttons) {
        but.style.opacity = 0;
    }
}

function setNextButtonText(questionNumber) {
    let cnt = 1;
    for (const but of buttons) {
        but.innerText = quiz_data[questionNumber]["answer_" + (cnt++)];
    }
}

function updateQuizSectionHeight() {
    let elem = window.getComputedStyle(document.getElementById('content-quiz'), null);
    questionSectionHeight = elem.getPropertyValue("height");
}

function setQuizSectionHeight()
{
    document.getElementById('content-quiz').style["height"] = questionSectionHeight;
}

function fadeIn(elements)
{
    console.log("fadeIn");
    setInterval(setOpacityFadeIn, 100, elements);
    questionWordFeedback.style["visibility"] = "hidden";
}

function fadeOut()
{
    console.log("fadeOut");
    intervalIDFadeOut = setInterval(setOpacityFadeOut, 90);
}

function setOpacityFadeIn(elements)
{
    let opacity = Number(elements[0].style.opacity);
    if (opacity < 1)
    {
        opacity += 0.1;
        for (const el of elements)
        {
            el.style.opacity = opacity;
        }
    } 
    else
    {
        clearInterval();
    }
}

function setOpacityFadeOut()
{
    let opacity = Number(buttons[0].style.opacity);
    if (opacity > 0)
    {
        opacity -= 0.15;
        quiz_model.firstElementChild.style.opacity = opacity;
        for (const but of buttons)
        {
            but.style.opacity = opacity;
        }
    } 
    else
    {
        clearInterval(intervalIDFadeOut);
    }
}

function buttonClicked() 
{
    this.classList.remove("button-hover");

    const correctAnswer = quiz_data[questionCnt]["rightAnswer"];
    if (this.innerText == quiz_data[questionCnt][correctAnswer])
    {
        rightAnswerFeedback(this);
    }
    else
    {
        wrongAnswerFeedback(this, correctAnswer);
    }
    //fadeOut anim has to fit in this time slot
    setTimeout(resetQuestionSection, 500, this);
    setTimeout(renderNewQuestionSection, 1500, ++questionCnt);
    setQuizSectionHeight();
}

function rightAnswerFeedback(button) {
    rightAnswerCnt++;
    button.style["background-color"] = "green";

    setWordFeedback("RICHTIG", "green");
}

function wrongAnswerFeedback(button, correctAnswer) {
    button.style["background-color"] = "red";
    for (const but of buttons) {
        if (but.innerText == quiz_data[questionCnt][correctAnswer]) {
            but.style["background-color"] = "green";
        }
    }

    setWordFeedback("FALSCH", "red");
}

function setWordFeedback(word, color) {
    questionWordFeedback.innerText = word;
    questionWordFeedback.style["color"] = color;
    questionWordFeedback.style["visibility"] = "visible";
}
