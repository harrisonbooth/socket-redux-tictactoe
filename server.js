const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static('client/build'))

app.get('/', () => {
  res.sendFile(`${ __dirname }/client/build/index.html`)
})

io.on('connection', socket => {
  socket.on('action', action => {
    io.emit('action', action)
  })
})

const server = http.listen(process.env.PORT, function () {
  console.log('TicTacToe listening on port', process.env.PORT)
})