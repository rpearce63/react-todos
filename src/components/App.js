import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "../styles/index.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>My Todos</h1>
        <hr />
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}
