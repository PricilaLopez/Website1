const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

//LPaddle Variables
const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 10
let LPaddleHeight = 100
let LPaddleSpeed = 5
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70

//Ball Variables
const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 30
let ballXPosition = windowWidth/2- ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballYDirection = 1
let ballSpeed = 5
let ballXDirection = 1

const scoreBoard = document.createElement('div')
document.body.appendChild(scoreBoard)
let score = 0 //Display the score and increase score by one every time the ball hits the paddle.
let level = 1 //Display the level and increase the level by one every time the score increase by 10
//As the levels increase, increase the ball speed
// If the ball gets past your paddle, end the game
//make the ball stop or disappear and then let the user know the game is over
//Optional: sound effects, background music


function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2*ballRadius) {
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2*ballRadius) {
        ballXDirection = ballXDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth


    if (
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
    }

}



createLPaddle()
function createLPaddle () {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = "blue"
    LPaddle.style.position = "absolute"
    LPaddle.style.left = "50px"
    LPaddle.style.top = `${LPaddleYPosition}px`
}

createBall()
function createBall() {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

wKey = false
sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPaddle() {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}


function animate() {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
}
animate()

createscoreBoard()
function createscoreBoard {
    scoreBoard.style.height = "50px"
    scoreBoard.style.width = "100px"
    scoreBoard.style.backgroundColor = "green"
    scoreBoard.style.position = "absolute"
    scoreBoard.style.right = "50px"
    scoreBoard.innerHTML = `Score: ${score}`
}

increaseScore()
function increaseScore {
    if (
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    )
    {
        score = score + 1
        scoreBoard.innerHTML = `Score: ${score}`
    }
}
