/* eslint-disable brace-style */
import { detectMousePosition, fillRect, drawBtn } from '../components/helper';
import welcome from './welcome';

const eventListener = (e) => {
  const mousePos = detectMousePosition(e);

  // Play Again button position
  if (mousePos.x >= 250 && mousePos.x <= 350 && mousePos.y >= 275 && mousePos.y <= 325) {
    // Reset All variable
    global.positionX = 175;
    global.positionY = 187.5;
    global.leftPaddleY = 250;
    global.rightPaddleY = 250;

    // Score
    global.playerScore = 0;
    global.AIScore = 0;
    global.power = 0;

    // State
    global.isWelcome = true;
    global.isPlay = true;
    global.isGameOver = true;
    global.isSound = true;
    global.isMusic = true;
    global.isGlowBall = false;

    global.canvas.removeEventListener('click', eventListener);
    document.querySelectorAll('audio').forEach((a) => {
      a.remove();
    });

    // Welcome screen
    welcome();
  }
};

const gameOver = () => {
  // Background
  fillRect(0, 0, global.canvas.width, global.canvas.height, 'black');

  // Title game
  global.ctx.fillStyle = 'white';
  global.ctx.font = 'bold 41px Pxlvetica';
  global.ctx.fillText('Game Over', 215, 100);

  // Winner
  global.ctx.font = 'bold 21px Pxlvetica';
  if (global.playerScore === 10) {
    global.ctx.fillText('Congratulation! You\'re the winner', 170, 200);
  } else {
    global.ctx.fillText('Ha ha! You\'re loser AF :D', 195, 200);
  }

  drawBtn(250, 275, 100, 50, 'white', 'black', 'bold 15px Pxlvetica', 'PLAY AGAIN', 265, 305);

  global.canvas.addEventListener('click', eventListener);
};

export default gameOver;
