import ball from '../components/ball';
import paddle from '../components/paddle';
import Audio from '../audios/audio';
import playList from '../audios/playlist';
import { fillRect } from '../components/helper';
import { FPS, PADDLEHEIGHT } from '../config';
import power from '../components/power';
import gameOver from './game-over';

let interval;

const updateFrame = () => {
  interval = setInterval(() => {

    // Ball's movement
    ball.movementBall();

    if (global.isGlowBall) {
      for (let i = 1; i <= 4; i += 1) {
        paddle.AIChasingBall();
      }
    } else {
      for (let i = 1; i <= 3; i += 1) {
        paddle.AIChasingBall();
      }
    }

    // Background
    fillRect(0, 0, global.canvas.width, global.canvas.height, 'black');

    // Power bar
    power.drawPower();

    // Paddle
    paddle.drawPaddle();

    // Ball
    ball.drawBall();

    // Score
    global.ctx.fillStyle = 'white';
    global.ctx.font = '21px Verdana';
    global.ctx.fillText(global.playerScore, 100, 50);
    global.ctx.fillText(global.AIScore, 150, 50);

    // Instruction
    if (global.power === 10) {
      global.ctx.font = '11px Verdana';
      global.ctx.fillText('Press Spacebar when the ball hit your paddle', 180, 580);
    }

    // Check score
    if (global.playerScore === 20 || global.AIScore === 20) {
      clearInterval(interval);
      gameOver();
    }
  }, 1000 / FPS);
};

const play = () => {
  // Play music
  if (global.isMusic) {
    const baseURL = './src/audios/music/';
    const urlAudio = `${baseURL}${playList[Math.floor(Math.random() * playList.length)]}`;
    const music = new Audio(urlAudio, 0.05);
    music.play();
    music.onEnd((instance) => {
    // eslint-disable-next-line no-param-reassign
      instance.src = urlAudio;
      instance.play(global.isMusic, global.isSound);
    });
  }
  // Play sound is in Ball class

  updateFrame();
  global.canvas.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && !global.isGlowBall && global.power === 10 && global.positionX < 30 && global.positionY >= global.leftPaddleY && global.positionY <= global.leftPaddleY + PADDLEHEIGHT) {
      global.isGlowBall = !global.isGlowBall;
      global.speedX *= 1.5;
      global.speedY *= 1.5;
    }
  });
};

export default play;
