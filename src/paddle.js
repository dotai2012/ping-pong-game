import { fillRect } from './helper';

class Paddle {
  drawPaddle() {
    fillRect(0, global.leftPaddleY, 10, global.paddleHeight, 'white');
    fillRect(global.canvas.width - 10, global.rightPaddleY, 10, global.paddleHeight, 'white');
  }

  AIChasingBall() {
    const centerPaddle = global.rightPaddleY + global.paddleHeight / 2;
    if (centerPaddle - 25 >= global.positionY) {
      global.rightPaddleY -= 1;
    } else if (centerPaddle + 25 <= global.positionY) {
      global.rightPaddleY += 1;
    }
  }
}
export default (new Paddle());
