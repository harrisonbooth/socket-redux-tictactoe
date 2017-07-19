import { connect } from "react-redux"
import { setWinner, resetGame } from "../actions"
import Winner from "../components/Winner"

const checkWin = (board) => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let winningPlayer = "Nobody"
  board.forEach(tile => {
    if(tile === null) winningPlayer = null
  })

  winConditions.forEach((winCondition) => {
    if(
      board[winCondition[0]] === board[winCondition[1]] &&
      board[winCondition[1]] === board[winCondition[2]] &&
      board[winCondition[0]] !== null
    ) winningPlayer = board[winCondition[0]];
  });

  return winningPlayer
};

const mapStateToProps = ({ board, socket }) => {
  return {
    winner: checkWin(board),
    socket
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onResetButtonPressed: socket => {
      socket.emit("action", resetGame())
    }
  }
}

const WinningPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Winner)

export default WinningPlayer