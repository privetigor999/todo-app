import { Panel } from "./Panel";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "../../types/todo";

describe("Panel component (input)", () => {
  test("The task list changes after adding a new task", () => {
    const todos: ITodo[] = [];
    const uuid: ITodo["id"] = uuidv4();
    render(
      <Panel
        addTodo={(value) =>
          todos.push({ id: uuid, title: value, completed: false })
        }
      />
    );
    userEvent.click(screen.getByPlaceholderText("write a todo..."));
    userEvent.keyboard("test");
    userEvent.keyboard("{Enter}");
    expect(todos).toStrictEqual([
      { id: uuid, title: "test", completed: false },
    ]);
  });
  test("The task list does not change if you do not enter anything and press enter", () => {
    const todos: ITodo[] = [];
    const uuid: ITodo["id"] = uuidv4();
    render(
      <Panel
        addTodo={(value) =>
          todos.push({ id: uuid, title: value, completed: false })
        }
      />
    );
    userEvent.click(screen.getByPlaceholderText("write a todo..."));
    userEvent.keyboard(" ");
    userEvent.keyboard("{Enter}");
    expect(todos).toStrictEqual([]);
  });
});
