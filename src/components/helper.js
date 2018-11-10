function fillRect(x, y, width, height, color) {
  global.ctx.fillStyle = color;
  global.ctx.fillRect(x, y, width, height);
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
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export { fillRect, random, detectMousePosition };
