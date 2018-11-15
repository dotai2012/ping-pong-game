import { fillRect } from './helper';
import { PADDLEHEIGHT } from '../config';

class Paddle {
  drawPaddle() {
    fillRect(0, global.leftPaddleY, 10, PADDLEHEIGHT, '#ecf0f1');
    fillRect(global.canvas.width - 10, global.rightPaddleY, 10, PADDLEHEIGHT, '#ecf0f1');
  }

  AIChasingBall() {
    const centerPaddle = global.rightPaddleY + PADDLEHEIGHT / 2;
    if (centerPaddle - 25 >= global.positionY) {
      global.rightPaddleY -= 1;
    } else if (centerPaddle + 25 <= global.positionY) {
      global.rightPaddleY += 1;
    }
  }
}
export default (new Paddle());
