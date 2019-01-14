import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import * as actions from "../actions";

export class TodoList extends Component {
  componentDidMount() {
    //this.props.fetchTodos();
  }
  render() {
    //console.log("render with ", this.props.todos);
    return (
      <div>
        <h3>Todos</h3>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({ todos: state.todos }),
  actions
)(TodoList);
