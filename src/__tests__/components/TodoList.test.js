import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import ConnectedTodoList, { TodoList } from "../../components/TodoList";

describe("TodoList component", () => {
  const props = {
    todos: [
      {
        id: 1,
        text: "my todo",
        complete: false
      },
      {
        id: 2,
        text: "my other todo",
        complete: true
      }
    ]
  };
  const wrapper = shallow(<TodoList {...props} />);

  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain a list of Todos", () => {
    expect(wrapper.find("Connect(Todo)")).toHaveLength(2);
  });

  it("should render the connected coomponent properly", () => {
    const mockStore = configureStore();
    const store = mockStore({ ...props });
    const connected = shallow(<ConnectedTodoList store={store} />);
    expect(connected.exists()).toBe(true);
    expect(connected.prop("todos")).toEqual(props.todos);
  });
});
