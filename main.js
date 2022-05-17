const packages = [
  { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', imgUrl: 'resources/package-1.jpg' },
  { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', imgUrl: 'resources/package-2.webp' },
  { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', imgUrl: 'resources/package-3.webp' },
  { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', imgUrl: 'resources/package-4.png' },
  { heavy: true, priority: true, fragile: true, to: 'Brittany', trackingNumber: 'fjdk32ls', imgUrl: 'resources/package-5.jpeg' },
  { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', imgUrl: 'resources/package-6.jpeg' },
  { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', imgUrl: 'resources/package-7.jpeg' }]


let currentPackages = packages
let lostPackage = undefined
let counter = 0

function drawBoxes() {
  let template = ``
  currentPackages.forEach(p => {
    template += `    <div class="col-md-3 bg-light text-center p-3">
    <img class="img-fluid p-2" onclick="checkSelection('${p.trackingNumber}')" src='${p.imgUrl}' alt="">
    <h3 class="text-center">To: ${p.to}</h3>
  </div>`
  })
  document.getElementById("box-row").innerHTML = template
}

function selectMissingPackage() {
  let index = Math.floor(Math.random() * packages.length)
  console.log(index);
  currentPackages[index].trackingNumber = undefined
  lostPackage = currentPackages[index]
  console.log(lostPackage);
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
  console.log(id);
  if (id == "undefined") {
    window.alert("You win! Nice job!")
  }
  else {
    incrementHintCounter(3)
  }
}


function startGame() {
  selectMissingPackage()
  drawBoxes()
}
startGame()