import React from "react";
import styles from "./styles.module.scss";
import { Selection } from "../../types/selection";
import { ITodo } from "../../types/todo";

interface SelectionBlockProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  setIndexBlock: React.Dispatch<React.SetStateAction<number>>;
  indexBlock: number;
}

export const SelectionBlock: React.FC<SelectionBlockProps> = ({
  todos,
  setTodos,
  setIndexBlock,
  indexBlock,
}) => {
  const [countLeftTodos, setCountLeftTodos] = React.useState<number>(0);

  const selections: any = [
    { id: 0, title: "All" },
    { id: 1, title: "Active" },
    { id: 2, title: "Completed" },
  ];

  React.useEffect(() => {
    setCountLeftTodos(todos.filter((todo) => !todo.completed).length);
  }, [todos]);

  const handleClearCompletedTodos = (): void => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className={styles.selectionBlock}>
      <p>
        {countLeftTodos} {countLeftTodos === 1 ? "todo" : "todos"} left
      </p>
      <ul className={styles.selectList}>
        {selections.map((selection: Selection) => (
          <li
            key={selection.id}
            onClick={() => setIndexBlock(selection.id)}
            className={
              indexBlock === selection.id
                ? styles.activeBlock
                : styles.notActiveBlock
            }
          >
            {selection.title}
          </li>
        ))}
      </ul>
      <p className={styles.notActiveBlock} onClick={handleClearCompletedTodos}>
        Remove completed
      </p>
    </div>
  );
};
