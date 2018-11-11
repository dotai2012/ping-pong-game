import { detectMousePosition, fillRect, drawBtn } from '../components/helper';
import play from './play';
import Audio from '../audios/audio';
import playList from '../audios/playlist';

const welcome = () => {
  // Background
  fillRect(0, 0, global.canvas.width, global.canvas.height, 'black');
  // Init Start Button
  drawBtn(250, 275, 100, 50, 'white', 'black', 'bold 15px Pxlvetica', 'START', 275, 305);

  // Init Music Button
  drawBtn(115, 350, 80, 35, 'white', 'black', 'bold 15px Pxlvetica', 'MUSIC', 130, 375);

  // Init Sound Button
  drawBtn(405, 350, 80, 35, 'white', 'black', 'bold 15px Pxlvetica', 'SOUND', 420, 375);

  global.canvas.addEventListener('click', (e) => {
    const mousePos = detectMousePosition(e);

    // Start button position
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
    // Music Button position
    else if (mousePos.x >= 115 && mousePos.x <= 195 && mousePos.y >= 350 && mousePos.y <= 385) {
      
    }

    // Sound Button position
    else if (mousePos.x >= 405 && mousePos.x <= 485 && mousePos.y >= 350 && mousePos.y <= 385) {
      console.log('Sound');
    }
  });
};

export default welcome;
