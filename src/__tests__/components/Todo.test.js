import React from "react";
import { shallow } from "enzyme";

import { Todo } from "../../components/Todo";

describe("Todo component", () => {
  const props = {
    todo: {
      id: 1,
      text: "a todo",
      complete: false
    },
    updateStatus: jest.fn(),
    removeTodo: jest.fn()
  };
  const wrapper = shallow(<Todo {...props} />);

  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the todo values", () => {
    expect(wrapper.find("#todo_text").text()).toEqual("a todo");
    expect(wrapper.find("input").prop("checked")).toBe(false);
  });

  it("should dispatch UPDATE_STATUS action", () => {
    wrapper.find("input").simulate("change");
    expect(props.updateStatus).toHaveBeenCalledWith(props.todo.id);
  });

  it("should not dispatch remove if no selected on confirmation", () => {
    window.confirm = jest.fn(() => false);
    wrapper.find("#todo_remove").simulate("click");
    expect(props.removeTodo).not.toHaveBeenCalled();
  });

  it("should dispatch REMOVE_TODO action", () => {
    window.confirm = jest.fn(() => true);
    wrapper.find("#todo_remove").simulate("click");
    expect(window.confirm).toBeCalled();
    expect(props.removeTodo).toHaveBeenCalledWith(props.todo.id);
  });
});
