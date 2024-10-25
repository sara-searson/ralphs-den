const hash = window.location.hash.substring(1); // Remove the '#' character
const params = new URLSearchParams(hash);
let user = params.get('libid');

const signUp = document.querySelector('#nav1')
const home = document.querySelector('#nav2')
const gamePage = document.querySelector('#nav3')
const aboutUs = document.querySelector('#nav4')

const sideBar = document.querySelector('#side-bar')

signUp.classList.add('hidden')

const searchButton = document.querySelector('.game-search-button')

const gameContainers = document.querySelectorAll('.game-container')
const gameContainer1 = document.querySelector('.game-container1')
const gameContainer2 = document.querySelector('.game-container2')
const gameContainer3 = document.querySelector('.game-container3')
const gameContainer4 = document.querySelector('.game-container4')
const gameContainer5 = document.querySelector('.game-container5')
const gameContainer6 = document.querySelector('.game-container6')
const gameContainer7 = document.querySelector('.game-container7')
const gameContainer8 = document.querySelector('.game-container8')

const spot1 = document.querySelector('#spot1')
const spot2 = document.querySelector('#spot2')
const spot3 = document.querySelector('#spot3')
const spot4 = document.querySelector('#spot4')
const spot5 = document.querySelector('#spot5')
const spot6 = document.querySelector('#spot6')
const spot7 = document.querySelector('#spot7')
const spot8 = document.querySelector('#spot8')
const spots = [spot1, spot2, spot3, spot4, spot5, spot6, spot7, spot8]

const img1 = document.querySelector('img1')
const img2 = document.querySelector('img2')
const img3 = document.querySelector('img3')
const img4 = document.querySelector('img4')
const img5 = document.querySelector('img5')
const img6 = document.querySelector('img6')
const img7 = document.querySelector('img7')
const img8 = document.querySelector('img8')
const imgs = [img1, img2, img3, img4, img5, img6, img7, img8]

const loadLibrary = async () => {
    try {
        let response = await axios.get(`http://localhost:3001/entries/library/${user}`)
        let entries = response.data
        for (let i = 0; i < entries.length; i++) {
            let currentGameId = entries[i].game
            let currentGame = await axios.get(`http://localhost:3001/games/${currentGameId}`)
            let currentGameData = currentGame.data
            let currentSpot = spots[i]
            console.log(currentSpot)
            let gameContainer = document.createElement('div')
                gameContainer.classList.add(`game-container`)
                gameContainer.classList.add(`game-container${i + 1}`)
            const gameTitle = document.createElement('h5')
                gameTitle.classList.add('game-title')
                gameTitle.innerText = currentGameData.title
                console.log(currentGameData.title)
                gameContainer.appendChild(gameTitle)
            const gameRating = document.createElement('h6')
                gameRating.classList.add('game-rating')
                gameRating.innerText = currentGameData.esrb
                gameContainer.appendChild(gameRating)
            const gameGenres = document.createElement('h6')
                gameGenres.classList.add('game-genres')
                gameGenres.innerText = currentGameData.genre
                gameContainer.appendChild(gameGenres)
            const gameId = document.createElement('p')
                gameId.classList.add('game-id')
                gameId.innerText = currentGameData._id
                gameContainer.appendChild(gameId)
            currentSpot.appendChild(gameContainer)
            // let currentImg = imgs[i]
            // currentImg.setAttribute('src', '../assets/erd.jpeg')
            console.log(currentGameData)
        }
    } catch (e) {
        console.error(e)
    }
}

const loadSideBar = async () => {
    const newGameCont = document.createElement('div')
        newGameCont.classList.add('new-game-cont')
    const gameSearch = document.createElement('input')
        gameSearch.classList.add('game-search-bar')
        gameSearch.type = 'text'
        gameSearch.placeholder = 'Find new game'
        newGameCont.appendChild(gameSearch)
    const gameSearchBtn = document.createElement('button')
        gameSearchBtn.classList.add('game-search-button')
        gameSearchBtn.type = 'button'
        gameSearchBtn.innerText = 'Add Game'
        newGameCont.appendChild(gameSearchBtn)
    sideBar.appendChild(newGameCont)
}

loadLibrary()
loadSideBar()

document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('game-container')) {
        gameId = document.querySelector('.game-id').innerText.get
          console.log(`Game Clicked: ${gameId}`)
        //   updateName()
    }
})

const addEntryForm = () => {
    document.querySelector('.new-game-cont').classList.add('hidden')
    const updateContainer = document.createElement('div')
          updateContainer.classList.add('entry-container')
    const newGameInfo = document.createElement('h2')
          newGameInfo.innerText = `Add this game to your Library`
          newGameInfo.classList.add('new-game-info')
          updateContainer.appendChild(newGameInfo)
    const owned = document.createElement('input')
        owned.type = 'text'
        owned.placeholder = 'Do you own it?'
        owned.classList.add('owned')
        updateContainer.appendChild(owned)
    const played = document.createElement('input')
        played.type = 'text'
        played.placeholder = 'Have you played it?'
        played.classList.add('played')
        updateContainer.appendChild(played)
    const hrsPlayed = document.createElement('input')
        hrsPlayed.type = 'text'
        hrsPlayed.placeholder = 'How long did you play it?'
        hrsPlayed.classList.add('hrsPlayed')
        updateContainer.appendChild(hrsPlayed)
    const beat = document.createElement('input')
        beat.type = 'text'
        beat.placeholder = 'How long did you play it?'
        beat.classList.add('beat')
        updateContainer.appendChild(beat)
    const addButton = document.createElement('button')
        addButton.type = 'button'
        addButton.classList.add('add-game-btn')
        addButton.innerText = 'Add Games'
        updateContainer.appendChild(addButton)
    sideBar.appendChild(updateContainer)
}

const searchGames = async () => {
    const searchInput = document.querySelector('.game-search-bar')
    const searchValue = searchInput.value
    const searchedGame = searchValue.replace(/ /g, '%20')
    // console.log(searchedGame)
    const response = await axios.get(`http://localhost:3001/games/title/${searchedGame}`)
    console.log(response)
    const gameId = response.data._id
    console.log(gameId)
    const gameIdText = document.createElement('p')
        gameIdText.innerText = gameId
        gameIdText.classList.add('new-game-id')
        sideBar.appendChild(gameIdText)
    if (gameId) {
        addEntryForm()
    }
}

const addGame = async () => {
    const owned = document.querySelector('.owned')
    const played = document.querySelector('.played')
    const hrsPlayed = document.querySelector('.hrsPlayed')
    const beat = document.querySelector('.beat')
    const gameId = document.querySelector('.new-game-id')
    if (owned && played && hrsPlayed && beat) {
        const newPost = await axios.post('http://localhost:3001/entries', 
            {game: gameId,
                library: user,
                owned: owned
            }
        )
    }
}

home.addEventListener('click', async () => {
    window.location.href = 'http://127.0.0.1:5500/client/'
})

aboutUs.addEventListener('click', async () => {
    window.location.href = 'http://127.0.0.1:5500/client/about.html'
})

document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('game-search-button')) {
        console.log('new game btn pressed')
        searchGames()
    }
})

document.addEventListener('click', (event) => {
    if (event.target && event.taget.classList.contains('add-game-button')) {

    }
})