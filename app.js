import './src/variable';
import './src/style/main.css';
import { detectMousePosition } from './src/components/helper';
import { PADDLEHEIGHT } from './src/config';
import welcome from './src/screens/welcome';

window.onload = () => {

  // Bootstrap
  global.canvas = document.querySelector('#game');
  global.ctx = global.canvas.getContext('2d');

  global.canvas.addEventListener('mousemove', (e) => {
    const mousePos = detectMousePosition(e);
    global.leftPaddleY = mousePos.y - PADDLEHEIGHT / 2;
  });

  // Welcome screen
  welcome();
};
