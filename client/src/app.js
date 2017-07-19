import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import ticTacToeApp from "./reducers/index"
import GameClient from "./containers/GameClient"
import io from "socket.io-client"
import SocketAdapter from "./SocketAdapter"

const ticTacToeStore = createStore(ticTacToeApp)

const socket = io("http://localhost:3000/")
SocketAdapter(socket, ticTacToeStore)

window.addEventListener("load", () => {
  ReactDOM.render(
    <Provider store={ ticTacToeStore }>
      <GameClient />
    </Provider>,
    document.getElementById("root")
  )
})