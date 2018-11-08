import { random } from './helper';

class Ball {
  ballReset() {
    global.positionX = global.canvas.width / 2;
    global.positionY = global.canvas.height / 2;
    global.speedX = random(-10, 10);
    global.speedY = random(-3, 3);
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

    if (global.positionX < 20 && global.positionY >= global.leftPaddleY && global.positionY <= global.leftPaddleY + global.paddleHeight) {
      global.speedX = -global.speedX;
    }
    if (global.positionX > global.canvas.width - 20 && global.positionY >= global.rightPaddleY && global.positionY <= global.rightPaddleY + global.paddleHeight) {
      global.speedX = -global.speedX;
    }
    global.positionX += global.speedX;
    global.positionY += global.speedY;
  }
}

export default (new Ball());
