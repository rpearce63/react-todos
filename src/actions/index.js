import * as types from "./types";

export const addTodo = text => {
  return {
    type: types.ADD_TODO,
    id: Date.now(),
    text
  };
};

export const updateStatus = id => {
  return {
    type: types.UPDATE_STATUS,
    id
  };
};

export const removeTodo = id => ({
  type: types.REMOVE_TODO,
  id
});
