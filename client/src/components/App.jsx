import React from "react"
import PropTypes from "prop-types"
import GameBoard from "../containers/GameBoard"
import WinningPlayer from "../containers/WinningPlayer"

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.onLoadApp(this.props.currentPlayers, this.props.socket)
  }
  
  render () {
    return (
      <div>
        <GameBoard />
        <WinningPlayer />
      </div>
    )
  }
}

App.propTypes = {
  currentPlayers: PropTypes.array,
  socket: PropTypes.object
}

export default App