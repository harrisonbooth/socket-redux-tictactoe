import { dispatch } from "redux"
import { setSocket, grantPlayerType } from "./actions"

const SocketAdapter = (socket, store) => {
  store.dispatch(setSocket(socket))
  // socket.on("setPlayerType", (playerType) => {
  //   store.dispatch(grantPlayerType(playerType))
  // })

  socket.on("action", (action) => {
    store.dispatch(action)
  })
}

export default SocketAdapter