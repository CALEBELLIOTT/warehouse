const packages = [
  { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', imgUrl: 'resources/package-1.jpg' },
  { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', imgUrl: 'resources/package-2.webp' },
  { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', imgUrl: 'resources/package-3.webp' },
  { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', imgUrl: 'resources/package-4.png' },
  { heavy: true, priority: true, fragile: true, to: 'Brittany', trackingNumber: 'fjdk32ls', imgUrl: 'resources/package-5.jpeg' },
  { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', imgUrl: 'resources/package-6.jpeg' },
  { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', imgUrl: 'resources/package-7.jpeg' }]


let players = []

let currentPackages = packages
let lostPackage = undefined
let counter = 0
let currentPlayer = undefined


function setPlayer(event) {
  event.preventDefault()
  let submittedName = event.target.name.value
  currentPlayer = players.find(p => p.name == submittedName)
  if (!currentPlayer) {
    currentPlayer = { name: submittedName, highScore: "n/a" }
    players.push(currentPlayer)
    savePlayers()
  }
  console.log(players);
}


function savePlayers() {
  window.localStorage.setItem("players", JSON.stringify(players))
}

function saveScore() {
  if (counter < currentPlayer.highScore || currentPlayer.highScore == "n/a") {
    currentPlayer.highScore = counter
  }
  savePlayers()
}

function loadPlayers() {
  let potentialPlayers = JSON.parse(window.localStorage.getItem("players"))
  if (potentialPlayers != null) {
    players = potentialPlayers
  }
}




function drawBoxes() {
  let template = ``
  currentPackages.forEach(p => {
    template += `    <div class="col-md-3 text-center">
    <div class="m-3 bg-light p-3 box-card">
    <img class="img-fluid p-2 img-unknown" id="${p.trackingNumber}" onclick="checkSelection('${p.trackingNumber}')" src='${p.imgUrl}' alt="">
    <h3 class="text-center">To: ${p.to}</h3>
    </div>
  </div>`
  })
  document.getElementById("box-row").innerHTML = template
}

function selectMissingPackage() {
  let index = Math.floor(Math.random() * packages.length)
  console.log(index);
  currentPackages[index].trackingNumber = undefined
  lostPackage = currentPackages[index]
}


function guess(classification) {
  let filteredPackages = currentPackages.filter(p => p[classification] == lostPackage[classification])
  currentPackages = filteredPackages
  console.log(currentPackages);
  drawBoxes()
  incrementHintCounter(1)
}



function incrementHintCounter(amount) {
  counter += amount
  document.getElementById('hint-counter').innerText = 'hints: ' + counter
}

function checkSelection(id) {
  if (id == "undefined") {
    window.alert("You win! Nice job!")
    saveScore()
    document.getElementById("player-label").innerText = `Current Player: ${currentPlayer.name} with a high score of ${currentPlayer.highScore}`
  }
  else {
    incrementHintCounter(3)
    formatWrongImages(id)
  }
}


function formatWrongImages(trackingNum) {
  document.getElementById(trackingNum).classList.add("wrong-img")
  document.getElementById(trackingNum).classList.remove("img-unknown")
}

function startGame() {
  selectMissingPackage()
  drawBoxes()
  document.getElementById("intro-container").classList.add("d-none")
  document.getElementById("game-container").classList.remove("d-none")
  document.getElementById("player-label").innerText = `Current Player: ${currentPlayer.name} with a high score of ${currentPlayer.highScore}`
}


loadPlayers()
console.log(players);