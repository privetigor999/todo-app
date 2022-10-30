import React from "react";
import { Todo } from "../Todo/Todo";
import { ITodo } from "./../../types/todo";
import styles from "./styles.module.scss";

interface TodoListProps {
  todos: ITodo[];
  indexBlock: number;
  removeTodo: (id: ITodo["id"]) => void;
  toggleTodo: (id: ITodo["id"]) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  indexBlock,
  removeTodo,
  toggleTodo,
}) => {
  if (!todos.length) return null;

  const activeTodos = (todos: ITodo[]): ITodo[] => {
    return todos.filter((todo) => todo.completed === false);
  };

  const completedTodos = (todos: ITodo[]): ITodo[] => {
    return todos.filter((todo) => todo.completed === true);
  };

  const filteredTodos = [todos, activeTodos(todos), completedTodos(todos)][
    indexBlock
  ];

  return (
    <div className={styles.container}>
      {filteredTodos.map((todo: ITodo) => (
        <Todo
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};
