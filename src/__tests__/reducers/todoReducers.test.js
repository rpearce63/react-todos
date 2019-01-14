import reducers from "../../reducers/todos";
import * as types from "../../actions/types";
import rootReducer from "../../reducers";

const mockTodo = {
  id: 1,
  text: "Test the reducers",
  complete: false
};
let initialState = [];
describe("todo reducers", () => {
  it("returns the initial state", () => {
    expect(reducers(undefined, {})).toEqual([]);
  });

  it("should handle ADD_TODO", () => {
    const addAction = {
      type: types.ADD_TODO,
      id: mockTodo.id,
      text: mockTodo.text
    };
    expect(reducers(undefined, addAction)).toEqual([mockTodo]);
  });

  it("should handle UPDATE_STATUS", () => {
    const updateAction = {
      type: types.UPDATE_STATUS,
      id: mockTodo.id
    };
    const todo = {
      id: 2,
      text: "another todo",
      complete: false
    };
    initialState = [mockTodo, todo];
    expect(reducers(initialState, updateAction)).toEqual([
      { ...mockTodo, complete: true },
      todo
    ]);
  });

  it("should handle REMOVE_TODO", () => {
    const removeAction = {
      type: types.REMOVE_TODO,
      id: mockTodo.id
    };
    initialState = [mockTodo];
    expect(reducers(initialState, removeAction)).toEqual([]);
  });
  describe("root reducer", () => {
    it("should return the combined reducer", () => {
      expect(rootReducer(undefined, {})).toEqual({ todos: [] });
    });
  });
});
