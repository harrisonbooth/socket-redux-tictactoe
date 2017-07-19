const room = (state = "", action) => {
  switch(action.type){
    case "SET_ROOM":
      return action.roomNumber
    default:
      return state
  }
}    

export default room