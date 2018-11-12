import { PADDLEHEIGHT, SPEEDX, SPEEDY } from '../config';
import { random, randomPosNeg } from './helper';
import Audio from '../audios/audio';

class Ball {
  constructor(speedX, speedY) {
    global.speedX = speedX;
    global.speedY = speedY;
  }

  ballReset() {
    global.isGlowBall = false;
    global.power = 0;
    global.ctx.shadowColor = null;
    global.ctx.shadowBlur = null;
    global.positionX = global.canvas.width / 2;
    global.positionY = global.canvas.height / 2;
    global.speedX = randomPosNeg() * SPEEDX * random(0.95, 1.05);
    global.speedY = randomPosNeg() * SPEEDY * random(0.95, 1.05);
  }

  drawBall() {
    global.ctx.beginPath();
    if (global.isGlowBall) {
      global.ctx.shadowColor = 'white';
      global.ctx.shadowBlur = 50;
    }
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
      global.speedY = -global.speedY * random(0.99, 1.01);
    } else if (global.positionY <= 0) {
      global.speedY = Math.abs(global.speedY) * random(0.99, 1.01);
    }

    // Ball hit paddle
    if (global.positionX < 20 && global.positionY >= global.leftPaddleY && global.positionY <= global.leftPaddleY + PADDLEHEIGHT) {
      if (global.isSound) {
        const sound = new Audio('./src/audios/sound/pong.mp3', 1);
        sound.play();
      }
      global.speedX = -global.speedX;
    }

    // Ball hit paddle
    if (global.positionX > global.canvas.width - 20 && global.positionY >= global.rightPaddleY && global.positionY <= global.rightPaddleY + PADDLEHEIGHT) {
      if (global.isSound) {
        const sound = new Audio('./src/audios/sound/pong.mp3', 1);
        sound.play();
      }

      if (global.power < 10) {
        global.power += 1;
      }
      global.speedX = -global.speedX;
    }
    global.positionX += global.speedX;
    global.positionY += global.speedY;
  }
}

export default (new Ball(SPEEDX, SPEEDY));
