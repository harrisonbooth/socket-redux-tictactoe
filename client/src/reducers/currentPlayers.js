const currentPlayers = (state = [], action) => {
  switch(action.type) {
    case "ADD_PLAYER":
      if(state.length > 2) return state
      let newPlayer = "X"
      if(state.length > 0) newPlayer = "O"
      return [
        ...state,
        newPlayer
      ]
    case "SET_PLAYERS":
      return action.currentPlayers
    default:
      return state
  }
}

export default currentPlayers