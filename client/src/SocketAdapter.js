import { dispatch } from "redux"
import { setSocket } from "./actions"

const SocketAdapter = (socket, store) => {
  store.dispatch(setSocket(socket))
  socket.on("action", (action) => {
    store.dispatch(action)
  })
}

export default SocketAdapter