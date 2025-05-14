const canvas = document.getElementById('face-canvas');
const ctx = canvas.getContext('2d');

// Randomization helper
function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

// Component drawing functions
const components = {
  hair: {
    'short-crop': () => {
      ctx.fillStyle = state.hairColor;
      const strands = Math.floor(randomRange(10, 20));
      for (let i = 0; i < strands; i++) {
        ctx.beginPath();
        ctx.moveTo(100 + i * 5, 50);
        ctx.lineTo(100 + i * 5 + randomRange(-5, 5), 70 + randomRange(0, 10));
        ctx.strokeStyle = state.hairColor;
        ctx.lineWidth = randomRange(1, 3);
        ctx.stroke();
      }
    },
    'long-waves': () => {
      ctx.strokeStyle = state.hairColor;
      ctx.lineWidth = randomRange(2, 4);
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(80 + i * 10, 50);
        ctx.quadraticCurveTo(
          80 + i * 10 + randomRange(-10, 10), 100,
          80 + i * 10, 150 + randomRange(0, 20)
        );
        ctx.stroke();
      }
    },
    'braids': () => {
      ctx.fillStyle = state.hairColor;
      const braidWidth = randomRange(8, 12);
      for (let i = 0; i < 3; i++) {
        ctx.fillRect(120 + i * 20, 50, braidWidth, 100 + randomRange(0, 20));
      }
    },
    'buzz-cut': () => {
      ctx.fillStyle = state.hairColor;
      ctx.beginPath();
      ctx.arc(150mePath();
      ctx.arc(150, 150, 100, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-in';
      ctx.fillStyle = state.hairColor;
      ctx.fillRect(50, 50, 200, 20);
      ctx.globalCompositeOperation = 'source-over';
    },
    'bald': () => {}
  },
  expressions: {
    happy: () => {
      // Eyes
      ctx.beginPath();
      ctx.arc(120, 100, 10, 0, Math.PI * 2);
      ctx.arc(180, 100, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();
      // Mouth
      ctx.beginPath();
      ctx.arc(150, 170, 20 + randomRange(-5, 5), 0, Math.PI, false);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();
    },
    sad: () => {
      ctx.beginPath();
      ctx.arc(120, 110, 10, 0, Math.PI * 2);
      ctx.arc(180, 110, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(150, 180, 20 + randomRange(-5, 5), Math.PI, 2 * Math.PI, false);
      ctx.stroke();
    },
    anxious: () => {
      ctx.beginPath();
      ctx.moveTo(110, 90);
      ctx.lineTo(130, 100 + randomRange(-5, 5));
      ctx.moveTo(170, 90);
      ctx.lineTo(190, 100 + randomRange(-5, 5));
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(150, 170, 15 + randomRange(-5, 5), 0.2 * Math.PI, 0.8 * Math.PI);
      ctx.stroke();
    },
    lonely: () => {
      ctx.beginPath();
      ctx.arc(120, 110, 10, 0, Math.PI * 2);
      ctx.arc(180, 110, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(130, 180);
      ctx.quadraticCurveTo(150, 190 + randomRange(-5, 5), 170, 180);
      ctx.stroke();
    },
    hopeful: () => {
      ctx.beginPath();
      ctx.arc(120, 100, 10, 0, Math.PI * 2);
      ctx.arc(180, 100, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(150, 170, 15 + randomRange(-5, 5), 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.stroke();
    },
    confused: () => {
      ctx.beginPath();
      ctx.moveTo(110, 90 + randomRange(-5, 5));
      ctx.lineTo(130, 100);
      ctx.moveTo(170, 100);
      ctx.lineTo(190, 90 + randomRange(-5, 5));
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(150, 170, 15 + randomRange(-5, 5), 0.3 * Math.PI, 0.7 * Math.PI);
      ctx.stroke();
    }
  },
  eyebrows: {
    thick: () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(100, 80, 40 + randomRange(-5, 5), 8 + randomRange(-2, 2));
      ctx.fillRect(160, 80, 40 + randomRange(-5, 5), 8 + randomRange(-2, 2));
    },
    arched: () => {
      ctx.beginPath();
      ctx.moveTo(100, 80);
      ctx.quadraticCurveTo(120, 70 + randomRange(-5, 5), 140, 80);
      ctx.moveTo(160, 80);
      ctx.quadraticCurveTo(180, 70 + randomRange(-5, 5), 200, 80);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 5;
      ctx.stroke();
    }
  },
  facialHair: {
    none: () => {},
    beard: () => {
      ctx.fillStyle = state.hairColor;
      ctx.beginPath();
      ctx.moveTo(120, 180);
      ctx.quadraticCurveTo(150, 220 + randomRange(-10, 10), 180, 180);
      ctx.lineTo(180, 160);
      ctx.quadraticCurveTo(150, 200, 120, 160);
      ctx.closePath();
      ctx.fill();
    }
  }
};

// Makeup drawing
function drawMakeup() {
  if (state.eyeshadow !== 'none') {
    ctx.fillStyle = state.eyeshadow === 'blue' ? `rgba(70, 130, 180, ${randomRange(0.5, 0.8)})` : `rgba(51, 51, 51, ${randomRange(0.5, 0.8)})`;
    ctx.fillRect(110, 90, 30 + randomRange(-5, 5), 10);
    ctx.fillRect(160, 90, 30 + randomRange(-5, 5), 10);
  }
  if (state.lipColor !== 'none') {
    ctx.fillStyle = state.lipColor === 'red' ? `rgba(255, 0, 0, ${randomRange(0.7, 1)})` : `rgba(255, 105, 180, ${randomRange(0.7, 1)})`;
    ctx.beginPath();
    ctx.arc(150, 170, 20 + randomRange(-5, 5), 0, Math.PI, false);
    ctx.fill();
  }
}

// State
let state = {
  mood: 'happy',
  hairStyle: 'short-crop',
  hairColor: 'black',
  eyebrows: 'thick',
  facialHair: 'none',
  lipColor: 'none',
  eyeshadow: 'none'
};

// Draw face
function drawFace() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffe4c4'; // Skin tone
  ctx.beginPath();
  ctx.arc(150, 150, 100, 0, Math.PI * 2);
  ctx.fill();

  components.expressions[state.mood]();
  components.eyebrows[state.eyebrows]();
  components.facialHair[state.facialHair]();
  drawMakeup();
  components.hair[state.hairStyle]();
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

document.getElementById('lip-color').addEventListener('change', (e) => {
  state.lipColor = e.target.value;
  drawFace();
});

document.getElementById('eyeshadow').addEventListener('change', (e) => {
  state.eyeshadow = e.target.value;
  drawFace();
});

document.getElementById('save-assessment').addEventListener('click', () => {
  const assessment = {
    mood: state.mood,
    hair: { style: state.hairStyle, color: state.hairColor },
    features: { eyebrows: state.eyebrows, facialHair: state.facialHair },
    makeup: { lipColor: state.lipColor, eyeshadow: state.eyeshadow },
    notes: document.getElementById('counselor-notes').value,
    timestamp: new Date().toISOString()
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