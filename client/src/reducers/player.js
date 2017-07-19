const player = (state = "X", action) => {
  switch(action.type) {
    case "CHANGE_TURN":
      return (
        (state === "X") ? "O" : "X"
      )
    default:
      return state
  }
}

export default player