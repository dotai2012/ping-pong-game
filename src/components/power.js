import { fillRect } from './helper';

class Power {
  drawPower() {
    fillRect(180, 32, 10 * global.power, 20, 'white');
    global.ctx.strokeStyle = 'white';
    global.ctx.strokeRect(180, 32, 100, 20);
  }
}
export default (new Power());
