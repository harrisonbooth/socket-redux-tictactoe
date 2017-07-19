import { connect } from "react-redux"
import { addPlayer, grantPlayerType } from "../actions"
import App from "../Components/App"

const decidePlayerType = (currentPlayers) => {
  if(currentPlayers.length > 1) return
  if(currentPlayers.length > 0) return "O"
  return "X"
}

const mapStateToProps = ({ currentPlayers, playerType }) => {
  return {
    currentPlayers,
    playerType
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadApp: (currentPlayers) => {
      dispatch(grantPlayerType(decidePlayerType(currentPlayers)))
      dispatch(addPlayer())
    }
  }
}

const GameClient = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default GameClient