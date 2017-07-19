import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ticTacToeApp from "./reducers/index";
import GameClient from "./containers/GameClient";

window.addEventListener("load", () => {
  ReactDOM.render(
    <Provider store={ createStore(ticTacToeApp) }>
      <GameClient />
    </Provider>,
    document.getElementById("root")
  );
});