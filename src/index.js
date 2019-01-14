import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import App from "./components/App";
let initialState = { todos: [] };
const persistedState = localStorage.getItem("todos");

if (persistedState) {
  initialState = { todos: JSON.parse(persistedState) };
  //console.log("initial state from persisted data: ", initialState);
}
//console.log("initialState: ", initialState);
const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  //console.log(store.getState());
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
