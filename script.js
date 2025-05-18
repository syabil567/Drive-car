
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const car1 = new Image();
car1.src = "assets/car1.png";

const car2 = new Image();
car2.src = "assets/car2.png";

let car1Y = 150;
let car2Y = 200;

let car1Score = 0;
let car2Score = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "w") car1Y -= 5;
  if (e.key === "s") car1Y += 5;
  if (e.key === "ArrowUp") car2Y -= 5;
  if (e.key === "ArrowDown") car2Y += 5;
});

// Virtual Buttons
document.getElementById("p1-up").addEventListener("touchstart", () => car1Y -= 5);
document.getElementById("p1-down").addEventListener("touchstart", () => car1Y += 5);
document.getElementById("p2-up").addEventListener("touchstart", () => car2Y -= 5);
document.getElementById("p2-down").addEventListener("touchstart", () => car2Y += 5);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(car1, 100, car1Y, 50, 50);
  ctx.drawImage(car2, 400, car2Y, 50, 50);

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Player 1 Score: " + car1Score, 10, 30);
  ctx.fillText("Player 2 Score: " + car2Score, 400, 30);

  car1Score += 1;
  car2Score += 1;

  requestAnimationFrame(draw);
}

draw();
