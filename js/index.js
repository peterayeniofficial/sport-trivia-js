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
    questionMetaDiv.append(questionCountDiv)
    questionMetaDiv.append(questionTimeDiv)
    questionMetaDiv.append(questionProgressDiv)

    questionTimeDiv.innerHTML = "<p>15</p>"
    questionCountDiv.innerHTML = "Question: 1 of 10"
    questionProgressDiv.append(questionProgress)
    questionProgress.value = '22'
    questionProgress.max = '100'
    questionDisplayDiv.append(displayText)
    displayText.innerText = "What cricketing term denotes a batsman being dismissed with a score of zero?"

    answersButtonDiv.append(optionOneButton)
    answersButtonDiv.append(optionTwoButton)
    answersButtonDiv.append(optionThreeButton)
    answersButtonDiv.append(optionFourButton)






   

  

}

// startPage()
quizPage()
