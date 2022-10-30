import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Panel } from "./components/Panel/Panel";
import { TodoList } from "./components/TodoList/TodoList";
import { ITodo } from "./types/todo";
import { v4 as uuidv4 } from "uuid";
import { SelectionBlock } from "./components/SelectionBlock/SelectionBlock";
import { ReactComponent as GitHub } from "./images/github.svg";
function App() {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [indexBlock, setIndexBlock] = React.useState<number>(0);

  const addTodo = (title: ITodo["title"]): void => {
    setTodos([
      {
        id: uuidv4(),
        title: title,
        completed: false,
      },
      ...todos,
    ]);
  };

  const removeTodo = (id: ITodo["id"]): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: ITodo["id"]): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  return (
    <div className="App">
      <GitHub className="GitHub" />
      <Header />
      <Panel addTodo={addTodo} />
      <SelectionBlock
        setIndexBlock={setIndexBlock}
        indexBlock={indexBlock}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        indexBlock={indexBlock}
      />
    </div>
  );
}

export default App;
