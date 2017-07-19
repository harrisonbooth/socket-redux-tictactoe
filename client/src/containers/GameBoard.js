import { connect } from "react-redux"
import { changeTurn, changeTile } from "../actions"
import Board from "../components/Board"

const mapStateToProps = state => {
  return {
    board: state.board,
    player: state.player,
    winner: state.winner,
    playerType: state.playerType,
    socket: state.socket,
    room: state.room
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTileClick: (tile, index, player, winner, playerType, socket, room) => {
      if(tile || winner) return
      if(playerType !== player) return
      socket.emit("action", {
        action: changeTile(index, player),
        room
      })
      socket.emit("action", {
        action: changeTurn(player),
        room 
      })
    }
  }
}

const GameBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default GameBoard