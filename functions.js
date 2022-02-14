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
    quiz_model.firstElementChild.textContent = quiz_data[questionNumber]["question"];
    
    for(const but of buttons)
    {
        but.style.opacity = 0;
    }
    let cnt = 1;
    for(const but of buttons)
    {
        but.innerText = quiz_data[questionNumber]["answer_" + (cnt++)];
    }

    document.getElementById('quiz-progress').innerText = (questionNumber + 1) + "/" + quiz_data.length;
    fadeIn();
}

function fadeIn()
{
    setInterval(setOpacityFadeIn, 100);
    questionWordFeedback.style["visibility"] = "hidden";
}

function fadeOut()
{
    intervalIDFadeOut = setInterval(setOpacityFadeOut, 90);
}

function setOpacityFadeIn()
{
    let opacity = Number(buttons[0].style.opacity);
    if (opacity < 1)
    {
        opacity += 0.1;
        quiz_model.firstElementChild.style.opacity = opacity;
        for (const but of buttons)
        {
            but.style.opacity = opacity;
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
        opacity -= 0.25;
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
        this.style["background-color"] = "green";

        setWordFeedback("RICHTIG", "green");
    }
    else
    {
        this.style["background-color"] = "red";
        for (const but of buttons)
        {
            if (but.innerText == quiz_data[questionCnt][correctAnswer])
            {
                but.style["background-color"] = "green";
            }
        }

        setWordFeedback("FALSCH", "red");
    }
    //fadeOut anim has to fit in this time slot
    setTimeout(resetQuestionSection, 500, this);
    setTimeout(renderNewQuestionSection, 1000, ++questionCnt);
}

function setWordFeedback(word, color) {
    questionWordFeedback.innerText = word;
    questionWordFeedback.style["color"] = color;
    questionWordFeedback.style["visibility"] = "visible";
}
