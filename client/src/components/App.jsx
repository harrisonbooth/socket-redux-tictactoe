import React from "react"
import GameBoard from "../containers/GameBoard"
import WinningPlayer from "../containers/WinningPlayer"

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.onLoadApp(this.props.currentPlayers)
    console.log(this.props)
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

export default App