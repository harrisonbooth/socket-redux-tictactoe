import React from "react"
import PropTypes from "prop-types"
import { dispatch } from "redux"
import { setWinner } from "../actions"

const Winner = ({ board, winner, onWinnerDeclared, onResetButtonPressed, socket }) => {
  if(!winner) return null

  return(
    <div id="win-display">
      <h1>{winner} wins!</h1>
      <button 
        onClick={
          () => {
            onResetButtonPressed(socket)
          }
        }
      >
        Play again!
      </button>
    </div>
  )
}

Winner.propTypes = {
  board: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  winner: PropTypes.string,
}

export default Winner