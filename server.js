const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('client/build'))

app.get('/', () => {
  res.sendFile(`${ __dirname }/client/build/index.html`)
})

io.on('connection', socket => {
  // if(io.engine.clientsCount > 1) {
  //   socket.emit('setPlayerType', "O")
  // } else {
  //   socket.emit('setPlayerType', "X")
  // }

  socket.on('action', action => {
    io.emit('action', action)
  })
})

const server = http.listen(3000, function () {
  console.log('TicTacToe listening on port', this.address().port)
})