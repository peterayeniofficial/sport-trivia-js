const main = document.querySelector('#container')

function startPage () {
    const contentDiv = document.createElement('div')
    const mainImage = document.createElement('img')
    const startPagetext = document.createElement('p')
    const startButton = document.createElement('button')

    main.classList.add('start-page')

    contentDiv.classList.add('content')
    main.append(contentDiv)

    mainImage.src = '../images/main-img.png'
    contentDiv.append(mainImage)

    startPagetext.innerHTML = "Sport Fan? <br> Test how much you know."
    contentDiv.append(startPagetext)

    startButton.innerText = "Start Trivia"
    startButton.classList.add('start-button')
    contentDiv.append(startButton)




    

}

function quizPage () {
    const contentDiv = document.createElement('div')
    const questionMetaDiv = document.createElement('div')
    const questionCountDiv = document.createElement('div')
    const questionTimeDiv = document.createElement('div')
    const questionProgressDiv = document.createElement('div')
    const questionDisplayDiv = document.createElement('div')
    const answersButtonDiv = document.createElement('div')
    const nextButton = document.createElement('button')
    const questionProgress = document.createElement('progress')
    const displayText = document.createElement('p')
    const optionOneButton = document.createElement('button')
    const optionTwoButton = document.createElement('button')
    const optionThreeButton = document.createElement('button')
    const optionFourButton = document.createElement('button')

    main.classList.add('quiz-page')
    main.append(contentDiv)

    contentDiv.classList.add('quiz-content')

    contentDiv.append(questionMetaDiv)
    contentDiv.append(questionDisplayDiv)
    contentDiv.append(answersButtonDiv)
    contentDiv.append(nextButton)

    nextButton.classList.add('next-button')

    questionMetaDiv.classList.add('question-meta')
    questionMetaDiv.append(questionTimeDiv)
    // questionMetaDiv.append(questionCountDiv)
    
    questionMetaDiv.append(questionProgressDiv)

    questionCountDiv.innerHTML = "<p>Question: 1 of 10</p>"
    questionTimeDiv.innerHTML = "<h3>15</h3>"
    questionTimeDiv.classList.add('time-container')
    
    questionProgressDiv.classList.add('progress-container')
    questionProgressDiv.append(questionCountDiv)
    questionProgressDiv.append(questionProgress)
    
    
    questionProgress.value = '22'
    questionProgress.max = '100'
    questionProgress.classList.add('progress')
    questionDisplayDiv.append(displayText)
    questionDisplayDiv.classList.add('display-content')
    displayText.innerText = "What cricketing term denotes a batsman being dismissed with a score of zero?"

    answersButtonDiv.append(optionOneButton)
    answersButtonDiv.append(optionTwoButton)
    answersButtonDiv.append(optionThreeButton)
    answersButtonDiv.append(optionFourButton)
    answersButtonDiv.classList.add('answers-button')

    optionOneButton.innerText = "Beamer"
    optionTwoButton.innerText = "Duck"
    optionThreeButton.innerText = "Carry"
    optionFourButton.innerText = "Bye"
    
    optionFourButton.classList.add('answer-button__default')
    optionThreeButton.classList.add('answer-button__default')
    optionTwoButton.classList.add('answer-button__default')
    optionOneButton.classList.add('answer-button__default')

    nextButton.innerText = "NEXT"

}

// startPage()
quizPage()
