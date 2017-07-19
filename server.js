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
  let currentRoom = "room"+roomCount

  let count
  if(roomList[currentRoom] === undefined) {
    count = 0
  } else {
    count = roomList[currentRoom].length
  }

  if(count < 2) {
    socket.join(currentRoom)
    io.to(currentRoom).emit("roomNumber", currentRoom)
  } else {
    roomCount++
    currentRoom = "room"+roomCount
    socket.join(currentRoom)
    io.to(currentRoom).emit("roomNumber", currentRoom)
  }

  socket.on('action', emitObject => {
    io.to(emitObject.room).emit('action', emitObject.action)
  })
})

const server = http.listen(3000, function () {
  console.log('TicTacToe listening on port', 3000)
})