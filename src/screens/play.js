import ball from '../components/ball';
import paddle from '../components/paddle';
import { fillRect } from '../components/helper';
import { FPS } from '../config';

const play = () => setInterval(() => {
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
}, 1000 / FPS);

export default play;
