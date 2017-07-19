import { connect } from "react-redux"
import { changeTurn, changeTile } from "../actions"
import Board from "../components/Board"

const mapStateToProps = state => {
  return {
    board: state.board,
    player: state.player,
    winner: state.winner,
    playerType: state.playerType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTileClick: (tile, index, player, winner, playerType) => {
      if(tile || winner) return
      if(playerType !== player) return
      dispatch(changeTile(index, player))
      dispatch(changeTurn(player))
    }
  }
}

const GameBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default GameBoard