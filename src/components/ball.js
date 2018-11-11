import { PADDLEHEIGHT, SPEEDX, SPEEDY } from '../config';
import { random, randomPosNeg } from './helper';

class Ball {
  constructor(speedX, speedY) {
    global.speedX = speedX;
    global.speedY = speedY;
  }

  ballReset() {
    global.positionX = global.canvas.width / 2;
    global.positionY = global.canvas.height / 2;
    global.speedX = randomPosNeg() * SPEEDX * random(0.95, 1.05);
    global.speedY = randomPosNeg() * SPEEDY * random(0.95, 1.05);
  }

  drawBall() {
    global.ctx.beginPath();
    global.ctx.fillStyle = 'red';
    global.ctx.arc(global.positionX, global.positionY, 10, 0, Math.PI * 2);
    global.ctx.fill();
  }

  movementBall() {
    if (global.positionX > global.canvas.width - 5) {
      this.ballReset();
      global.playerScore += 1;
    } else if (global.positionX < 5) {
      this.ballReset();
      global.AIScore += 1;
    }

    if (global.positionY >= global.canvas.height - 10) {
      global.speedY = -global.speedY;
    } else if (global.positionY <= 0) {
      global.speedY = Math.abs(global.speedY);
    }

    if (global.positionX < 20 && global.positionY >= global.leftPaddleY && global.positionY <= global.leftPaddleY + PADDLEHEIGHT) {
      global.speedX = -global.speedX;
    }
    if (global.positionX > global.canvas.width - 20 && global.positionY >= global.rightPaddleY && global.positionY <= global.rightPaddleY + PADDLEHEIGHT) {
      global.speedX = -global.speedX;
    }
    global.positionX += global.speedX;
    global.positionY += global.speedY;
  }
}

export default (new Ball(SPEEDX, SPEEDY));
