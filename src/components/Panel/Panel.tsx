import React, { useRef } from "react";
import styles from "./styles.module.scss";
import plusPng from "./../../images/plus.png";
import { ITodo } from "./../../types/todo";

interface PanelProps {
  addTodo: (title: ITodo["title"]) => void;
}

export const Panel: React.FC<PanelProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const pressKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="write a todo..."
        value={inputValue}
        onChange={handleChangeValue}
        onKeyDown={pressKeyDown}
        ref={inputRef}
      />
      <button
        className={styles.addBtn}
        onClick={handleAddTodo}
        style={{ opacity: inputValue ? "1" : ".3" }}
        id="addBtn"
      >
        <img src={plusPng} alt="add" className={styles.addImg} />
      </button>
    </div>
  );
};
