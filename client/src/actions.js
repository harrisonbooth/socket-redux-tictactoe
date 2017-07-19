export const changeTile = (index, player) => {
  return {
    type: "CHANGE_TILE",
    index,
    player
  }
}

export const changeTurn = player => {
  return {
    type: "CHANGE_TURN",
    player
  }
}

export const setWinner = player => {
  return {
    type: "SET_WINNER",
    player
  }
}

export const resetGame = () => {
  return {
    type: "RESET_GAME"
  }
}

export const grantPlayerType = playerType => {
  return {
    type: "GRANT_PLAYER_TYPE",
    playerType
  }
}

export const addPlayer = () => {
  return {
    type: "ADD_PLAYER"
  }
}

export const setSocket = (socket) => {
  return {
    type: "SET_SOCKET",
    socket
  }
}

export const setPlayers = (currentPlayers) => {
  return {
    type: "SET_PLAYERS",
    currentPlayers
  }
}

export const setRoom = (roomNumber) => {
  return {
    type: "SET_ROOM",
    roomNumber
  }
}