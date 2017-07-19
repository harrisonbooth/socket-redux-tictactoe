import React from "react"
import PropTypes from "prop-types"
import GameBoard from "../containers/GameBoard"
import WinningPlayer from "../containers/WinningPlayer"

const App = ({ onPlayerTypeButtonClick, playerType }) => {
  let playerButtons = null
  if(!playerType) playerButtons = (
    <div id="player-type-button-wrapper">
      <button className="player-type-button X" onClick={() => {onPlayerTypeButtonClick("X")}}></button>
      <button className="player-type-button O" onClick={() => {onPlayerTypeButtonClick("O")}}></button>
    </div>
  )

  return (
    <div>
      <GameBoard />
      <WinningPlayer />
      {playerButtons}
    </div>
  )
}

export default App