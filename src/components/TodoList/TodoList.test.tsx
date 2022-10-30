import { TodoList } from "./TodoList";
import { render, screen } from "@testing-library/react";
import { ITodo } from "../../types/todo";
import { v4 as uuidv4 } from "uuid";

describe("TodoList componeents", () => {
  test("TodoList is empty", () => {
    const todos: ITodo[] = [];
    render(
      <TodoList
        todos={todos}
        indexBlock={0}
        removeTodo={function (id: string): void {
          throw new Error("Function not implemented.");
        }}
        toggleTodo={function (id: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.queryByRole("Mindbox")).toBeNull();
  });
  test("TodoList with value", () => {
    const uuid: ITodo["id"] = uuidv4();
    const todos: ITodo[] = [{ id: uuid, title: "Mindbox", completed: false }];

    render(
      <TodoList
        todos={todos}
        indexBlock={0}
        removeTodo={function (id: string): void {
          throw new Error("Function not implemented.");
        }}
        toggleTodo={function (id: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.getByText("Mindbox")).toBeInTheDocument();
  });
});
