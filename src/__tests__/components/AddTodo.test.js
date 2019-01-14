import React from "react";
import { shallow } from "enzyme";

import { AddTodo } from "../../components/AddTodo";

describe("AddTodo component", () => {
  const mockAddTodo = jest.fn();
  const wrapper = shallow(<AddTodo addTodo={mockAddTodo} />);

  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("creates a textfield and button", () => {
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("updates the text field", () => {
    wrapper.find("input").simulate("change", { target: { value: "new todo" } });
    expect(wrapper.state().todo).toEqual("new todo");
    expect(wrapper.find("input").prop("value")).toEqual("new todo");
  });

  it("dispatches the ADD_TODO action", () => {
    wrapper.setState({ todo: "new todo" });
    wrapper.find("button").simulate("click");
    expect(mockAddTodo).toHaveBeenCalledWith("new todo");
  });
});
