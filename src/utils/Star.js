export class Star {
  constructor(x, y, speed = 100) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  move(canvasWidth) {
    this.x = this.x - this.speed;
    if (this.x <= 0) {
      this.x = canvasWidth;
    }
  }

  draw(ctx) {
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(this.x, this.y, 1, 1);
  }
}

export function createStars(canvas, count = 60, speeds = [0.1, 0.2, 0.5]) {
  const stars = [];
  const speedsCount = speeds.length;
  const starsPerSpeed = Math.floor(count / speedsCount);

  for (let s = 0; s < speedsCount; s++) {
    for (let i = 0; i < starsPerSpeed; i++) {
      const x = Math.random() * (canvas.width - 0) + 0;
      const y = Math.random() * (canvas.height - 0) + 0;
      stars.push(new Star(x, y, speeds[s]));
    }
  }

  return stars;
}

export function initCanvas(ctx) {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

export function animate(ctx, stars) {
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
  for (const star of stars) {
    star.move(ctx.canvas.width);
    star.draw(ctx);
  }
  
  requestAnimationFrame(() => animate(ctx, stars));
}
