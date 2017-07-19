const board = (
  state = [
    null, null, null,
    null, null, null,
    null, null, null
  ],
  action
) => {
  switch(action.type) {
    case "CHANGE_TILE":
      return state.map((tile, index) => {
        return (index === action.index)
          ? action.player : tile
      })
    case "RESET_GAME":
      return [
        null, null, null,
        null, null, null,
        null, null, null
      ]
    default:
      return state
  }
}

export default board