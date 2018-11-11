function fillRect(x, y, width, height, color) {
  global.ctx.fillStyle = color;
  global.ctx.fillRect(x, y, width, height);
}

function drawBtn(x, y, width, height, colorContainer, colorFont, font, text, xText, yText, state = 'enable') {
  if (state === 'enable') {
    fillRect(x, y, width, height, colorContainer);
    global.ctx.fillStyle = colorFont;
    global.ctx.font = font;
    global.ctx.fillText(text, xText, yText);
  } else {
    fillRect(x, y, width, height, colorContainer);
    global.ctx.fillStyle = colorFont;
    global.ctx.font = font;
    global.ctx.fillText(text, xText, yText);
  }
}

function detectMousePosition(e) {
  const boundaryCanvas = global.canvas.getBoundingClientRect();
  const mouseX = e.clientX - boundaryCanvas.left;
  const mouseY = e.clientY - boundaryCanvas.top;
  return {
    x: mouseX,
    y: mouseY,
  };
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function randomPosNeg() {
  return Math.random() < 0.5 ? -1 : 1;
}
export {
  fillRect, random, randomPosNeg, detectMousePosition, drawBtn,
};
