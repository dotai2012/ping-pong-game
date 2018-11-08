import './src/variable';
import ball from './src/ball';
import paddle from './src/paddle';
import { fillRect, detectMousePosition } from './src/helper';

window.onload = () => {
  global.canvas = document.querySelector('#game');
  global.canvas.addEventListener('mousemove', (e) => {
    const mousePos = detectMousePosition(e);
    global.leftPaddleY = mousePos.y - global.paddleHeight / 2;
  });
  global.ctx = global.canvas.getContext('2d');
  setInterval(() => {
    // Ball's movement
    ball.movementBall();

    for (let i = 1; i <= 3; i += 1) {
      paddle.AIChasingBall();
    }

    // Background
    fillRect(0, 0, global.canvas.width, global.canvas.height, 'black');

    // Paddle
    paddle.drawPaddle();

    // Ball
    ball.drawBall();

    // Score
    global.ctx.fillStyle = 'white';
    global.ctx.font = '21px Verdana';
    global.ctx.fillText(global.playerScore, 100, 50);
    global.ctx.fillText(global.AIScore, 150, 50);
  }, 1000 / 60);
};
