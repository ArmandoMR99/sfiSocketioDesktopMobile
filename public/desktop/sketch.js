let bpmSlider;
let bpm = 90;
let socket;

function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);

  // Crear el slider de BPM (60-180)
  bpmSlider = createSlider(60, 180, 90);
  bpmSlider.position(20, 60);
  bpmSlider.style('width', '360px');

  socket = io(); // conexión automática

  // Enviar BPM cada 100ms
  setInterval(() => {
    bpm = bpmSlider.value();
    socket.emit('bpm', bpm);
  }, 100);
}

function draw() {
  background(30);
  fill(255);
  textSize(20);
  text("Simulación de BPM", width / 2, 20);
  textSize(32);
  text(bpmSlider.value() + " LPM", width / 2, 120);
}
