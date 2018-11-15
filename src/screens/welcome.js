/* eslint-disable brace-style */
import { detectMousePosition, fillRect, drawBtn } from '../components/helper';
import play from './play';
import ball from '../components/ball';
import paddle from '../components/paddle';

const eventListener = (e) => {
  const mousePos = detectMousePosition(e);

  // Start button position
  if (mousePos.x >= 250 && mousePos.x <= 350 && mousePos.y >= 275 && mousePos.y <= 325) {
    // Play screen
    play();
    global.canvas.removeEventListener('click', eventListener);
  }
  // Music Button position
  else if (mousePos.x >= 115 && mousePos.x <= 195 && mousePos.y >= 350 && mousePos.y <= 385) {
    if (global.isMusic) {
      global.isMusic = !global.isMusic;
      drawBtn(115, 350, 80, 35, 'white', 'black', 'bold 15px Pxlvetica', 'MUSIC', 135, 375, 'disable');
    } else {
      global.isMusic = !global.isMusic;
      drawBtn(115, 350, 80, 35, 'white', 'black', 'bold 15px Pxlvetica', 'MUSIC', 135, 375, 'enable');
    }
  }
  // Sound Button position
  else if (mousePos.x >= 405 && mousePos.x <= 485 && mousePos.y >= 350 && mousePos.y <= 385) {
    if (global.isSound) {
      global.isSound = !global.isSound;
      drawBtn(405, 350, 80, 35, 'white', 'black', 'bold 15px Pxlvetica', 'SOUND', 425, 375, 'disable');
    } else {
      global.isSound = !global.isSound;
      drawBtn(405, 350, 80, 35, 'white', 'black', 'bold 15px Pxlvetica', 'SOUND', 425, 375, 'enable');
    }
  }
};

const welcome = () => {
  // Background
  fillRect(0, 0, global.canvas.width, global.canvas.height, 'black');

  // Title game
  global.ctx.fillStyle = 'white';
  global.ctx.font = 'bold 41px Pxlvetica';
  global.ctx.fillText('Ping Pong', 225, 100);

  // Paddle
  paddle.drawPaddle();

  // Ball
  ball.drawBall();

  // Init Author Name
  global.ctx.fillStyle = 'white';
  global.ctx.font = 'bold 21px Pxlvetica';
  global.ctx.fillText('Made by Tai Do. For education only', 160, 150);

  // Init Start Button
  drawBtn(250, 275, 100, 50, 'white', 'black', 'bold 15px Pxlvetica', 'START', 280, 305);

  // Init Music Button
  drawBtn(115, 350, 80, 35, 'white', 'black', 'bold 15px Pxlvetica', 'MUSIC', 135, 375);

  // Init Sound Button
  drawBtn(405, 350, 80, 35, 'white', 'black', 'bold 15px Pxlvetica', 'SOUND', 425, 375);

  global.canvas.addEventListener('click', eventListener);
};

export default welcome;
