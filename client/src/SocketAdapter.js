import { dispatch } from "redux"
import { setSocket, grantPlayerType, setRoom } from "./actions"

const SocketAdapter = (socket, store) => {
  socket.on("roomNumber", (roomNumber) => {
    console.log(roomNumber)
    store.dispatch(setRoom(roomNumber))
    store.dispatch(setSocket(socket))
  })

  socket.on("action", (action) => {
    store.dispatch(action)
  })
}

export default SocketAdapter