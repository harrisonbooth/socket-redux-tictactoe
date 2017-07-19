import React from "react"
import PropTypes from "prop-types"
import { dispatch } from "redux"
import { setWinner } from "../actions"

const Winner = ({ winner, onResetButtonPressed, socket }) => {
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
  winner: PropTypes.string,
  onResetButtonPressed: PropTypes.func,
  socket: PropTypes.object
}

export default Winner