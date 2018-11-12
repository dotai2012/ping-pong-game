import { fillRect, strokeRect } from './helper';

class Power {
  drawPower() {
    fillRect(180, 32, 10 * global.power, 20, 'white');
    strokeRect(180, 32, 100, 20, 'white');
  }
}
export default (new Power());
