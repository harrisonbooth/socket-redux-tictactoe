import board from "./board"
import player from "./player"
import winner from "./winner"
import currentPlayers from "./currentPlayers"
import playerType from "./playerType"
import socket from "./socket"
import room from "./room"
import { combineReducers } from "redux"

const ticTacToeApp = combineReducers({
  board,
  player,
  winner,
  currentPlayers,
  playerType,
  socket,
  room
})

export default ticTacToeApp