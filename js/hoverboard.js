const container = document.getElementById('container')
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"]
const squares = 500

for(let i = 0; i < squares; i = i + 1) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000000'
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
