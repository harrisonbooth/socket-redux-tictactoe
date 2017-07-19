const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('client/build'))

app.get('/', () => {
  res.sendFile(`${ __dirname }/client/build/index.html`)
})

let roomCount = 1

io.on('connection', socket => {
  const roomList = io.sockets.adapter.rooms

  let count
  if(roomList["room"+roomCount] === undefined) {
    count = 0
  } else {
    count = roomList["room"+roomCount].length
  }

  if(count < 2) {
    socket.join("room"+roomCount)
    io.to("room"+roomCount).emit("roomNumber", "room"+roomCount)
  } else {
    roomCount++
    socket.join("room"+roomCount)
    io.to("room"+roomCount).emit("roomNumber", "room"+roomCount)
  }

  socket.on('action', emitObject => {
    io.to(emitObject.room).emit('action', emitObject.action)
  })
})

const server = http.listen(3000, function () {
  console.log('TicTacToe listening on port', 3000)
})