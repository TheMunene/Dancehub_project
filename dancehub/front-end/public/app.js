const canvas = document.getElementById('waveformCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

const numBars = 360; // Number of frequency bands (bars) for a full circle
const barWidth = 2; // Width of each frequency band
const amplitude = 200; // Amplitude of the waveform
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 90; // Radius of the circular waveform
let frameCount = 0; // Initialize frame count

function getRandomFrequencyData(numBars) {
  const data = new Uint8Array(numBars);
  for (let i = 0; i < numBars; i++) {
    data[i] = Math.random() * 255;
  }
  return data;
}

// Function to draw the circular waveform
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const dataArray = getRandomFrequencyData(numBars);

  for (let i = 0; i < numBars; i++) {
    const angle = (i / numBars) * 2 * Math.PI;
    const barHeight = dataArray[i] * (amplitude / 255);
    const x = centerX + Math.cos(angle) * (radius + barHeight);
    const y = centerY + Math.sin(angle) * (radius + barHeight);

    ctx.beginPath();
    ctx.moveTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
    ctx.lineTo(x, y);
    ctx.strokeStyle = `hsl(${(i / numBars) * 360}, 100%, 50%)`;
    ctx.stroke();
  }

  frameCount++;
  if (frameCount % 15 === 0) { // Slow down the frame rate
    requestAnimationFrame(draw);
  } else {
    setTimeout(() => requestAnimationFrame(draw), 300); // Create a slower heartbeat effect
  }
}

// Start drawing the waveform
draw();

// Handle form switching
const switchButton = document.getElementById('switchButton');
const loginForm = document.getElementById('loginForm');
const signUpForm = document.getElementById('signUpForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');

switchButton.addEventListener('click', () => {
  if (loginForm.classList.contains('active')) {
    loginForm.classList.remove('active');
    signUpForm.classList.add('active');
    switchButton.textContent = "Already have an account? Login";
  } else if (signUpForm.classList.contains('active')) {
    signUpForm.classList.remove('active');
    loginForm.classList.add('active');
    switchButton.textContent = "Don't have an account? Sign Up";
  }
});

forgotPasswordLink.addEventListener('click', () => {
  loginForm.classList.remove('active');
  signUpForm.classList.remove('active');
  forgotPasswordForm.classList.add('active');
  switchButton.style.display = 'none'; // Hide the switch button when showing forgot password form
});

forgotPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  forgotPasswordForm.classList.remove('active');
  loginForm.classList.add('active');
  switchButton.style.display = 'block'; // Show the switch button when going back to login form
});
