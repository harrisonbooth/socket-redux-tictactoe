import React from "react"
import PropTypes from "prop-types"
import GameBoard from "../containers/GameBoard"
import WinningPlayer from "../containers/WinningPlayer"

const App = ({ onPlayerTypeButtonClick }) => {
  return (
    <div>
      <GameBoard />
      <WinningPlayer />
      <button onClick={() => {onPlayerTypeButtonClick("X")}}>X</button>
      <button onClick={() => {onPlayerTypeButtonClick("O")}}>O</button>
    </div>
  )
}

export default App