import './src/variable';
import './src/style/main.css';
import welcome from './src/screens/welcome';

window.onload = () => {
  // Bootstrap
  global.canvas = document.querySelector('#game');
  global.ctx = global.canvas.getContext('2d');
  // Welcome screen
  welcome();
};
