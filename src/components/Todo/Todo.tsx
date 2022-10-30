import React from "react";
import { ITodo } from "../../types/todo";
import styles from "./styles.module.scss";
import donePng from "./../../images/check.png";
import { ReactComponent as Trash } from "./../../images/trash.svg";

interface TodoProps {
  todo: ITodo;
  removeTodo: (id: ITodo["id"]) => void;
  toggleTodo: (id: ITodo["id"]) => void;
}

export const Todo: React.FC<TodoProps> = ({ todo, removeTodo, toggleTodo }) => {
  const { id, title, completed } = todo;
  return (
    <>
      <div
        className={styles.containerTodo}
        style={{ opacity: completed ? "0.4" : "1" }}
      >
        <button
          className={styles.doneBtn}
          onClick={() => toggleTodo(id)}
          data-testid="toggleBtn"
        >
          <img
            src={donePng}
            alt="done"
            className={completed ? styles.toggleImg : styles.doneImg}
          />
        </button>
        <p className={styles.todoTitle}>{title}</p>
        <button
          className={styles.removeBtn}
          onClick={() => removeTodo(id)}
          data-testid="removeBtn"
        >
          <Trash className={styles.trashSvg} />
        </button>
      </div>
    </>
  );
};
