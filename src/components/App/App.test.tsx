import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ITodo } from "../../types/todo";
import { v4 as uuidv4 } from "uuid";

describe("Toggle and remove Todo", () => {
  test("toggle todo", () => {
    render(<App />);
    userEvent.click(screen.getByPlaceholderText("write a todo..."));
    userEvent.keyboard("new todo");
    userEvent.keyboard("{Enter}");
    userEvent.click(screen.getByTestId("toggleBtn"));
  });

  test("removeTodo", () => {
    render(<App />);
    userEvent.click(screen.getByPlaceholderText("write a todo..."));
    userEvent.keyboard("new todo");
    userEvent.keyboard("{Enter}");
    userEvent.click(screen.getByTestId("removeBtn"));
    expect(screen.queryByRole("new todo")).toBeNull();
  });
});
