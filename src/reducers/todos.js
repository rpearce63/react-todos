import * as types from "../actions/types";

export default (state = [], action) => {
  //console.log(`action: ${action.type} with state: ${state.todos}`);
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, { id: action.id, text: action.text, complete: false }];
    case types.UPDATE_STATUS:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    case types.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
