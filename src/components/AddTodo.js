import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

export class AddTodo extends Component {
  state = { todo: "" };

  addTodo = () => {
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };
  render() {
    return (
      <div className="add_todo">
        <input
          className="add_todo--input"
          type="text"
          value={this.state.todo}
          onChange={e => this.setState({ todo: e.target.value })}
        />
        <button
          className="add_todo--button"
          onClick={this.addTodo}
          disabled={!this.state.todo && "disabled"}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
