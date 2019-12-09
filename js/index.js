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

startPage()
