function fillRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function random(min, max) // min and max included
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { fillRect, random };
