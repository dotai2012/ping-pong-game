import { detectMousePosition, fillRect } from '../components/helper';
import play from './play';
import Audio from '../audios/audio';
import playList from '../audios/playlist';

const welcome = () => {
  // Background
  fillRect(0, 0, global.canvas.width, global.canvas.height, 'black');
  // Start Button
  fillRect(250, 275, 100, 50, 'white');
  global.ctx.fillStyle = 'black';
  global.ctx.font = '15px Verdana';
  global.ctx.fillText('START', 275, 305);

  global.canvas.addEventListener('click', (e) => {
    const mousePos = detectMousePosition(e);
    if (mousePos.x >= 250 && mousePos.x <= 350 && mousePos.y >= 275 && mousePos.y <= 325) {
      // Play screen
      play();

      // Music
      const baseURL = './src/audios/music/';
      const urlAudio = `${baseURL}${playList[Math.floor(Math.random() * playList.length)]}`;
      const music = new Audio(urlAudio);
      music.play();
      music.onEnd((instance) => {
        // eslint-disable-next-line no-param-reassign
        instance.src = urlAudio;
        instance.play();
      });
    }
  });
};

export default welcome;
