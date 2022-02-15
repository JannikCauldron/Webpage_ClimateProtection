//TODO: fadein/out schoener machen; Code aufraeumen; korrekte Zahlen verwenden.
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
        fadeIn([quiz_model.firstElementChild].concat(buttons));

        let elem = window.getComputedStyle(document.getElementById('content-quiz'), null);
        //console.log(elem.getPropertyValue("height"));
        questionSectionHeight = elem.getPropertyValue("height");
        //console.log(questionSectionHeight);
    }
    else
    {
        for (let i = 0; i < 4; i++)
        {
            quiz_model.children[i].style["display"] = "none";
        }
        //console.log(questionSectionHeight);
        questionEvaluation_model.style["display"] = "flex";
        quiz_model.style["justifyContent"] = "center";
        fadeIn([questionEvaluation_model]);
    }
    //console.log(document.getElementById('content-quiz'));
}

function setQuizSectionHeight()
{
    document.getElementById('content-quiz').style["height"] = questionSectionHeight;
    //console.log("Neue Hoehe");
    //console.log(document.getElementById('content-quiz').style["height"]);
}

function fadeIn(elements)
{
    setInterval(setOpacityFadeIn, 100, elements);
    questionWordFeedback.style["visibility"] = "hidden";
}

function fadeOut()
{
    intervalIDFadeOut = setInterval(setOpacityFadeOut, 90);
}

function setOpacityFadeIn(elements)
{
    //let opacity = Number(buttons[0].style.opacity);
    let opacity = Number(elements[0].style.opacity);
    if (opacity < 1)
    {
        opacity += 0.1;
        //quiz_model.firstElementChild.style.opacity = opacity;
        /*for (const but of buttons)
        {
            but.style.opacity = opacity;
        }*/
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
    setTimeout(setQuizSectionHeight, 2000);   
    /*
    if (questionCnt + 1 < quiz_data.length)
    {
        //fadeOut anim has to fit in this time slot
        setTimeout(resetQuestionSection, 500, this);
        setTimeout(renderNewQuestionSection, 1000, ++questionCnt);   
    }
    else
    {
        console.log(quiz_model);
        //fadeOut();
        for (let i = 0; i < 4; i++)
        {
            quiz_model.children[i].style["display"] = "none";
        }
        questionEvaluation_model.style["display"] = "block";
    }
    */
}

function setWordFeedback(word, color) {
    questionWordFeedback.innerText = word;
    questionWordFeedback.style["color"] = color;
    questionWordFeedback.style["visibility"] = "visible";
}
