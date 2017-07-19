import { connect } from "react-redux"
import { grantPlayerType } from "../actions"
import App from "../Components/App"

const decidePlayerType = (currentPlayers) => {
  if(currentPlayers.length > 1) return
  if(currentPlayers.length > 0) return "O"
  return "X"
}

const mapStateToProps = ({ currentPlayers }) => {
  return {
    currentPlayers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPlayerTypeButtonClick: (playerType) => {
      dispatch(grantPlayerType(playerType))
    }
  }
}

const GameClient = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default GameClient