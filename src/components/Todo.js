import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

export class Todo extends Component {
  handleOnChange = () => {
    this.props.updateStatus(this.props.todo.id);
  };
  removeTodo = () => {
    if (window.confirm("Are you sure?")) {
      this.props.removeTodo(this.props.todo.id);
    }
  };

  render() {
    return (
      <div className="todo_item">
        <input
          className="todo_item--checkbox"
          type="checkbox"
          checked={this.props.todo.complete}
          onChange={this.handleOnChange}
        />
        <div className="todo_item--text">{this.props.todo.text}</div>
        <div className="todo_item--remove" onClick={this.removeTodo}>
          {" "}
          x{" "}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Todo);
