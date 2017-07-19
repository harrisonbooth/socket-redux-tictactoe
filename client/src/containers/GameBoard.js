import { connect } from "react-redux"
import { changeTurn, changeTile } from "../actions"
import Board from "../components/Board"

const mapStateToProps = state => {
  return {
    board: state.board,
    player: state.player,
    winner: state.winner,
    playerType: state.playerType,
    socket: state.socket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTileClick: (tile, index, player, winner, playerType, socket) => {
      if(tile || winner) return
      if(playerType !== player) return
      // dispatch(changeTile(index, player))
      socket.emit("action", changeTile(index, player))
      // dispatch(changeTurn(player))
      socket.emit("action", changeTurn(player))
    }
  }
}

const GameBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default GameBoard