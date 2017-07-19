const winner = (state = null, action) => {
  switch(action.type) {
    case "SET_WINNER":
      return action.player
    default:
      return state
  }
}
export default winner