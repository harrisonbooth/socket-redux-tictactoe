const playerType = (state = "", action) => {
  switch(action.type) {
    case "GRANT_PLAYER_TYPE":
      return action.playerType
    default:
      return state
  }
}

export default playerType