const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('client/build'))

app.get('/', () => {
  res.sendFile(`${ __dirname }/client/build/index.html`)
})

io.on('connection', socket => {
  socket.on('event', object => {
    io.emit('event', object)
  })
})

const server = http.listen(3000, function () {
  console.log('TicTacToe listening on port', this.address().port)
})