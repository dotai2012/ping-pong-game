let positionX = 175;
let positionY = 187.5;
const paddleHeight = 100;
let canvas;
let ctx;
let speedX = 5;
let speedY = 3;
let leftPaddleY = 250;
let rightPaddleY = 250;

let playerScore = 0;
let AIScore = 0;

function fillRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function randomIntFromInterval(min, max) // min and max included
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ballReset() {
  positionX = canvas.width / 2;
  positionY = canvas.height / 2;
  speedX = randomIntFromInterval(-10, 10);
  speedY = randomIntFromInterval(-3, 3);
}

function movementBall() {
  if (positionX > canvas.width - 5) {
    ballReset();
    playerScore += 1;
  } else if (positionX < 5) {
    ballReset();
    AIScore += 1;
  }

  if (positionY >= canvas.height - 10) {
    speedY = -speedY;
  } else if (positionY <= 0) {
    speedY = Math.abs(speedY);
  }

  if (positionX < 20 && positionY >= leftPaddleY && positionY <= leftPaddleY + paddleHeight) {
    speedX = -speedX;
  }
  if (positionX > canvas.width - 20 && positionY >= rightPaddleY && positionY <= rightPaddleY + paddleHeight) {
    speedX = -speedX;
  }
  positionX += speedX;
  positionY += speedY;
}

function detectMousePosition(e) {
  const boundaryCanvas = canvas.getBoundingClientRect();
  const mouseX = e.clientX - boundaryCanvas.left;
  const mouseY = e.clientY - boundaryCanvas.top;
  return {
    x: mouseX,
    y: mouseY,
  };
}

function AIChasingBall() {
  const centerPaddle = rightPaddleY + paddleHeight / 2;
  if (centerPaddle - 25 >= positionY) {
    rightPaddleY -= 1;
  } else if (centerPaddle + 25 <= positionY) {
    rightPaddleY += 1;
  }
}

window.onload = () => {
  canvas = document.querySelector('#game');
  canvas.addEventListener('mousemove', (e) => {
    const mousePos = detectMousePosition(e);
    leftPaddleY = mousePos.y - paddleHeight / 2;
  });
  ctx = canvas.getContext('2d');
  setInterval(() => {
    // Ball's movement
    movementBall();

    for (let i = 1; i <= 3; i += 1) {
      AIChasingBall();
    }

    // Background
    fillRect(0, 0, canvas.width, canvas.height, 'black');

    // Paddle
    fillRect(0, leftPaddleY, 10, paddleHeight, 'white');
    fillRect(canvas.width - 10, rightPaddleY, 10, paddleHeight, 'white');

    // Ball
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(positionX, positionY, 10, 0, Math.PI * 2);
    ctx.fill();

    // Score
    ctx.fillStyle = 'white';
    ctx.font = '21px Verdana';
    ctx.fillText(playerScore, 100, 50);
    ctx.fillText(AIScore, 150, 50);
  }, 1000 / 60);
};
