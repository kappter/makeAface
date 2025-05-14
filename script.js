const canvas = document.getElementById('face-canvas');
const ctx = canvas.getContext('2d');

// Asset loading (replace with actual paths)
const assets = {
  hair: {
    'short-crop': new Image(),
    'long-waves': new Image(),
    'braids': new Image(),
    'bald': null,
  },
  expressions: {
    happy: new Image(),
    sad: new Image(),
    anxious: new Image(),
    lonely: new Image(),
  },
  eyebrows: {
    thick: new Image(),
    arched: new Image(),
    straight: new Image(),
  },
  facialHair: {
    none: null,
    beard: new Image(),
    mustache: new Image(),
  },
};

// Set image sources
assets.hair['short-crop'].src = 'assets/hair/short-crop.png';
assets.hair['long-waves'].src = 'assets/hair/long-waves.png';
assets.hair['braids'].src = 'assets/hair/braids.png';
assets.expressions.happy.src = 'assets/expressions/happy.png';
assets.expressions.sad.src = 'assets/expressions/sad.png';
assets.expressions.anxious.src = 'assets/expressions/anxious.png';
assets.expressions.lonely.src = 'assets/expressions/lonely.png';
assets.eyebrows.thick.src = 'assets/eyebrows/thick.png';
assets.eyebrows.arched.src = 'assets/eyebrows/arched.png';
assets.eyebrows.straight.src = 'assets/eyebrows/straight.png';
assets.facialHair.beard.src = 'assets/facial-hair/beard.png';
assets.facialHair.mustache.src = 'assets/facial-hair/mustache.png';

// State
let state = {
  mood: 'happy',
  hairStyle: 'short-crop',
  hairColor: 'black',
  eyebrows: 'thick',
  facialHair: 'none',
};

// Draw face
function drawFace() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffe4c4'; // Skin tone
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2); // Head
  ctx.fill();

  // Draw expression
  if (assets.expressions[state.mood]) {
    ctx.drawImage(assets.expressions[state.mood], 100, 120, 100, 80);
  }

  // Draw eyebrows
  if (assets.eyebrows[state.eyebrows]) {
    ctx.drawImage(assets.eyebrows[state.eyebrows], 100, 80, 100, 20);
  }

  // Draw facial hair
  if (assets.facialHair[state.facialHair]) {
    ctx.drawImage(assets.facialHair[state.facialHair], 100, 160, 100, 50);
  }

  // Draw hair with color
  if (assets.hair[state.hairStyle]) {
    ctx.save();
    ctx.globalCompositeOperation = 'source-atop';
    ctx.fillStyle = state.hairColor;
    ctx.fillRect(50, 50, 200, 100);
    ctx.drawImage(assets.hair[state.hairStyle], 50, 50, 200, 100);
    ctx.restore();
  }
}

// Event listeners
document.querySelectorAll('#mood-selection button').forEach(button => {
  button.addEventListener('click', () => {
    state.mood = button.dataset.mood;
    drawFace();
  });
});

document.getElementById('hair-style').addEventListener('change', (e) => {
  state.hairStyle = e.target.value;
  drawFace();
});

document.getElementById('hair-color').addEventListener('change', (e) => {
  state.hairColor = e.target.value;
  drawFace();
});

document.getElementById('eyebrows').addEventListener('change', (e) => {
  state.eyebrows = e.target.value;
  drawFace();
});

document.getElementById('facial-hair').addEventListener('change', (e) => {
  state.facialHair = e.target.value;
  drawFace();
});

document.getElementById('save-assessment').addEventListener('click', () => {
  const assessment = {
    mood: state.mood,
    hair: { style: state.hairStyle, color: state.hairColor },
    features: { eyebrows: state.eyebrows, facialHair: state.facialHair },
    notes: document.getElementById('counselor-notes').value,
    timestamp: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(assessment, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `assessment-${assessment.timestamp}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

// Initial draw
drawFace();