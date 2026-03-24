// --- GLOBAL CONFIGURATION ---
let inclinaisonX = 0.8; // Static X-axis tilt (pitch)
let inclinaisonZ = 0.4; // Static Z-axis tilt (roll)
let rotateSpeed = 0.005; // Constant rotation speed on the main axis

let curveNumber = 12; // Amount of distinct filament lines
let curveDensity = 2; // Number of sine waves/oscillations per loop

let donutRadius = 150; // The overall width of the ring
let donutHeight = 50; // Vertical distance between crest and trough
let coneEffect = 15; // Taper effect (difference between top and bottom radius)

let offsetX = 10; // Horizontal shift of the top circumference
let offsetZ = 10; // Depth shift of the top circumference

let jitterAmount = 4; // Intensity of the "oscilloscope" signal noise

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);

  // --- Glow / Neon Effect ---
  drawingContext.shadowColor = color(255, 255, 255, 255);
  drawingContext.shadowBlur = 15;

  noFill();
  stroke(255);
  strokeWeight(1.5);

  // --- 1. Scene Orientation (Fixed) ---
  rotateX(inclinaisonX);
  rotateZ(inclinaisonZ);

  // --- 2. Self-Rotation (Animated) ---
  rotateY(frameCount * rotateSpeed);

  let u_res = 200;

  for (let f = 0; f < curveNumber; f++) {
    let phaseOffset = map(f, 0, curveNumber, 0, TWO_PI);

    beginShape();
    for (let i = 0; i <= u_res; i++) {
      let u = map(i, 0, u_res, 0, TWO_PI);

      // --- Vertical Sine Movement ---
      let waveY = sin(u * curveDensity + phaseOffset);
      let y = waveY * (donutHeight / 2);

      // --- Tapered Section (Cone Effect) ---
      let rOffset = map(waveY, 1, -1, -coneEffect, coneEffect);
      let currentR = donutRadius + rOffset;

      // --- ASYMMETRIC OFFSET ---
      // We apply the offset only to the top part of the wave (where waveY is positive)
      // This "leans" the small circle in a specific direction
      let currentOffsetX = map(waveY, 1, -1, offsetX, 0);
      let currentOffsetZ = map(waveY, 1, -1, offsetZ, 0);

      // --- Digicore Jitter (Signal Noise) ---
      let jitter = (noise(u * 10, frameCount * 0.1, f) - 0.5) * jitterAmount;

      // Final coordinates calculation
      let x = currentR * cos(u) + currentOffsetX + jitter;
      let z = currentR * sin(u) + currentOffsetZ + jitter;
      let finalY = y + jitter;

      vertex(x, finalY, z);
    }
    endShape(CLOSE);
  }
}
