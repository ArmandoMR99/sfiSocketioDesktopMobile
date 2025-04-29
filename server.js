const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('Un cliente conectado');

  socket.on('bpm', (data) => {
    // Reenvía el BPM a todos los demás clientes
    socket.broadcast.emit('bpm', data);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log('Servidor escuchando en puerto', PORT);
});
