import React from "react";
import { shallow } from "enzyme";

import App from "../../components/App";

describe("App component", () => {
  const wrapper = shallow(<App />);
  it("should render properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("contains AddTodo component", () => {
    expect(wrapper.find("Connect(AddTodo)").exists()).toBe(true);
  });

  it("contains a TodoList component", () => {
    expect(wrapper.find("Connect(TodoList)").exists()).toBe(true);
  });
});
