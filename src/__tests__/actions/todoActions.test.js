import * as types from "../../actions/types";
import * as actions from "../../actions";

describe("todo action creators", () => {
  const now = Date.now();
  Date.now = jest.fn(() => now);
  it("creates an action to add a todo", () => {
    expect(actions.addTodo("a todo")).toEqual({
      type: types.ADD_TODO,
      id: now,
      text: "a todo"
    });
  });

  it("creates an action to update todo status", () => {
    expect(actions.updateStatus(1)).toEqual({
      type: types.UPDATE_STATUS,
      id: 1
    });
  });

  it("creates an action to remove a todo", () => {
    expect(actions.removeTodo(1)).toEqual({ type: types.REMOVE_TODO, id: 1 });
  });
});
