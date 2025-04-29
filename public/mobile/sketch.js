let socket;
let song;
let bpm = 60; // valor por defecto

function preload() {
  song = loadSound('/assets/cancion.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(24);
  fill(255);

  socket = io(); // conexión automática a la misma URL/puerto del servidor

  socket.on('connect', () => {
    console.log('Conectado al servidor');
  });

  socket.on('bpm', (data) => {
    bpm = data;
    console.log('BPM recibidos:', bpm);
    updatePlaybackRate();
  });

  // Espera a que el usuario toque para iniciar la música (política del navegador)
  userStartAudio().then(() => {
    if (!song.isPlaying()) {
      song.loop();
    }
  });
}

function draw() {
  background(30);
  text(`BPM actuales: ${bpm}`, width / 2, height / 2);
}

function updatePlaybackRate() {
  // Ajuste proporcional (puedes afinar esto)
  let rate = map(bpm, 40, 180, 0.5, 2.0, true);
  console.log(`rate: ${rate}`);
  
  //song.rate(rate);
}
